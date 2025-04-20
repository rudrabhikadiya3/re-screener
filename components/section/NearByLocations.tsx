import dynamic from 'next/dynamic'
import SectionTitle from '../misc/SectionTitle'
const LazyMap = dynamic(() => import('@/components/misc/map/MapWithPins'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function NearByLocations() {
  return (
    <>
      <SectionTitle>Proximity Insights</SectionTitle>
      <section className='mt-5 flex flex-col md:flex-row gap-3'>
        <LazyMap />
      </section>
    </>
  )
}
