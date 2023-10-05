import CartItemDesktop from "./CartItemDesktop";
import CartItemMobile from "./CartItemMobile";
import { useMediaQuery } from 'react-responsive'


function CartItem(props) {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return isMobile === true? <CartItemMobile props = {props}/> : <CartItemDesktop props = {props}/>;
}

export default CartItem