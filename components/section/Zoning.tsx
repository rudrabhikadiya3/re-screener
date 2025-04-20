import { zoneArea, zoningDetails } from '@/data/seed'
import PolygonAreaMap from '../misc/map/PolygonAreaMap'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SectionTitle from '../misc/SectionTitle'

export default function Zoning() {
  return (
    <>
      <SectionTitle>Zoning Overlay (M-2)</SectionTitle>
      <section className='mt-5 flex flex-col md:flex-row gap-5'>
        <div className='w-full md:w-3/5'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {zoningDetails.map((item, index) => (
              <Card key={index} className='rounded-lg border'>
                <CardHeader className='flex flex-row items-center justify-between pb-2'>
                  <div className='flex items-center gap-3'>
                    {item.icon}
                    <CardTitle className='text-base'>{item.label}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className='pt-0 text-sm text-muted-foreground'>{item.value}</CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className='w-full md:w-2/5'>
          <PolygonAreaMap polygonCoords={zoneArea} />
        </div>
      </section>
    </>
  )
}
