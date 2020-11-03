import './Login.css'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userAction, dateAction, tasksAction } from '../actions';



class Login extends Component {
    constructor(props) {
        super(props);
        
      }

    render() {
        const { tasks, _date, dateAction, userAction, user } = this.props;

        this.state = {
            
            }
        
        

        return(
            <div className='cont'>
                <div className='container-login'>
                    <h1 className='h1login'>LOGIN</h1><br /><br />
                    <input className='inputlogin' name='usuario' id='usuario' type='text' placeholder='usuario' ></input><br />
                    <input className='inputlogin' name='senha1' id='senha1' type='password' placeholder='senha'></input><br />
                    <input className='inputlogin' name='senha2' id='senha2' type='password' placeholder='Confirme sua senha'></input><br /><br />
                    <button className='botao1' id='entrar'>Entrar</button><br />
                    <button className='botao2' id='cadastro' onClick={(e)=>this.handleChange1(e)}>Cadastrar Novo Usuário</button>
                    <button className='botao1' id='cadastrar'>Cadastrar</button><br />
                    <button className='botao2' id='voltar'onClick={(e)=>this.handleChange2(e)}>Voltar</button><br />
                </div>
            </div>
        )

    }
    componentDidMount() {
        document.getElementById('senha2').style.visibility='hidden'
        document.getElementById('cadastrar').style.visibility='hidden'
        document.getElementById('voltar').style.visibility='hidden'
        document.getElementById('usuario').focus()
        
        
        
    }

    handleChange1(e){
        document.getElementById('senha2').style.visibility='visible'
        document.getElementById('cadastrar').style.visibility='visible'
        document.getElementById('voltar').style.visibility='visible'
        document.getElementById('entrar').style.visibility='hidden'
        document.getElementById('cadastro').style.visibility='hidden'
    }
    handleChange2(e){
        document.getElementById('senha2').style.visibility='hidden'
        document.getElementById('cadastrar').style.visibility='hidden'
        document.getElementById('voltar').style.visibility='hidden'
        document.getElementById('entrar').style.visibility='visible'
        document.getElementById('cadastro').style.visibility='visible'
    }
}



//REDUX

const mapStateToProps = store => ({
    user: store.userState.user,
    _date: store.dateState._date,
    tasks: store.tasksState.tasks
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ userAction, dateAction, tasksAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);