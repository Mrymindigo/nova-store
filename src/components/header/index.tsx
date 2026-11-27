import { HeaderBar, Inner, Logo } from './style';

export default function Header() {
  return (
    <HeaderBar>
      <Inner>
        <Logo href="/">NOVA</Logo>
        {/* بعداً: لینک‌ها، جستجو، تغییر زبان، تم، سبد خرید */}
      </Inner>
    </HeaderBar>
  );
}
