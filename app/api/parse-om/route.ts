import { NextRequest, NextResponse } from 'next/server'
import { convertStringToObject, initLLMWithText, LLMQueryWithDemands, pdfParser } from '@/utils/server'

export const config = { api: { bodyParser: false } }

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const demandsJson = body.demands
    if (!demandsJson) {
      return NextResponse.json({ error: 'Missing PDF or demands' }, { status: 400 })
    }
    let demands: Record<string, string> = demandsJson

    const extractedText: string = await pdfParser('sample.pdf')
    await initLLMWithText(extractedText)
    const AIResponse = await LLMQueryWithDemands(demands)
    const output = AIResponse.choices[0]?.message?.content

    return NextResponse.json({ output: convertStringToObject(output as string) }, { status: 200 })
  } catch (err: any) {
    console.log('🔵 err', err)
    return NextResponse.json({ error: err.message || err.toString() }, { status: 500 })
  }
}
