'use client'
import NearbyDevelopments from '@/components/section/NearbyDevelopments'
import LandSalesTable from '@/components/section/LandSalesTable'
import DemoGraphicTrends from '@/components/section/DemoGraphicTrends'
import NearByLocations from '@/components/section/NearByLocations'
import Zoning from '@/components/section/Zoning'
import Overview from '@/components/section/Overview'

export default function Home() {
  return (
    <main className='font-[family-name:var(--font-inter-sans)] w-screen px-2 md:px-10 lg:px-20 xl:px-30 2xl:px-60 py-3'>
      <section>
        <h1 className='h1'>Deal Overview</h1>
        <hr className='mt-3' />
      </section>

      <Overview />
      <NearbyDevelopments />
      <LandSalesTable />
      <DemoGraphicTrends />
      <NearByLocations />
      <Zoning />
    </main>
  )
}
