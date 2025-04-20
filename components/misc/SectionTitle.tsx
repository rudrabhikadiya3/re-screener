import React from 'react'

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <section className='mt-14'>
      <h2 className='h2'>{children}</h2>
      <hr className='mt-3' />
    </section>
  )
}
