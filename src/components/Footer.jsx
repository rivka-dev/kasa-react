import logo from '../images/LOGOFooter.png'
import styled from 'styled-components'

const StyledDiv=styled.div`
padding:20px 0px;
background-color:#000;
color:#FFF;
text-align:center;
margin:0 -108px;
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