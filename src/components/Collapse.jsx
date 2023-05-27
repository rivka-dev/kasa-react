import Styled from 'styled-components'
import React, { useState } from 'react';

import flechehaut from '../images/flechehaut.png'
import flechebas from '../images/flechebas.png'
const Styledbutton=Styled.button`
background:#FF6060
`
function Collapse(){
    const [isOpen, setIsClose] = useState(true);  
    return isOpen ?(
        <Styledbutton onClick={() => setIsClose(false)} ><img src={flechebas} alt='flechehaut'/></Styledbutton>

):(<Styledbutton onClick={() => setIsClose(true)} ><img src={flechehaut} alt='flechehaut'/></Styledbutton>)    
}
export default Collapse