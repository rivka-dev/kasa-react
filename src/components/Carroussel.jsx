import React, { useState } from 'react';
import Styled from 'styled-components';
import suivant from '../images/suivant.png';
import precedent from '../images/precedent.png';

const Styledimg=Styled.img`
width:100%;
height:415px;
object-fit:cover;`

const Styledimgsuivant=Styled.button`
position:absolute;
top:300px;
right:200px;
background:none;
border:none;`
const Styledimgprecedent=Styled.button`
position:absolute;
top:300px;
left:200px;
border:none;
background:none;`
const Styleddivcompteur=Styled.div`
position:absolute;
top:500px;
left:50%;
color:#FFF;
font-size:18px;
font-weight:500;`

function Carroussel(props){
    const nombre=props.pictures.length;
    const [number, setNumber] = useState(0);  
    return <div>
      <Styledimg src={props.pictures[number]} alt=""/>    
      {nombre!==1 ?
        ( 
          <div> 
            <Styleddivcompteur>{number+1}/{nombre}</Styleddivcompteur>
            <Styledimgsuivant onClick={() =>number+1===nombre? setNumber(0) : setNumber(number+1)} ><img src={suivant} alt='suivant'/></Styledimgsuivant>
            <Styledimgprecedent onClick={() =>number===0? setNumber(nombre-1) : setNumber(number-1)} ><img src={precedent} alt='precedent'/></Styledimgprecedent>
          </div>
        ):(
          null
        )
      }
    </div>
    
}
export default Carroussel 