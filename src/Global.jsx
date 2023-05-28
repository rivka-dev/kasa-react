import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
    *{
    font-family: 'Montserrat', sans-serif;
    }
    body {
        margin-right:108px;
        margin-left:108px;
        @media screen and (max-width: 767px){
            margin-right:20px;   
            margin-left:20px;       
        } 
    } 
`


export default GlobalStyles;
 