# Real Estate Document Processor with Grok API

This is a Next.js application designed to extract structured data from real estate documents using the Grok AI API.

## Project Overview

The application provides utility functions to:

1. Initialize an LLM conversation with extracted text from real estate documents
2. Query the LLM to get structured JSON data based on specified demands

## Prerequisites

Before running the project, ensure you have:

- Node.js installed on your system

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Hero Code

```javascript
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
```

### How It Works

This is the core logic that takes PDF text as input and returns a structured JSON object (as defined in the prompt) as output.

## Note on Performance & Limitations

- This process is **computationally intensive**.
- Grok's free tier has a **token limit**, and processing long PDF text may exceed this capacity.
- If you encounter request limit issues, please **contact Rudra - the developer** for assistance.
