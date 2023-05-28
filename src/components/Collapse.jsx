import Styled from 'styled-components'
import React, { useState } from 'react';
import flechehaut from '../images/flechehaut.png'
import flechebas from '../images/flechebas.png'


const Styledh2=Styled.h2`
    background: #FF6060;
    border-radius: 5px;
    margin-bottom:0px;
    padding-left:10px;
    color:#FFF;
    font-weight:500;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:52px;
    @media screen and (max-width: 767px){
        font-size:13px;
        height:30px;
    }
    font-size:${props=>props.sz==="loge" ? "18px":"24px"}
`
const Styledp=Styled.p`
    background: #F7F7F7;
    border-radius: 5px;
    margin-top:0px;
    font-weight:400;
    padding:20px 10px 10px 10px;
    color:#FF6060;
    @media screen and (max-width: 767px){
        font-size:12px;
    }
    font-size:${props=>props.sz==="loge" ? "18px":"24px"}
`
const Styledbutton=Styled.button`
    border:none;
    background:#FF6060;
    border-radius:5px;
`

function Collapse(props) {
    const [isOpen, setIsClose] = useState(true);  
    return isOpen ?(
        <div >              
            <Styledh2 sz={props.sz}>
                <span>{props.titre}</span>
                <Styledbutton onClick={() => setIsClose(false)} ><img src={flechebas} alt='flechehaut'/></Styledbutton> 
            </Styledh2>            
        </div>
    )
    :(
        <div>
            <Styledh2 sz={props.sz}>
                <span>{props.titre}</span>
                <Styledbutton onClick={() => setIsClose(true)} ><img src={flechehaut} alt='flechehaut'/></Styledbutton>
            </Styledh2>           
            <Styledp sz={props.sz}>{props.description} </Styledp>
        </div>
    )
}

export default Collapse