import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { landData } from '@/data/seed'

export default function LandSalesTable() {
  return (
    <>
      <section className='mt-5'>
        <h2 className='h2'>Nearby Land Sales</h2>
        <hr className='mt-3' />
      </section>
      <section className='mt-5'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sale Date</TableHead>
              <TableHead>Price PSF</TableHead>
              <TableHead>Zoning</TableHead>
              <TableHead>Lot Size</TableHead>
              <TableHead>Distance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {landData.map((land, i) => (
              <TableRow key={i}>
                <TableCell>{land.saleDate}</TableCell>
                <TableCell>{land.pricePSF}</TableCell>
                <TableCell>{land.zoning}</TableCell>
                <TableCell>{land.lotSize}</TableCell>
                <TableCell>{land.distance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  )
}
