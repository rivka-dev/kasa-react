
import image from '../images/Image-Accueil.jpg'
import styled from 'styled-components'
import Header from '../components/Header'
import Card from '../components/Card'
import {logements} from '../logements'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const StyledUl=styled.ul`
position:relative;
list-style-type:none;
display:flex;
flex-wrap:wrap;
background: #F7F7F7;
border-radius: 25px;
margin-top:40px;
justify-content:space-between;
padding:56px 50px 56px 50px;
@media screen and (max-width: 767px){
  background:#FFF;
  padding:0px;
  width:100%;

}

`
const StyledDiv=styled.div`
margin-right:100px;
margin-left:100px;

`



function Home() {
  return (
    <StyledDiv>
      <Header />
      <Banner src={image} alt='accueil' title="Chez vous, partout et ailleurs"/>
               
           
      
     

      <StyledUl>
					{logements.map(({ id, cover, title}) =>
							<div key={id}>
								<Card	cover={cover}	title={title} id={id}/>
						
							</div>
)}
						
					
				</StyledUl>
			


      

    
      <Footer/>
    </StyledDiv>
  )
}
  
  export default Home
  