import ProductCartDesktop from "./ProductCartDesktop";
import ProductCartMobile from "./ProductCartMobile";
import { useMediaQuery } from 'react-responsive'


function ProductCart(props) {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return isMobile === true? <ProductCartMobile props = {props}/> : <ProductCartDesktop props = {props}/>;
}

export default ProductCart