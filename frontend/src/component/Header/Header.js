import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { useMediaQuery } from 'react-responsive'


function Header() {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return isMobile === true? <HeaderMobile/> : <HeaderDesktop/>;
}

export default Header