import fs from 'fs'
import pdf from 'pdf-parse'
import path from 'path'
import { Groq } from 'groq-sdk'

const groq = new Groq({ apiKey: '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' })

export const pdfParser = async (fileName: string) => {
  const filePath = path.join(process.cwd(), 'public', fileName)
  const dataBuffer = fs.readFileSync(filePath)
  const extractedText = await pdf(dataBuffer)
  return extractedText.text
}

export const LLMResponse = async (extractedText: string, demands: Record<string, string>) => {
  const prompt = `You're an AI assistant helping extract specific info from real estate documents. Here is the text content of a PDF describing a property:
-----
${extractedText}  
-----

Based on this obove raw text, return a JSON with the following structure:

${JSON.stringify(demands, null, 2)}
- Take the values from the text above and fill them in the JSON object. the keys of this object is the same as the keys in the demands object. use the value of any particular key as your context to extract the value from the text.
- Only return the JSON object. No explanation or any title. stricly just me only JSON object with filled details in output
- dont return blank value and blank object, you job is to fullfill value
`
  const chatCompletion = await groq.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'llama-3.3-70b-versatile',
  })
  console.log(`🔵 chatCompletion=>`, chatCompletion)
  return chatCompletion
}

export function convertStringToObject(str: string) {
  const cleaned = str.replace(/```/g, '').trim()
  try {
    const obj = JSON.parse(cleaned)
    return obj
  } catch (err) {
    console.error('Invalid JSON string:', err)
    return null
  }
}
