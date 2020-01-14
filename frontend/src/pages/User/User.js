import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import api from '../../services/api'
import Pagination from '../../component/Pagination'
import FormEdit from './FormEdit'

const v1='v1';
const admin = v1+'/admin';
const users= admin+'/users?page=';
const del = admin+'/del';
const edit = admin+'/edit';

class User extends Component {
    
//A lista inicia vazia    
constructor(){
    super()
    this.state = { 
        lista:[],
        paginaAtual:[1],        
        totalElements:[],
        size:[],
        data: '' 
    }; 
}    

//O estado da  lista é modificado com o setState
buscarContato(pageNumber){         
        api.get(users+`${pageNumber}`)
        .then((response) => response.data)
        .then(dados => {            
            this.setState({ 
                lista: dados.content, 
                totalPages: dados.totalPages,
                size:dados.size
            })                             
         }).catch(error => 
            console.log('error============:',
            error,
            this.props.history.push("/forbidden")  
         ));            
}  

 pagina (pageNumber){ 
    console.log("Page = ", pageNumber) 
    this.buscarContato(pageNumber)    
}

deleteUser(user, event) {
    event.preventDefault();
    var txt;
    /* eslint no-restricted-globals:0 */
    var r = confirm("Deseja Excluir?");
    if (r === true) {
        txt = "OK!";
        // deleteActionId(codigo)
        this.remove(user)
        // alert ('Excluido com sucesso!!')
    } else {
        txt = "Cancel!";
    }
}

remove(data){
 
try {   
    const response = api.delete(`${del}/${data.id}`,)    
    .then(resp => {
        const list = this.getUpdateList(data, false)
        this.setState({lista: list })
        console.log("Nova lista: ",list)
        console.log("Resposta: ",resp)        
    })
    .catch(error => 
        console.log('error============>:',
        error,
        this.props.history.push("/forbidden") 
     ));
     console.log('👉 Returned data:', response);
    } catch(e){
        console.log(`😱 Axios request failed: ${e}`);
    }        
}

getDadosParaEditar(user,event){
    event.preventDefault();
    let dados = user;
    this.setState({
        data: dados
    })
    console.log("data",dados )
}

mostrarFormEdit() {
    const save = data => this.salvar(data);
    if (this.state.data.id != null) {
        return <FormEdit
                    id={this.state.data.id}
                    username={this.state.data.username}
                    email={this.state.data.email}
                    updateAction ={save}>
                </FormEdit>;
    }
}

salvar(data) {   
 let id = this.state.data.id
 try {
   const response = api.put(`${edit}/${id}`, JSON.stringify(data))
        .then(resp => {
            const list = this.getUpdateList(resp.data)
            this.setState({lista:list})
        })
        .catch(error => 
            console.log('error============>:',
            error,
            this.props.history.push("/forbidden")            
         ));
         console.log('👉 Returned data:', response);
    
        } catch(e){
            console.log(`😱 Axios request failed: ${e}`);
     }        
}

getUpdateList(user, add = true){
    //Remove o usuario da lista  e coloca o novo usuario na primeira posição
    const list = this.state.lista.filter(u=> u.id !== user.id)
    // coloca o primeiro elemento no array
    if(add) list.unshift(user)
    return list
}


componentWillMount() {
    this.buscarContato(0);         
 }
 
render() {
    
    //Estado da lista atualizado
    const list = this.state.lista;  
    const ultimoIndex = this.state.paginaAtual * this.state.size;
    const primeiroIndex = ultimoIndex - this.state.size;
    const contatosAtuais = list.slice(primeiroIndex, ultimoIndex);
    //Get page
    const paginate = pageNumber => this.pagina(pageNumber); 
         
return (       
    
    <div>
        <h1>Usuários do sistema...</h1>  

        {this.mostrarFormEdit()}
                <br></br><br></br>

        <Pagination            
        totalPages={this.state.totalPages}  
        paginate={ paginate }
        />    
           
        <table className="table table-striped">
            <thead>
                <tr>                        
                <th scope="col">username</th>
                <th scope="col">email</th>
                </tr>
                </thead>
                <tbody>

                    {
                        contatosAtuais.map((item) =>{
                        return (
                                <tr key = {item.id}>                                      
                                    <td> {item.username} </td>
                                    <td> {item.email} </td>
                                    <td><button className="btn btn-warning" onClick={this.getDadosParaEditar.bind(this,item)} ><i className="fa fa-pencil"></i></button></td>
                                    <td><button className="btn btn-danger ml-2" onClick={this.deleteUser.bind(this,item)}> <i className="fa fa-trash"></i>  </button></td>                                 
                                    
                                </tr>
                                );                            
                            })   
                    }

                </tbody>
        </table> 
           
    </div>     
);
}
}

export default User;