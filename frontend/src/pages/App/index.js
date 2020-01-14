// https://blog.rocketseat.com.br/reactjs-autenticacao/
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { logout } from "../../services/auth";
import { Container, Header } from "./styles";

class Home extends Component {

    handleLogout = e => {
        e.preventDefault();
        logout();              
        this.props.history.push("/");        
      };

  render() {
    return (
        <Container>
          <Header>

         <nav className="vMenu">          
                <ul>
                    <li><Link to="/user">Usuários</Link></li> 
                    <li><Link to="/del">Deletar usuários</Link></li>                    
                </ul>
             
         </nav>

            <button className="btMenu bgGradient" onClick={this.handleLogout}><i className="fa fa-sign-out" aria-hidden="true"></i></button>
              
          </Header>  
          <center><h1>Home</h1></center>
               
        </Container>
    );
  }
}

export default withRouter(Home);