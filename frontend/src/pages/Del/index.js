// https://blog.rocketseat.com.br/reactjs-autenticacao/
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import api from "../../services/api";
import { Form, Container } from "./styles";

class Del extends Component {
  state = {
    id: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { id } = this.state;
    console.log("id : ",id)

            if(id){
                setTimeout(()=>{
                  api.delete("/v1/del/"+id); 
                
            },1000);
               
            }
 }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
         
          <input
            type="id"
            placeholder="codigo"
            onChange={e => this.setState({ id: e.target.value })}
          />
         
          <button type="submit">Deletar</button>
          <hr />
          
        </Form>
      </Container>
    );
  
}
}
export default withRouter(Del);