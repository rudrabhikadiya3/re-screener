'use client'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { useCallback, useEffect, useState } from 'react'

type ImageCarouselProps = {
  images: string[]
  width?: number
  height?: number
}

export default function ImageCarousel({ images, width = 1920, height = 1080 }: ImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback(
    (index: number) => {
      if (api) api.scrollTo(index)
    },
    [api]
  )

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    onSelect() // Initial sync

    return () => {
      api.off('select', onSelect)
    }
  }, [api])
  return (
    <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 5000 }), Fade()]} setApi={setApi}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image src={image} alt='property_image' width={width} height={height} className='rounded' />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='flex justify-center items-center gap-2 mt-4'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`size-1.5 rounded-full transition-all ${selectedIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </Carousel>
  )
}
