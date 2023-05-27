
import styled from "styled-components"

const Styledspan=styled.p`
min-width:115px;
background: #FF6060;
border-radius: 10px;
margin:20px;
padding:0px 10px 0px 10px;
height:25px;
text-align:center;
color:#FFF;
font-weight:500;
font-size:14px;

`
const Styleddiv=styled.div`
display:flex;
flex-wrap:wrap;
`
function Tag(props) {
    const tags=props.tags
    return (
        <Styleddiv>
            {tags.map((tagsElem)=>
            <div key={tagsElem}>
            <Styledspan>{tagsElem}</Styledspan>
            </div>)}
            
           
            
        </Styleddiv>
    )
}
 
export default Tag



