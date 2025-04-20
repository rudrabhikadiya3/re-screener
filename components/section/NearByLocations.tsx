import dynamic from 'next/dynamic'
const LazyMap = dynamic(() => import('@/components/misc/map/MapWithPins'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function NearByLocations() {
  return (
    <>
      <section className='mt-5'>
        <h2 className='h2'>Proximity Insights</h2>
        <hr className='mt-3' />
      </section>
      <section className='mt-5 flex flex-col md:flex-row gap-3'>
        <LazyMap />
      </section>
    </>
  )
}
