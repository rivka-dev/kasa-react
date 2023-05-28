import logo from '../images/LOGOFooter.png'
import styled from 'styled-components'

const StyledDiv=styled.div`
    padding:20px 0px;
    background-color:#000;
    color:#FFF;
    text-align:center;
    margin:20px -108px 0px -108px;
    @media screen and (max-width: 767px){
        margin:20px -20px 0px -20px;         
    }  
`


function Footer() {    
    return (
        <StyledDiv>
            <img src={logo} alt='Kasa'  />           
            <p> © 2020 Kasa. All rights reserved </p>
        </StyledDiv>
    )
}

export default Footer