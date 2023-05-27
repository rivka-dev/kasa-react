import styled from 'styled-components'

const StyledImg = styled.img`

z-index:1;
width:100%;
height:223px;
border-radius: 25px;
object-fit:cover;
@media screen and (max-width: 767px){
    border-radius:10px;
}
`
const StyledH1=styled.h1`
position:absolute;
z-index:3;
color:#FFF;
`
const StyledDivOverlay=styled.div`
position:absolute;
z-index:2;
width:100%;
height:223px;
background: #000000;
mix-blend-mode: darken;
opacity: 0.3;
border-radius: 25px;
@media screen and (max-width: 767px){
    border-radius:10px;
}

`
const StyledDivEnglobant=styled.div`
position:relative;
display: flex;
    justify-content: center;
    align-items: center;
    `



function Banner(props) {
	return <StyledDivEnglobant><StyledImg src={props.src} alt={props.alt}/><StyledDivOverlay/><StyledH1>{props.title}</StyledH1></StyledDivEnglobant>
}

export default Banner