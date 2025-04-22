import fs from 'fs'
import pdf from 'pdf-parse'
import path from 'path'
import { Groq } from 'groq-sdk'

const groq = new Groq({ apiKey: process.env.GROK_API_KEY })

export const pdfParser = async (fileName: string) => {
  const filePath = path.join(process.cwd(), 'public', fileName)
  const dataBuffer = fs.readFileSync(filePath)
  const extractedText = await pdf(dataBuffer)
  return extractedText.text
}

let messageHistory: { role: string; content: string }[] = []

export const initLLMWithText = (extractedText: string) => {
  messageHistory = [
    {
      role: 'user',
      content: `You're an AI assistant helping extract specific info from real estate documents. Here is the text content of a PDF describing a property:\n-----\n${extractedText}\n-----\nRemember this text for future queries.`,
    },
  ]
}

export const LLMQueryWithDemands = async (demands: Record<string, string>) => {
  const prompt = `Based on the property description I gave earlier, return a JSON with the following structure:\n\n${JSON.stringify(
    demands,
    null,
    2
  )}\n\n- Take the values from the remembered text and fill them in.\n- Use each key and its value as context to extract matching values.\n- ONLY return the completed JSON. No explanations.`

  messageHistory.push({ role: 'user', content: prompt })

  const chatCompletion = await groq.chat.completions.create({
    messages: messageHistory,
    model: 'llama-3.3-70b-versatile',
  })

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
