import { LatLngTuple } from 'leaflet'
import { ArrowUpDown, Building, Hospital, House, ParkingCircle, Ruler, Warehouse, Map, Home, BadgeInfo, Layout, CheckCircle } from 'lucide-react'

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

export const landData = [
  {
    saleDate: '2024-12-10',
    pricePSF: '$132.50',
    zoning: 'C2',
    lotSize: '15,000 sqft',
    distance: '1.2 km',
  },
  {
    saleDate: '2024-11-22',
    pricePSF: '$118.00',
    zoning: 'R3',
    lotSize: '8,500 sqft',
    distance: '2.1 km',
  },
  {
    saleDate: '2024-10-02',
    pricePSF: '$142.00',
    zoning: 'M1',
    lotSize: '20,000 sqft',
    distance: '3.7 km',
  },
  {
    saleDate: '2024-09-15',
    pricePSF: '$125.00',
    zoning: 'C4',
    lotSize: '12,000 sqft',
    distance: '0.8 km',
  },
  {
    saleDate: '2024-08-30',
    pricePSF: '$130.00',
    zoning: 'R5',
    lotSize: '10,000 sqft',
    distance: '1.5 km',
  },
  {
    saleDate: '2024-07-20',
    pricePSF: '$140.00',
    zoning: 'M2',
    lotSize: '18,000 sqft',
    distance: '2.5 km',
  },
  {
    saleDate: '2024-06-05',
    pricePSF: '$135.00',
    zoning: 'C3',
    lotSize: '14,000 sqft',
    distance: '1.0 km',
  },
]

export const ownersPieData = [
  { browser: 'Home', visitors: 120321, fill: 'hsl(var(--chart-5))' },
  { browser: 'Office', visitors: 99001, fill: 'hsl(var(--chart-2))' },
  { browser: 'WareHouse', visitors: 5423, fill: 'hsl(var(--chart-3))' },
  { browser: 'Shop', visitors: 30215, fill: 'hsl(var(--chart-4))' },
  { browser: 'Open Land', visitors: 20021, fill: 'hsl(var(--chart-1))' },
  { browser: 'Other', visitors: 8000, fill: 'hsl(var(--color-2))' },
]

export const nearbyLocations = [
  {
    id: '1',
    name: '280 Richards',
    position: { lat: 40.67379787643575, lng: -74.0146123896947 },
  },
  {
    id: '2',
    name: 'Brroklyn Cruise Terminal',
    position: { lat: 40.680881578761294, lng: -74.0139053762028 },
  },

  {
    id: '4',
    name: 'Coffey Park',
    position: { lat: 40.67772997378268, lng: -74.00836100374003 },
  },
  {
    id: '5',
    name: 'Red Hook Park',
    position: { lat: 40.67236290353006, lng: -74.00733944922031 },
  },
  {
    id: '6',
    name: 'IKEA',
    position: { lat: 40.67268049744122, lng: -74.011702035882 },
  },
  {
    id: '7',
    name: 'Erie Basin Park',
    position: { lat: 40.67268049744122, lng: -74.011702035882 },
  },
]
export const zoneArea: LatLngTuple[] = [
  [40.73717736038037, -73.96137050273566],
  [40.701009721167225, -73.97297801999905],
  [40.70296523106924, -73.99533323843225],
  [40.6798213508223, -74.02198753733336],
  [40.613278717361034, -74.04864183623447],
  [40.57018636932936, -74.00436130741488],
  [40.58096205977426, -73.8826973301727],
  [40.61556314221385, -73.82852891627688],
  [40.61556314221385, -73.82852891627688],
  [40.68405956387744, -73.89645438767005],
  [40.7163263454869, -73.92439841071153],
  [40.73848033189262, -73.94976298547228],
]

export const zoningDetails = [
  {
    label: 'Zoning Type',
    value: 'Residential - R2',
    icon: <Building className='text-blue-600 w-6 h-6' />,
  },
  {
    label: 'FAR (Floor Area Ratio)',
    value: '1.8',
    icon: <Ruler className='text-green-600 w-6 h-6' />,
  },
  {
    label: 'Setback (Front)',
    value: '6 meters',
    icon: <ArrowUpDown className='text-orange-600 w-6 h-6' />,
  },

  {
    label: 'Parking Required',
    value: '2 spots / 1000 sqft',
    icon: <ParkingCircle className='text-yellow-600 w-6 h-6' />,
  },
  {
    label: 'Plot Area',
    value: '3600 sqft',
    icon: <Map className='text-purple-700 w-6 h-6' />,
  },
  {
    label: 'Land Use',
    value: 'Permitted for Multi-family Residential',
    icon: <Home className='text-cyan-600 w-6 h-6' />,
  },
  {
    label: 'Zone Code',
    value: 'ZR-211',
    icon: <BadgeInfo className='text-gray-700 w-6 h-6' />,
  },
  {
    label: 'Building Coverage',
    value: '60% allowed',
    icon: <Layout className='text-pink-600 w-6 h-6' />,
  },
  {
    label: 'Clearance Status',
    value: 'Approved - till 2027',
    icon: <CheckCircle className='text-lime-600 w-6 h-6' />,
  },
]
