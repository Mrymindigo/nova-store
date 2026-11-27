import SearchBox from './searchBox';
import ThemeToggle from './themeToggle';
import { HeaderBar, Inner, Logo, LogoIcon, LogoText } from './style';
import { HiMiniShoppingBag } from "react-icons/hi2";
import Navbar from './navbar';

export default function Header() {
  return (
    <HeaderBar>
      <Inner>
        <Logo>
          <LogoIcon>
            <HiMiniShoppingBag />
          </LogoIcon>
          <LogoText>
            NOVA
          </LogoText>
        </Logo>
        
        <Navbar />

        <SearchBox />

        <ThemeToggle />
      </Inner>
    </HeaderBar>
  );
}
