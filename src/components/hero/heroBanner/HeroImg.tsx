import {Img} from './style'
import type { HeroBannerImg } from '@/types/hero';


export default function HeroImg({ src, alt, sizes }: HeroBannerImg) {
  return (
    <Img
      src={src}
      alt={alt}
      sizes={sizes}
      fill
      priority
    />
  )
}
