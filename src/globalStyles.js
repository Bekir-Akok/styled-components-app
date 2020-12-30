import styled, { createGlobalStyle } from 'styled-components' 

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'Source Sans Pro', sans-serif ;
}
`;


export const Container = styled.div`
z-index:1;
width:100%;
max-width:1300px ;
margin-right:auto;
margin-left:auto;
padding: 0 50px ;

@media screen and (max-width: 991px) {
    padding: 0 30px ;
}
`;

export const Button = styled.button`
border-radius:4px;
background-color: ${({primary}) => (primary ? '#4b59f7' : '#0467fb')} ;
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px')} ;
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')} ;
outline:none;
cursor:pointer;
border:none;

&:hover{
    transition:all .5s ease;
    background-color: #fff;
    background-color: ${({primary}) => (primary ? '#0467fb' : '4b59f7')} ;
}

@media screen and (max-width:960px) {
    width: 100%;
    
}
`;


export default GlobalStyle