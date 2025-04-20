import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { nearByData } from '@/data/seed'
import SectionTitle from '../misc/SectionTitle'
const LazyMap = dynamic(() => import('@/components/misc/map/Map'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function NearbyDevelopments() {
  const [tab, setTab] = useState('1')
  const onTabChange = (value: string) => {
    setTab(value)
  }
  const currentTab = nearByData.find((item) => item.id === tab) ?? nearByData[0]

  return (
    <>
      <SectionTitle>Nearby Developments</SectionTitle>
      <section className='mt-5 flex flex-col md:flex-row gap-3'>
        <div className='w-full md:w-2/5 order-1 md:order-0'>
          <Tabs defaultValue='account' className='flex-row' value={tab} onValueChange={onTabChange}>
            <TabsList className='flex-col w-full space-y-2'>
              {nearByData.map((item) => (
                <TabsTrigger key={item.id} value={item.id} className='w-full justify-between text-start'>
                  <div className='flex items-center space-x-2'>
                    <item.Icon size={35} className='text-gray-600' />
                    <div>
                      <p>{item.name}</p>
                      <p className='text-sm text-gray-500'>{item.desc}</p>
                      <p>
                        {item.status === 1 && <span className='text-yellow-800'>Under Construction</span>}
                        {item.status === 2 && <span className='text-blue-800'>Possession Ready</span>}
                        {item.status === 3 && <span className='text-green-800'>Completed</span>}
                      </p>
                    </div>
                  </div>
                  <div className='text-sm text-gray-500'>
                    <p>
                      ${item.floorPrice} - ${item.ceilPrice}/sqft
                    </p>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className='w-full md:w-3/5'>
          <LazyMap
            pin={[
              { position: { lat: 40.67379787643575, lng: -74.0146123896947 }, name: '280 Richards' },
              { position: currentTab.position, name: currentTab.name },
            ]}
          />
        </div>
      </section>
    </>
  )
}
