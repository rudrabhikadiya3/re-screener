'use client'
import ImageCarousel from '@/components/misc/ImageCarousel'
import { BriefcaseBusiness, ExternalLink, Landmark, LandPlot } from 'lucide-react'
import Link from 'next/link'
import NearbyDevelopments from '@/components/section/NearbyDevelopments'
import LandSalesTable from '@/components/section/LandSalesTable'
import DemoGraphicTrends from '@/components/section/DemoGraphicTrends'
import NearByLocations from '@/components/section/NearByLocations'

export default function Home() {
  return (
    <main className='font-[family-name:var(--font-inter-sans)] w-screen px-2 md:px-10 lg:px-20 xl:px-30 2xl:px-60 py-3'>
      <section>
        <h1 className='h1'>Deal Overview</h1>
        <hr className='mt-3' />
      </section>
      <section className='mt-5 flex flex-col md:flex-row space-x-10'>
        <div className='w-full md:1/2'>
          <ImageCarousel images={['/images/propertyImage/3.png', '/images/propertyImage/2.png', '/images/propertyImage/1.png']} />
          <div className='text-center text-xs mt-2 text-gray-500'>drag on image to switch images</div>
        </div>
        <div className='w-full md:1/2'>
          <h2 className='text-3xl mb-2'>280 Richards, Brooklyn, NY</h2>
          <p className='text-sm text-gray-500'>Shopping Mall</p>
          <p className='text-xs text-gray-500'>Uploaded 3 days ago</p>

          <div className='my-3'>
            <h3 className='h1'>$143,000,000</h3>
            <p className=' text-gray-500 mb-2'>312,000 sqft | $23.92/sqft</p>
          </div>
          <p className=' text-gray-700'>
            5% <small>cap rate</small>
          </p>

          <div className='text-sm mt-4 text-gray-500 flex items-center space-x-2'>
            <BriefcaseBusiness className='text-sm' size={16} />
            <Link href='#' className='block'>
              Seller: Thor Developers
            </Link>
            <ExternalLink className='text-sm ' size={16} />
          </div>
          <div className='text-sm mt-2 text-gray-500 flex gap-2 items-center'>
            <LandPlot className='text-sm' size={16} /> <p>Project Land Area: 16 Acres</p>
          </div>
          <div className='text-sm mt-2 text-gray-500 flex gap-2 items-center'>
            <Landmark className='text-sm' size={16} /> <p>Zoning: M-2</p>
          </div>
          <p className='text-sm mt-2 text-gray-500'>
            280 Richards, fully leased to Amazon, aligns with HUSPP’s strategy of acquiring prime logistics assets in Brooklyn’s high-demand Red Hook
            submarket. With 13 years remaining on the lease and 3% annual rent escalations, it offers stable, long-term cash flow. While single-tenant
            exposure is a risk, Amazon’s investment-grade rating and renewal options enhance its resilience, making it a strong addition to HUSPP’s
            portfolio
          </p>
        </div>
      </section>

      <NearbyDevelopments />
      <LandSalesTable />
      <DemoGraphicTrends />
      <NearByLocations />
    </main>
  )
}
