import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledImg = styled.img`
	width:340px;
	height:340px;  
	border-radius: 10px;
	@media screen and (max-width: 767px){
		width:100%;	
	}
`
const StyledLi=styled.li`
  	&:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
		border-radius:10px;
		height:340px;
	}
	position:relative;
	margin-bottom:56px;
	@media screen and (max-width: 767px){
		margin:20px 0px
	}
`
const StyledP=styled.p`
	position:absolute;
	bottom:0px;
	width:200px;
	color:#FFF;
	font-size:18px;
	left:20px;
	font-weight:500;
`
function Card(props) {	
	return (
        <Link to ={`/FicheLogement/${props.id}`}>
			<StyledLi >		
				<StyledImg  src={props.cover} alt={props.title} />
				<StyledP>{props.title}</StyledP>
			</StyledLi>
		</Link>
	)
}

export default Card