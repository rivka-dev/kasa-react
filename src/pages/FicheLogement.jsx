import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { logements } from '../logements'
import Error from './Error'
import Dropdownlarge from '../components/Dropdownlarge'
import Tag from '../components/Tag'
import Rating from '../components/Rating'
import styled from 'styled-components'
import Carroussel from '../components/Carroussel'

function FicheLogement() {
    const Styleddivecritures=styled.div`
        display:flex;
        justify-content:space-between;
        @media screen and (max-width: 767px){
            flex-direction:column;
          
          }  
    `
    const Styleddiv=styled.div`
        margin-right:100px;
        margin-left:100px;
    `
    const Styledimg=styled.img`
        width: 64px;
        height: 64px;
        border-radius:32px;
    `
    const Styleddivratinghost=styled.div`
    @media screen and (max-width: 767px){
        display:flex;
        flex-direction:row-reverse;
        justify-content:space-between;
        align-items:center;
      }   
    `
    const StyledDropDown=styled.div`
    display:flex;
    justify-content:space-between;
`
    const StyleddivHost=styled.div`
    display:flex;
    justify-content:space-between;`
    const StyledSpan=styled.span`
    min-width:582px;
  
    `
    const Styledh1=styled.h1`      
    font-weight: 500;
    font-size: 36px; 
    color: #FF6060;
    `
    const Styledp=styled.p` 
font-size: 18px;
color: #FF6060;
font-weight:500;
`
  

    const  {id } = useParams()
    const logement = logements.find((logement) => logement.id === id);

    return !logement ?
        (
        <Error/>
        ):(
        <Styleddiv>
            <Header/>
            <Carroussel pictures={logement.pictures}/>
            <Styleddivecritures>
                <div>
                    <Styledh1>{logement.title}</Styledh1>
                    <Styledp>{logement.location}</Styledp>
                    <Tag tags={logement.tags}/>
                </div>
                <Styleddivratinghost>
                    <StyleddivHost>
                    <Styledp>{logement.host.name}</Styledp>
                    <Styledimg src={logement.host.picture} alt={logement.location}/>
                    </StyleddivHost>
                    <Rating rating= {logement.rating}/>
                </Styleddivratinghost>
            </Styleddivecritures>  
            <StyledDropDown>           
            <StyledSpan><Dropdownlarge titre="Description" description={logement.description}/></StyledSpan>
            <StyledSpan><Dropdownlarge titre="Equipements" description={logement.equipments.map((equip)=><span key={equip}>
            <li>{equip}</li></span>)}/></StyledSpan>
            </StyledDropDown>  



            <Footer/>
        </Styleddiv>
        )
    }

    export default FicheLogement