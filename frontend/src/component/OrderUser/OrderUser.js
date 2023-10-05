import OrderUserDesktop from "./OrderUserDesktop";
import OrderUserMobile from "./OrderUserMobile";
import { useMediaQuery } from 'react-responsive'


function OrderUser(props) {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return isMobile === true? <OrderUserMobile props = {props}/> : <OrderUserDesktop props = {props}/>;
}

export default OrderUser