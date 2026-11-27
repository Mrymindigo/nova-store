
import { getTranslations } from 'next-intl/server';
import HeroImg from './heroBanner/HeroImg';
import { Hero, Content, ImgContainer,  ViewProductBtn } from './style';
import heroBanner from '@/assets/image/hero_banner.png';
import Link from 'next/link';

export default async function HeroBanner() {
  const t = await getTranslations('hero');

  return (
    <Hero>
      <ImgContainer>
        <HeroImg
          src={heroBanner}
          alt="Hero banner"
          sizes='100vw'
        />
      </ImgContainer>

      <Content>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <ViewProductBtn href={'/'}>{t('cta')}</ViewProductBtn>
      </Content>
    </Hero>
  );
}