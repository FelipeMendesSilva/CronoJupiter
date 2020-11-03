import './Task.css'
import React, { Component } from 'react'
import { unmountComponentAtNode, findDOMNode} from 'react-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userAction, dateAction, tasksAction } from '../actions';



class Tasks extends Component {
    
        //const { userAction, user } = this.props;
    
    

    render() {
        
        const { tasks,tasksAction, _date, dateAction } = this.props;
        
        this.state = {
            ttasks: tasks
            
        }

        return (
            
            <div id = 'container'>
            <table className='task-container' id='tasklist' >
                <button onClick={() => tasksAction([{
                dia: 10,
                mes: 10, 
                ano: 2020,
                title: 'jose',
                horario: [15],
                obs: 'obs',
                cor: 'yellow'
        
            }])}>{"<< Anterior"}</button>
            
            </table>
            </div>
        )
    }

    //APOS RENDERIZAR

    componentDidMount() {
        
        montaLista(this.state.ttasks);
       
        

    }

    componentDidUpdate() {
        //limpa lista
        for (let i = 0; i < 96; i++) {
            let limpatasks = document.getElementsByClassName('taskscss')[0]
            document.getElementById('tasklist').removeChild(limpatasks)
        }
        //monta novamente
        montaLista(this.state.ttasks);
        

    }

}


function montaLista(tasks) {
    
    
    let id = 0;

    for (let i = 0; i < 24; i++) {
        for (let h = 0; h < 4; h++) {
            let linha = document.createElement("tr")
            linha.id = id.toString()
            linha.className = 'taskscss'
            let coluna1 = document.createElement("td")
            let coluna2 = document.createElement("td")
            let b = ''
            if (h === 0) { b = ':00' }
            if (h === 1) { b = ':15' }
            if (h === 2) { b = ':30' }
            if (h === 3) { b = ':45' }
            let c = i.toString()
            if (c.length === 1) { c = "0" + i.toString() }
            
            //horario da linha
            coluna1.innerHTML = (c).toString() + b
            //tarefa da linha
            for (const task of tasks) {
                for (let n = 0; n < task.horario.length; n++) {
                   if (task.horario[n] === id) { 
                        coluna2.innerHTML = task.title
                        coluna1.style.backgroundColor = task.cor
                        coluna2.addEventListener('click',(e)=>{alert(task.horario[n])})
                        

                    }
                }
            }

            id++;
            linha.appendChild(coluna1)
            linha.appendChild(coluna2)

            document.getElementById('tasklist').appendChild(linha)
        }
    }

}







//REDUX

const mapStateToProps = store => ({
    user: store.userState.user,
    _date: store.dateState._date,
    tasks: store.tasksState.tasks
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ userAction, dateAction,tasksAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);