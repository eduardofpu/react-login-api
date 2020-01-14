// https://blog.rocketseat.com.br/reactjs-autenticacao/
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { logout } from "../../services/auth";
import { Container, Header } from "./styles";

class Forbidden extends Component {

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
                    {/* <li><a href=""></a></li> */}
                </ul>
            </nav>

            <button className="btMenu bgGradient" onClick={this.handleLogout}><i className="fa fa-sign-out" aria-hidden="true"></i></button>
              
          </Header>  
          <center><h1>Acesso negado</h1></center>
               
        </Container>
    );
  }
}

export default withRouter(Forbidden);