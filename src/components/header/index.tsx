import SearchBox from './searchBox';
import ThemeToggle from './themeToggle';
import { HeaderBar, Inner, Logo, LogoIcon, LogoText } from './style';
import { HiMiniShoppingBag } from "react-icons/hi2";

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

        <div>
          <nav>
            navbar
          </nav>
        </div>

        <SearchBox />

        <ThemeToggle />
      </Inner>
    </HeaderBar>
  );
}
