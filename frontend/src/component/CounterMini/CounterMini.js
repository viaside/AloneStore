import { useMediaQuery } from 'react-responsive';

import CounterMiniDesktop from "./CounterMiniDesktop";
import CounterMiniMobile from "./CounterMiniMobile";


function CounterMini(props) {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return isMobile === true? <CounterMiniMobile props = {props}/> : <CounterMiniDesktop props = {props}/>;
}

export default CounterMini