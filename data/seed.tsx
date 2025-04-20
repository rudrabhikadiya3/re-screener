import { Building, Hospital, House, Warehouse } from 'lucide-react'

export const nearByData = [
  {
    id: '1',
    name: 'RR Mall',
    desc: 'Shopping Mall',
    position: { lat: 40.675131113696864, lng: -74.01615228419315 },
    floorPrice: 20,
    ceilPrice: 21.5,
    status: 1,
    Icon: Building,
  },
  {
    id: '2',
    name: 'Infinity Township',
    desc: 'Residential buiding',
    position: { lat: 40.67534059765888, lng: -74.01840399749123 },
    floorPrice: 23,
    ceilPrice: 24,
    status: 2,
    Icon: House,
  },
  {
    id: '3',
    name: 'Heartcare',
    desc: 'Hospital',
    position: { lat: 40.67574078876109, lng: -74.01221926016066 },
    floorPrice: 23.4,
    ceilPrice: 30,
    status: 3,
    Icon: Hospital,
  },
  {
    id: '4',
    name: 'Goods Home',
    desc: 'Warehouse',
    position: { lat: 40.679325230716564, lng: -74.00648461654218 },
    floorPrice: 19,
    ceilPrice: 19.5,
    status: 1,
    Icon: Warehouse,
  },
  {
    id: '5',
    name: 'Rudra Business Park',
    desc: 'Corporate Offices',
    position: { lat: 40.668611169939396, lng: -74.01004492984552 },
    floorPrice: 28,
    ceilPrice: 35,
    status: 2,
    Icon: Building,
  },
  {
    id: '6',
    name: 'VR Mall',
    desc: 'Shopping Mall',
    position: { lat: 40.66980132368751, lng: -74.00365308247488 },
    floorPrice: 20.5,
    ceilPrice: 21,
    status: 2,
    Icon: Building,
  },
]

export type nearByDataType = {
  id: string
  name: string
  desc: string
  position: number[]
  floorPrice: number
  ceilPrice: number
  status: number
  Icon: any
}
