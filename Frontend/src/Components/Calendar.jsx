import './Calendar.css'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userAction, dateAction, tasksAction } from '../actions';
import Tasks from './Tasks'
import FormTask from './FormTask';




class Calendar extends Component {
    constructor(props) {
        super(props);
        
      }

    render() {
        //const { userAction, user } = this.props;
        const { tasks,_date, dateAction } = this.props;
        
        this.state = {
            ttasks : tasks,
            diasmes: [],
            dataatual: {
                dia: _date.dia,
                mes: _date.mes,
                ano: _date.ano
            }
        }
        

        let dias = (montaCalendario(this.state.dataatual));
        this.state.diasmes = dias
        //this.setState({diasmes:dias})
        const monthNames = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];




        return (

            <div className='calendar-container'>
                <div>
                    <div className='navdata'>
                        <button onClick={() => dateAction(subtraiMes(this.state.dataatual))}>{"<<  "}</button>
                        <spam className='mes_atual'>{monthNames[this.state.dataatual.mes]} <spam className='ano_atual'>{this.state.dataatual.ano}</spam></spam>
                        <button onClick={() => dateAction(somaMes(this.state.dataatual))}>{"  >>"}</button>
                        {/* <div>{user}</div> */}
                    </div>

                    <table  >

                        <tr>
                            <td className='s' >D</td>
                            <td className='s' >S</td>
                            <td className='s' >T</td>
                            <td className='s' >Q</td>
                            <td className='s' >Q</td>
                            <td className='s' >S</td>
                            <td className='s' >S</td>
                        </tr><tr>
                            <td className='dia' t_selected='false' id='d0' onClick={() => dateAction(novaData(dias[0],this.state.dataatual))}>{dias[0]}<div className = 'tasks' id='showtasks0'></div></td>
                            <td className='dia' t_selected='false' id='d1' onClick={() => dateAction(novaData(dias[1],this.state.dataatual))}>{dias[1]}<div className = 'tasks' id='showtasks1'></div></td>
                            <td className='dia' t_selected='false' id='d2' onClick={() => dateAction(novaData(dias[2],this.state.dataatual))}>{dias[2]}<div className = 'tasks' id='showtasks2'></div></td>
                            <td className='dia' t_selected='false' id='d3' onClick={() => dateAction(novaData(dias[3],this.state.dataatual))}>{dias[3]}<div className = 'tasks' id='showtasks3'></div></td>
                            <td className='dia' t_selected='false' id='d4' onClick={() => dateAction(novaData(dias[4],this.state.dataatual))}>{dias[4]}<div className = 'tasks' id='showtasks4'></div></td>
                            <td className='dia' t_selected='false' id='d5' onClick={() => dateAction(novaData(dias[5],this.state.dataatual))}>{dias[5]}<div className = 'tasks' id='showtasks5'></div></td>
                            <td className='dia' t_selected='false' id='d6' onClick={() => dateAction(novaData(dias[6],this.state.dataatual))}>{dias[6]}<div className = 'tasks' id='showtasks6'></div></td>
                        </tr><tr>
                            <td className='dia' t_selected='false' id='d7'  onClick={() => dateAction(novaData(dias[7],this.state.dataatual))}>{dias[7]}<div className = 'tasks' id='showtasks7'></div></td>
                            <td className='dia' t_selected='false' id='d8'  onClick={() => dateAction(novaData(dias[8],this.state.dataatual))}>{dias[8]}<div className = 'tasks' id='showtasks8'></div></td>
                            <td className='dia' t_selected='false' id='d9'  onClick={() => dateAction(novaData(dias[9],this.state.dataatual))}>{dias[9]}<div className = 'tasks' id='showtasks9'></div></td>
                            <td className='dia' t_selected='false' id='d10' onClick={() => dateAction(novaData(dias[10],this.state.dataatual))}>{dias[10]}<div className = 'tasks' id='showtasks10'></div></td>
                            <td className='dia' t_selected='false' id='d11' onClick={() => dateAction(novaData(dias[11],this.state.dataatual))}>{dias[11]}<div className = 'tasks' id='showtasks11'></div></td>
                            <td className='dia' t_selected='false' id='d12' onClick={() => dateAction(novaData(dias[12],this.state.dataatual))}>{dias[12]}<div className = 'tasks' id='showtasks12'></div></td>
                            <td className='dia' t_selected='false' id='d13' onClick={() => dateAction(novaData(dias[13],this.state.dataatual))}>{dias[13]}<div className = 'tasks' id='showtasks13'></div></td>
                        </tr><tr>
                            <td className='dia' t_selected='false' id='d14' onClick={() => dateAction(novaData(dias[14],this.state.dataatual))}>{dias[14]}<div className = 'tasks' id='showtasks14'></div></td>
                            <td className='dia' t_selected='false' id='d15' onClick={() => dateAction(novaData(dias[15],this.state.dataatual))}>{dias[15]}<div className = 'tasks' id='showtasks15'></div></td>
                            <td className='dia' t_selected='false' id='d16' onClick={() => dateAction(novaData(dias[16],this.state.dataatual))}>{dias[16]}<div className = 'tasks' id='showtasks16'></div></td>
                            <td className='dia' t_selected='false' id='d17' onClick={() => dateAction(novaData(dias[17],this.state.dataatual))}>{dias[17]}<div className = 'tasks' id='showtasks17'></div></td>
                            <td className='dia' t_selected='false' id='d18' onClick={() => dateAction(novaData(dias[18],this.state.dataatual))}>{dias[18]}<div className = 'tasks' id='showtasks18'></div></td>
                            <td className='dia' t_selected='false' id='d19' onClick={() => dateAction(novaData(dias[19],this.state.dataatual))}>{dias[19]}<div className = 'tasks' id='showtasks19'></div></td>
                            <td className='dia' t_selected='false' id='d20' onClick={() => dateAction(novaData(dias[20],this.state.dataatual))}>{dias[20]}<div className = 'tasks' id='showtasks20'></div></td>
                        </tr><tr>
                            <td className='dia' t_selected='false' id='d21' onClick={() => dateAction(novaData(dias[21],this.state.dataatual))}>{dias[21]}<div className = 'tasks' id='showtasks21'></div></td>
                            <td className='dia' t_selected='false' id='d22' onClick={() => dateAction(novaData(dias[22],this.state.dataatual))}>{dias[22]}<div className = 'tasks' id='showtasks22'></div></td>
                            <td className='dia' t_selected='false' id='d23' onClick={() => dateAction(novaData(dias[23],this.state.dataatual))}>{dias[23]}<div className = 'tasks' id='showtasks23'></div></td>
                            <td className='dia' t_selected='false' id='d24' onClick={() => dateAction(novaData(dias[24],this.state.dataatual))}>{dias[24]}<div className = 'tasks' id='showtasks24'></div></td>
                            <td className='dia' t_selected='false' id='d25' onClick={() => dateAction(novaData(dias[25],this.state.dataatual))}>{dias[25]}<div className = 'tasks' id='showtasks25'></div></td>
                            <td className='dia' t_selected='false' id='d26' onClick={() => dateAction(novaData(dias[26],this.state.dataatual))}>{dias[26]}<div className = 'tasks' id='showtasks26'></div></td>
                            <td className='dia' t_selected='false' id='d27' onClick={() => dateAction(novaData(dias[27],this.state.dataatual))}>{dias[27]}<div className = 'tasks' id='showtasks27'></div></td>
                        </tr><tr>
                            <td className='dia' t_selected='false' id='d28' onClick={() => dateAction(novaData(dias[28],this.state.dataatual))}>{dias[28]}<div className = 'tasks' id='showtasks28'></div></td>
                            <td className='dia' t_selected='false' id='d29' onClick={() => dateAction(novaData(dias[29],this.state.dataatual))}>{dias[29]}<div className = 'tasks' id='showtasks29'></div></td>
                            <td className='dia' t_selected='false' id='d30' onClick={() => dateAction(novaData(dias[30],this.state.dataatual))}>{dias[30]}<div className = 'tasks' id='showtasks30'></div></td>
                            <td className='dia' t_selected='false' id='d31' onClick={() => dateAction(novaData(dias[31],this.state.dataatual))}>{dias[31]}<div className = 'tasks' id='showtasks31'></div></td>
                            <td className='dia' t_selected='false' id='d32' onClick={() => dateAction(novaData(dias[32],this.state.dataatual))}>{dias[32]}<div className = 'tasks' id='showtasks32'></div></td>
                            <td className='dia' t_selected='false' id='d33' onClick={() => dateAction(novaData(dias[33],this.state.dataatual))}>{dias[33]}<div className = 'tasks' id='showtasks33'></div></td>
                            <td className='dia' t_selected='false' id='d34' onClick={() => dateAction(novaData(dias[34],this.state.dataatual))}>{dias[34]}<div className = 'tasks' id='showtasks34'></div></td>
                        </tr>
                        <tr>
                            <td className='dia' t_selected='false' id='d35' onClick={() => dateAction(novaData(dias[35],this.state.dataatual))}>{dias[35]}<div className = 'tasks' id='showtasks35'></div></td>
                            <td className='dia' t_selected='false' id='d36' onClick={() => dateAction(novaData(dias[36],this.state.dataatual))}>{dias[36]}<div className = 'tasks' id='showtasks36'></div></td>
                            <td className='dia' t_selected='false' id='d37' onClick={() => dateAction(novaData(dias[37],this.state.dataatual))}>{dias[37]}<div className = 'tasks' id='showtasks37'></div></td>
                            <td className='dia' t_selected='false' id='d38' onClick={() => dateAction(novaData(dias[38],this.state.dataatual))}>{dias[38]}<div className = 'tasks' id='showtasks38'></div></td>
                            <td className='dia' t_selected='false' id='d39' onClick={() => dateAction(novaData(dias[39],this.state.dataatual))}>{dias[39]}<div className = 'tasks' id='showtasks39'></div></td>
                            <td className='dia' t_selected='false' id='d40' onClick={() => dateAction(novaData(dias[40],this.state.dataatual))}>{dias[40]}<div className = 'tasks' id='showtasks40'></div></td>
                            <td className='dia' t_selected='false' id='d41' onClick={() => dateAction(novaData(dias[41],this.state.dataatual))}>{dias[41]}<div className = 'tasks' id='showtasks41'></div></td>
                        </tr>

                    </table>
                </div>
                <Tasks />
                <FormTask  />
                
            </div>
        )
    }

    //APOS RENDERIZAR

    componentDidMount() {

        selectHoje(this.state.diasmes, this.state.dataatual.dia, this.state.dataatual.mes, this.state.dataatual.ano);
        mostraTarefas(this.state.diasmes, this.state.ttasks)
    }
    componentDidUpdate() {
        
        selectHoje(this.state.diasmes, this.state.dataatual.dia, this.state.dataatual.mes, this.state.dataatual.ano);
        mostraTarefas(this.state.diasmes, this.state.ttasks)
    }
}

function montaCalendario({ dia, mes, ano }) {
    let dias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    if (mes === 2 || mes === 4 || mes === 6 || mes === 9 || mes === 11) { dias.pop() }
    if (mes === 2) { dias.pop() } //fevereiro
    if (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)) { dias.pop() } //ano bisexto

    let diasemana = new Date(ano, (mes - 1), 1).getDay()
    if (diasemana > 0) {
        for (let i = 0; i < diasemana; i++) {
            dias.unshift('')
        }
    }
    dias.push('','','','','','','','','','','','','','','','')
    

    return dias;
}


function somaMes({ dia, mes, ano }) {
    dia=1
    mes = mes + 1
    if (mes === 13) {
        mes = 1;
        ano = ano + 1
    }
    
    return { dia, mes, ano };
}

function subtraiMes({ dia, mes, ano }) {
    dia=1
    mes = mes - 1
    if (mes === 0) {
        mes = 12;
        ano = ano - 1
    }
    return { dia, mes, ano };
}

function selectHoje(dias, dia, mes, ano) {
    let now = new Date();
    let hoje = now.getDate();
    let pos = dias.indexOf(hoje)
    let index = ('d' + pos.toString()).toString()
    
    // limpa calendario e tarefas
    let y = document.getElementsByClassName('dia');
    let z = document.getElementsByClassName('tasks');
    let i;
    for (i = 0; i < 42; i++) {
        if (i === 0 || i === 7 || i === 14 || i === 21 || i === 28 || i === 35) { y[i].style.color = 'red'; }
        else { y[i].style.color = 'black'; }
        
        y[i].style.fontSize = '1em';
        y[i].style.borderStyle = 'none ';
        y[i].attributes.getNamedItem("t_selected").value='false';
        if (dias[i]==="") {y[i].attributes.getNamedItem("t_selected").value='dead'; }

        z[i].innerHTML = '';

    }

    if ((now.getMonth() + 1 === mes) && (now.getFullYear() === ano)) {
        //deixa texto do dia de hoje azul
        // document.getElementById(index).style.borderStyle = 'solid ';
        // document.getElementById(index).style.borderWidth = '1px ';
        // document.getElementById(index).style.borderColor = 'DimGrey ';
        //document.getElementById(index).style.fontSize = '1.5em';
        document.getElementById(index).attributes.getNamedItem("t_selected").value='hoje';
        document.getElementById(index).style.color='white';

    }
    
    let pos2 = dias.indexOf(dia)
    y[pos2].attributes.getNamedItem("t_selected").value='true';
    y[pos2].style.color='white';
    

}


function mostraTarefas(diasmes, tasks){
    for(let task of tasks){
        let i =diasmes.indexOf(task.dia)
        let j= 'showtasks'+i.toString()
        let cor = '<spam style="color:'+ task.cor +'">'+String.fromCharCode(0x23F9)+'</spam>'
        let div = document.getElementById(j)
        div.innerHTML=div.innerHTML+ cor
    }


}

function novaData(dia,{mes, ano}){
 let obj={dia, mes, ano}
 return obj
}

//REDUX

const mapStateToProps = store => ({
    user: store.userState.user,
    _date: store.dateState._date,
    tasks: store.tasksState.tasks
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ userAction, dateAction, tasksAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

