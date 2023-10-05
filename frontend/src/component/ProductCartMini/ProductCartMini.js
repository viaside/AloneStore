import ProductCartMiniDesktop from "./ProductCartMiniDesktop";
import ProductCartMiniMobile from "./ProductCartMiniMobile";
import { useMediaQuery } from 'react-responsive'


function ProductCartMini(props) {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return isMobile === true? <ProductCartMiniMobile props = {props}/> : <ProductCartMiniDesktop props = {props}/>;
}

export default ProductCartMini