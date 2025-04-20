import React, { useState } from 'react'
import { AreaChart, Area, XAxis, CartesianGrid } from 'recharts'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '../ui/chart'

const generateRandomData = () => {
  const years = [2020, 2021, 2022, 2023, 2024]
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const data: { month: string; income: number; population: number; year: number }[] = []

  years.forEach((year) => {
    months.forEach((month) => {
      data.push({
        month: `${month} ${year}`,
        year,
        income: Math.round(2000 + Math.random() * 3000),
        population: Math.round(100 + Math.random() * 900),
      })
    })
  })
  return data
}

const seedData = generateRandomData()
const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  desktop: {
    label: 'income',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'population',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

const AreaChartComponent = () => {
  const [range, setRange] = useState('5')

  const monthsToShow = parseInt(range) * 12
  const filteredData = seedData.slice(-monthsToShow)

  return (
    <Card>
      <CardHeader className='flex items-center gap-2 space-y-0 border-b py-5 flex-col sm:flex-row'>
        <div className='flex-1 gap-1'>
          <CardTitle>Brooklyn Population and Capita Income</CardTitle>
          <CardDescription>Showing last 5 years poppulation and Capitan incomes in Brooklyn</CardDescription>
        </div>
        <Select value={range} onValueChange={(value) => setRange(value)}>
          <SelectTrigger className='w-[150px]'>
            <SelectValue placeholder='Select range' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='1'>Last 1 Year</SelectItem>
            <SelectItem value='2'>Last 2 Years</SelectItem>
            <SelectItem value='3'>Last 3 Years</SelectItem>
            <SelectItem value='5'>Last 5 Years</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
        <ChartContainer config={chartConfig} className='aspect-auto h-[250px] w-full'>
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id='fillDesktop' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='var(--color-desktop)' stopOpacity={0.8} />
                <stop offset='95%' stopColor='var(--color-desktop)' stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id='fillMobile' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='var(--color-mobile)' stopOpacity={0.8} />
                <stop offset='95%' stopColor='var(--color-mobile)' stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={8} minTickGap={32} tick={{ fill: '#666' }} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })
                  }}
                  indicator='dot'
                />
              }
            />
            <Area dataKey='income' type='natural' fill='url(#fillMobile)' stroke='var(--color-mobile)' stackId='a' />
            <Area dataKey='population' type='natural' fill='url(#fillDesktop)' stroke='var(--color-desktop)' stackId='a' />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default AreaChartComponent
