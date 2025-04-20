import React from 'react'
import PopulationChart from '../chart/Population'
import { OwnershipPie } from '../chart/OwnershipPie'
import SectionTitle from '../misc/SectionTitle'

export default function DemoGraphicTrends() {
  return (
    <>
      <SectionTitle>Demographic Trends</SectionTitle>
      <section className='mt-5 flex flex-col md:flex-row space- gap-3'>
        <div className='w-full md:w-2/5'>
          <OwnershipPie />
        </div>
        <div className='w-full md:w-3/5'>
          <PopulationChart />
        </div>
      </section>
    </>
  )
}
