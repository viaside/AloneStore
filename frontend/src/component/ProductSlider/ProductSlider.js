import ProductSliderDesktop from "./ProductSliderDesktop";
import ProductSliderMobile from "./ProductSliderMobile";
import { useMediaQuery } from 'react-responsive'


function ProductSlider(props) {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return isMobile === true? <ProductSliderMobile props = {props}/> : <ProductSliderDesktop props = {props}/>;
}

export default ProductSlider