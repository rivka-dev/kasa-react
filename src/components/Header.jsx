import { Link } from 'react-router-dom'

import logo from '../images/LOGO.jpg'
import styled from 'styled-components'


const StyledLink = styled(Link)`
    padding: 15px;
    color:  #FF6060;    
    text-decoration: none;
    font-size: 18px;
    font-weight:500;
    @media screen and (max-width: 767px){
        font-size:12px;         
      }  
    &:hover {
        text-decoration:underline;
    }
`
const StyledDiv=styled.div`
    display:flex;
    justify-content:space-between;
    margin:40px 0px;
`
const StyledImg=styled.img`
    height:100%;
`

function Header() {
    
    return (
        <StyledDiv>
            <StyledImg src={logo} alt='Kasa'  />           
            <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/APropos/">A propos</StyledLink>
            </nav>
        </StyledDiv>
    )
}

export default Header