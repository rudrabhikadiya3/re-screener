'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

type ImageCarouselProps = {
  images: string[]
  width?: number
  height?: number
}

export default function ImageCarousel({ images, width = 1920, height = 1080 }: ImageCarouselProps) {
  return (
    <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 5000 }), Fade()]}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image src={image} alt='property_image' width={width} height={height} className='rounded' />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
