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

Based on this text, return a JSON with the following structure:

${JSON.stringify(demands, null, 2)}

Only return the JSON object. No explanation.
`
  const chatCompletion = await groq.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'llama-3.3-70b-versatile',
  })
  return chatCompletion
}
