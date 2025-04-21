import { NextRequest, NextResponse } from 'next/server'
import { LLMResponse, pdfParser } from '@/utils/server'

export const config = { api: { bodyParser: false } }

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const demandsJson = formData.get('demands') as string
    if (!demandsJson) {
      return NextResponse.json({ error: 'Missing PDF or demands' }, { status: 400 })
    }
    let demands: Record<string, string>
    try {
      demands = JSON.parse(demandsJson)
    } catch (e) {
      return NextResponse.json({ error: 'Invalid JSON in demands' }, { status: 400 })
    }
    const extractedText: string = pdfParser('sample.pdf')
    const AIResponse = await LLMResponse(extractedText, demands)
    const output = AIResponse.choices[0]?.message?.content
    return NextResponse.json({ output })
  } catch (err: any) {
    console.log('🔵 err', err)
    return NextResponse.json({ error: err.message || err.toString() }, { status: 500 })
  }
}
