import ProductAdminDesktop from "./ProductAdminDesktop";
import ProductAdminMobile from "./ProductAdminMobile";
import { useMediaQuery } from 'react-responsive'


function ProductAdmin(props) {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return isMobile === true? <ProductAdminMobile props = {props}/> : <ProductAdminDesktop props = {props}/>;
}

export default ProductAdmin