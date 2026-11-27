import type { ImageProps } from 'next/image';

export interface HeroBannerImg {
    src: ImageProps['src'];
    alt: string;
    sizes: string;
}