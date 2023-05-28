import Header from '../components/Header'
import Banner from '../components/Banner'
import image from '../images/Apropos.png'
import styled from 'styled-components'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'


const StyledDivdrop=styled.div`
    margin-bottom:30px;
`
 
function APropos() {  
    return (
        <div>
            <Header />
            <Banner src={image} alt='accueil'/>
            <StyledDivdrop>
                <Collapse titre="Fiabilite" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
                <Collapse titre="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <Collapse titre="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
                <Collapse titre="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            </StyledDivdrop>
            <Footer/>
        </div>
    )
}
export default APropos