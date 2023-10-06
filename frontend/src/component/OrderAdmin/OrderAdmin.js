import OrderAdminDesktop from "./OrderAdminDesktop";
import OrderAdminMobile from "./OrderAdminMobile";
import { useMediaQuery } from 'react-responsive'


function OrderAdmin(props) {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return isMobile === true? <OrderAdminMobile props = {props}/> : <OrderAdminDesktop props = {props}/>;
}

export default OrderAdmin