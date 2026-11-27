import Container from '../../shared/container';
import ShoppingCart from './shoppingCart';
import MobileMenu from './mobileMenu';
import Navbar from './navbar';
import SearchBox from './searchBox';
import ThemeToggle from './themeToggle';
import { HeaderBar, Row, Start, Actions, DesktopOnly, Logo } from './style';

export default function Header() {
  return (
    <HeaderBar>
      <Container>
        <Row>
          <Start>
            <MobileMenu />
            <Logo href="/">NOVA</Logo>
          </Start>

          <Navbar />

          <Actions>
            <DesktopOnly>
              <SearchBox />
            </DesktopOnly>
            <ThemeToggle />
            <ShoppingCart/>
          </Actions>
        </Row>
      </Container>
    </HeaderBar>
  );
}
