import styled from "styled-components";

export const Container = styled.div`  
`;

export const Header = styled.header`
{
    width: 100%;
    float: left;
    padding: 3% 4%;
    text-align: center;
    background: #CCC;    
}

.vMenu {    
   float: left;   
}    

.vMenu ul{    
    width: 100%;
    float: left;
    text-align: center;
}

.vMenu ul li{    
    display: inline;
    margin: 0px 10px;
 }
 
 .vMenu ul li a{
     text-decoration: none;
     font-size: 2em;
     color: #FFF;
     opacity: 1;
 }


.vMenu ul li a:hover {
    opacity: 0.7;    
}

.bgGradient:hover {   
    background: linear-gradient(to right, #661A00, #FFB69D);    
}

.btMenu {
    width: 56px;
    height: 56px;
    float: right;
    border-radius: 56px;
    color: #FFF;
    cursor: pointer;
    text-align: center;
    font-size: 1.5em;  
}

`;