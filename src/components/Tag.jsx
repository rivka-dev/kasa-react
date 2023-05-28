
import styled from "styled-components"

const Styledspan=styled.p`
    width:130px;
    background: #FF6060;
    border-radius: 10px;
    margin-right:10px;
    padding-top:4px;
    height:21px;
    text-align:center;
    color:#FFF;
    font-weight:500;
    font-size:14px;
    margin-top:0px;
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
                </div>)
            }          
        </Styleddiv>
    )
}
 
export default Tag



