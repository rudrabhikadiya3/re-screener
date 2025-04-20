import React from 'react'
import PopulationChart from '../chart/Population'
import { OwnershipPie } from '../chart/OwnershipPie'

export default function DemoGraphicTrends() {
  return (
    <>
      <section className='mt-5'>
        <h2 className='h2'>Demographic Trends</h2>
        <hr className='mt-3' />
      </section>
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
