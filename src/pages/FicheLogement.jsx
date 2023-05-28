import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { logements } from '../logements'
import Error from './Error'
import Collapse from '../components/Collapse'
import Tag from '../components/Tag'
import Rating from '../components/Rating'
import styled from 'styled-components'
import Gallery from '../components/Gallery'

function FicheLogement() {    
  const Styleddivecritures=styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:30px;
    @media screen and (max-width: 767px){
      flex-direction:column;          
    }  
  `
  const Styledimg=styled.img`
    width: 64px;
    height: 100%;
    border-radius:32px;
    @media screen and (max-width: 767px){
      width:32px;
    }
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
    @media screen and (max-width: 767px){
      flex-direction:column;          
    }  
  `
  const StyleddivHost=styled.div`
    display:flex;
    justify-content:space-between;
  `
  const StyledSpan=styled.span`
    width:45%;
    @media screen and (max-width: 767px){
      width:100%;          
    }  
  `
  const Styledh1=styled.h1`      
  font-weight: 500;
  font-size: 36px; 
  color: #FF6060;
  @media screen and (max-width: 767px){
      font-size:18px;        
    }  
  `
  const Styledp=styled.p` 
    font-size: 18px;
    color: #FF6060;
    font-weight:500;
    margin-bottom:20px;
    @media screen and (max-width: 767px){
      font-size:14px;  
      margin-bottom:10px;        
    }  
  `
  const Styledphost=styled(Styledp)` 
    width:80px;
    font-size:18px;
    @media screen and (max-width: 767px){
      font-size:12px;
      width:50px;
    }
  `
  const Styleddivrating=styled.div`
    margin-top:20px;
    @media screen and (max-width: 767px){
      margin-top:0px;          
    }  
  `
  const  {id } = useParams()
  const logement = logements.find((logement) => logement.id === id);

  return !logement ?
    (
    <Error/>
    ):(
    <div>
      <Header/>
      <Gallery pictures={logement.pictures}/>
      <Styleddivecritures>
        <div>
            <Styledh1>{logement.title}</Styledh1>
            <Styledp>{logement.location}</Styledp>
            <Tag tags={logement.tags}/>
        </div>
        <Styleddivratinghost>
          <StyleddivHost>
            <Styledphost>{logement.host.name}</Styledphost>
            <Styledimg src={logement.host.picture} alt={logement.location}/>
          </StyleddivHost>
          <Styleddivrating>
            <Rating rating= {logement.rating}/>
          </Styleddivrating>
        </Styleddivratinghost>
      </Styleddivecritures>  
      <StyledDropDown>           
        <StyledSpan>
          <Collapse sz="loge" titre="Description"  description={logement.description}/>
        </StyledSpan>
        <StyledSpan>
          <Collapse sz="loge" titre="Equipements" description={logement.equipments.map((equip)=><span key={equip}> <li>{equip}</li></span>)}/>
        </StyledSpan>
      </StyledDropDown> 
      <Footer/>
    </div>
    )
  }

  export default FicheLogement