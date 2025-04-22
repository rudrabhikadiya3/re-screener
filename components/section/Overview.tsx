import ImageCarousel from '@/components/misc/ImageCarousel'
import { BriefcaseBusiness, ExternalLink, Landmark, LandPlot } from 'lucide-react'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { getOverview } from '@/services'
import { toast } from 'sonner'

export default function Overview() {
  const { data, isLoading } = useQuery({
    queryKey: ['overview'],
    queryFn: () =>
      getOverview({
        PropertyTitle: 'The main property title',
        PropertyPrice: 'Property price in dollars, give me number like 3120000, do not apply any unit',
        PropertyDescription: '50-60 words description about this property',
        PropertySize: 'total property size in sqft, give me only number, do not apply any unit',
        PropertyCapRate: 'property cap rate in %, give me only number, do not apply any unit',
        Zoning: 'property zoning type, which zone to be applied here?',
        ProjectLandArea: 'total land area in acres, give me with unit',
        Seller: 'property seller name',
        City: 'city name',
        State: 'state name',
        PropertyType: 'property type, like shopping mall, office, etc',
      }),
  })

  if (data?.error) {
    toast.error(data.error)
  }

  const {
    PropertyTitle,
    PropertyPrice,
    PropertyDescription,
    PropertySize,
    PropertyCapRate,
    Zoning,
    ProjectLandArea,
    Seller,
    City,
    State,
    PropertyType,
  } = data?.output || {}

  if (isLoading) {
    ;<div>Loading...</div>
  } else {
    return (
      <section className='mt-5 flex flex-col md:flex-row space-x-10'>
        <div className='w-full md:1/2'>
          <ImageCarousel images={['/images/propertyImage/3.png', '/images/propertyImage/2.png', '/images/propertyImage/1.png']} />
        </div>
        <div className='w-full md:1/2'>
          <h2 className='text-3xl mb-2'>
            {PropertyTitle}, {City}, {State}
          </h2>
          <p className='text-sm text-gray-500'>{PropertyType}</p>
          <p className='text-xs text-gray-500'>Uploaded 3 days ago</p>

          <div className='my-3'>
            <h3 className='h1'>${PropertyPrice}</h3>
            <p className=' text-gray-500 mb-2'>
              {PropertySize} sqft | {(PropertyPrice / PropertySize).toFixed(2)}/sqft
            </p>
          </div>
          <p className=' text-gray-700'>
            {PropertyCapRate}% <small>cap rate</small>
          </p>

          <div className='text-sm mt-4 text-gray-500 flex items-center space-x-2'>
            <BriefcaseBusiness className='text-sm' size={16} />
            <Link href='#' className='block'>
              Seller: {Seller}
            </Link>
            <ExternalLink className='text-sm ' size={16} />
          </div>
          <div className='text-sm mt-2 text-gray-500 flex gap-2 items-center'>
            <LandPlot className='text-sm' size={16} /> <p>Project Land Area: {ProjectLandArea}</p>
          </div>
          <div className='text-sm mt-2 text-gray-500 flex gap-2 items-center'>
            <Landmark className='text-sm' size={16} /> <p>Zoning: {Zoning}</p>
          </div>
          <p className='text-sm mt-2 text-gray-500'>{PropertyDescription}</p>
        </div>
      </section>
    )
  }
}
