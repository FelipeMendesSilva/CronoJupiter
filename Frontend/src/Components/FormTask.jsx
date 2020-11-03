import './FormTask.css'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userAction, dateAction, tasksAction, idtasksAction } from '../actions';



class FormTask extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {

        const { tasks, userAction, user, _date, dateAction, idtasksAction, idtasks } = this.props;
        const _taskaux = tasks.find(task=>task.id===idtasks) ||{
              id:0,
              dia: _date.dia, mes: _date.mes, ano: _date.ano,
              title: '',
              horario: [],
              obs: 'obs',
              cor: ''
      
          }
        
        this.state = {
            ttasks: tasks,
            id: _taskaux.id,
            titulo: _taskaux.titulo,
            horario: _taskaux.horario,
            dia: _taskaux.dia,
            mes: _taskaux.mes,
            ano: _taskaux.ano,
            obs: _taskaux.obs,
            cor: _taskaux.cor,
            pickerColor:'',
            
        }
        

        return (

            <div className='flex-container'>
                <form>
                    <div>{this.state.dia}/{this.state.mes}/{this.state.ano}</div><br />
                    <label> Titulo:<br />
                        <input type="text" name='titulo' placeholder={this.state.titulo} />
                    </label><br /><br />
                    <label> Obs:<br />
                        <textarea type="text" name='obs' placeholder={this.state.obs} />
                    </label><br /><br />
                    <label> Horario Inicial / Horario Final:<br /><br />
                    <select name="horarioinicial" id="hinicial" required onChange={this.handleChange1}>
                        <option disabled>Horario Inicial</option>
                    </select>
                    <select name="horariofinal" id="hfinal" required onChange={this.handleChange2}>
                        <option disabled>Horario Final</option>
                    </select>
                    </label><br /><br />
                    <label> Cor:</label><br />
                    <div className="pickerColor" id="pickerColor" onClick={(e)=>this.handleChange4()}/><br/>
                    <div className='container-cores' id='container-cores'>
                    <div name="cor" className="cor1" id="#7a136d" onClick={(e)=>this.handleChange3(e)} />
                    <div name="cor" className="cor2" id="#438823" onClick={(e)=>this.handleChange3(e)} />
                    <div name="cor" className="cor3" id="#5627a3" onClick={(e)=>this.handleChange3(e)} />
                    <div name="cor" className="cor4" id="#ebe71b" onClick={(e)=>this.handleChange3(e)} />
                    <div name="cor" className="cor5" id="#d87f0a" onClick={(e)=>this.handleChange3(e)} />
                    <div name="cor" className="cor6" id="#ce1251" onClick={(e)=>this.handleChange3(e)} />
                    <div name="cor" className="cor7" id="#1299ce" onClick={(e)=>this.handleChange3(e)} />
                    <div name="cor" className="cor8" id="#3bcf28" onClick={(e)=>this.handleChange3(e)} />
                    <div name="cor" className="cor9"  id="#94bbca" onClick={(e)=>this.handleChange3(e)} />
                    <div name="cor" className="cor10" id="#cf2828" onClick={(e)=>this.handleChange3(e)} />
                    </div>
                    <br />
                    <button id='salvar' className='salvar' onClick={(e)=>this.handleSalvar(e)}>Salvar</button><button id='cancelar' className='cancelar' onClick={(e)=>this.handleCancelar(e)}>Cancelar</button>


                </form>
            </div>
        )
    }

    //APOS RENDERIZAR

    componentDidMount() {
        criaOptions(document.getElementById('hinicial'), this.state.horario)
        criaOptions(document.getElementById('hfinal'),this.state.horario)
        document.getElementById('pickerColor').style.backgroundColor = this.state.cor
        document.getElementById('container-cores').style.visibility='hidden'
    }

    componentDidUpdate() {
        SelecionaHorariodaTaskInicial(document.getElementById('hinicial'), this.state.horario)
        SelecionaHorariodaTaskFinal(document.getElementById('hfinal'),this.state.horario)
        document.getElementById('pickerColor').style.backgroundColor = this.state.cor
        document.getElementById('container-cores').style.visibility = 'hidden'
    }

    
    handleChange1(event) {    
        let hinicial= event.target.value;
        
    }
    handleChange2(event) {    
         
    }
    handleChange3(event) {
        
        let x = event.target.id
        this.state.pickerColor = x
        document.getElementById('pickerColor').style.backgroundColor = x
    }
    handleChange4(){
        let y = document.getElementById('container-cores')
        if (y.style.visibility === 'visible') { y.style.visibility = 'hidden'; return }
        else { y.style.visibility = 'visible'; return }

    }


}

function Submit() {

    return;
}

function criaOptions(elemento, horarioTask) {

    //limpa options
    

    let ind = 0
    let horario = ''
    let hora = ''
    let min = ''

    for (let i = 0; i < 24; i++) {
        if (i <= 9) { hora = '0' + i.toString() }
        else { hora = i.toString() }

        for (let j = 0; j < 4; j++) {
            if (j === 0) { min = '00' }
            if (j === 1) { min = '15' }
            if (j === 2) { min = '30' }
            if (j === 3) { min = '45' }
            let options = document.createElement('option')
            horario = hora +':'+ min
            options.value = ind.toString()
            options.innerHTML = horario
            elemento.appendChild(options)
            
            ind++
        }
    }
    //seleciona horario da task
    elemento.value=horarioTask[0]

}

function SelecionaHorariodaTaskInicial(elemento, horarioTask){
    elemento.value=horarioTask[0]

}
function SelecionaHorariodaTaskFinal(elemento, horarioTask){
    elemento.value=horarioTask[horarioTask.length-1]

}





//REDUX

const mapStateToProps = store => ({
    idtasks: store.idtasksState.idtasks,
    tasks: store.tasksState.tasks,
    user: store.userState.user,
    _date: store.dateState._date
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ userAction, dateAction, tasksAction, idtasksAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormTask);

