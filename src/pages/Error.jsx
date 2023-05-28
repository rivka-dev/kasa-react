import Header from '../components/Header'
import { Link } from "react-router-dom";
import styled from 'styled-components'


const StyledH1= styled.h1 `
    font-weight:700;
    font-size:288px;
    margin:0px;
`
const StyledDiv=styled.div `
    color:#FF6060;
    text-align:center;
`
const StyledSpan=styled.span `
    color:#FF6060;
    text-align:center;
`
const StyledP=styled.p`
    font-weight:500;
    font-size:36px;
`
function Error() {
    return (        
        <div>
            <Header />            
            <StyledDiv >
                <StyledH1>404</StyledH1>
                <StyledP>Oups! La page que vous demandez n'existe pas.</StyledP>
                <Link to="/">
                    <StyledSpan>Retourner sur la page d’accueil</StyledSpan>
                </Link>
            </StyledDiv>
        </div>
    )
}

 
export default Error