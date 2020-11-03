import './Task.css'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userAction, dateAction, tasksAction, idtasksAction } from '../actions';
import FormTask from './FormTask';


class Tasks extends Component {
    
        //const { userAction, user } = this.props;
        
    render() {
        
        
        const { tasks,tasksAction, _date, idtasksAction, idtasks  } = this.props;
        this.state = {
            ttasks: tasks,
            data:_date,
            idtasks: idtasks
        }
        

        
        return (
            
            <div className='div-container'>
                    <table className='table-container' id='tasklist' >
                    <tr className='taskscss' onClick={()=> idtasksAction(Number(document.getElementById('b0').attributes.getNamedItem("id-task").value))}><td  id='a0'>00:00</td> <td className='tb' id='b0'  id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b1').attributes.getNamedItem("id-task").value))}><td   id='a1'>00:15</td> <td className='tb' id='b1'  id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b2').attributes.getNamedItem("id-task").value))}><td   id='a2'>00:30</td> <td className='tb' id='b2'  id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b3').attributes.getNamedItem("id-task").value))}><td   id='a3'>00:45</td> <td className='tb' id='b3'  id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b4').attributes.getNamedItem("id-task").value))}><td   id='a4'>01:00</td> <td className='tb' id='b4'  id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b5').attributes.getNamedItem("id-task").value))}><td   id='a5'>01:15</td> <td className='tb' id='b5'  id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b6').attributes.getNamedItem("id-task").value))}><td   id='a6'>01:30</td> <td className='tb' id='b6'  id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b7').attributes.getNamedItem("id-task").value))}><td   id='a7'>01:45</td> <td className='tb' id='b7'  id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b8').attributes.getNamedItem("id-task").value))}><td   id='a8'>02:00</td> <td className='tb' id='b8'  id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b9').attributes.getNamedItem("id-task").value))}><td   id='a9'>02:15</td> <td className='tb' id='b9'  id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b10').attributes.getNamedItem("id-task").value))}><td id='a10'>02:30</td> <td className='tb' id='b10' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b11').attributes.getNamedItem("id-task").value))}><td id='a11'>02:45</td> <td className='tb' id='b11' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b12').attributes.getNamedItem("id-task").value))}><td id='a12'>03:00</td> <td className='tb' id='b12' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b13').attributes.getNamedItem("id-task").value))}><td id='a13'>03:15</td> <td className='tb' id='b13' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b14').attributes.getNamedItem("id-task").value))}><td id='a14'>03:30</td> <td className='tb' id='b14' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b15').attributes.getNamedItem("id-task").value))}><td id='a15'>03:45</td> <td className='tb' id='b15' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b16').attributes.getNamedItem("id-task").value))}><td id='a16'>04:00</td> <td className='tb' id='b16' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b17').attributes.getNamedItem("id-task").value))}><td id='a17'>04:15</td> <td className='tb' id='b17' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b18').attributes.getNamedItem("id-task").value))}><td id='a18'>04:30</td> <td className='tb' id='b18' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b19').attributes.getNamedItem("id-task").value))}><td id='a19'>04:45</td> <td className='tb' id='b19' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b20').attributes.getNamedItem("id-task").value))}><td id='a20'>05:00</td> <td className='tb' id='b20' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b21').attributes.getNamedItem("id-task").value))}><td id='a21'>05:15</td> <td className='tb' id='b21' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b22').attributes.getNamedItem("id-task").value))}><td id='a22'>05:30</td> <td className='tb' id='b22' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b23').attributes.getNamedItem("id-task").value))}><td id='a23'>05:45</td> <td className='tb' id='b23' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b24').attributes.getNamedItem("id-task").value))}><td id='a24'>06:00</td> <td className='tb' id='b24' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b25').attributes.getNamedItem("id-task").value))}><td id='a25'>06:15</td> <td className='tb' id='b25' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b26').attributes.getNamedItem("id-task").value))}><td id='a26'>06:30</td> <td className='tb' id='b26' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b27').attributes.getNamedItem("id-task").value))}><td id='a27'>06:45</td> <td className='tb' id='b27' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b28').attributes.getNamedItem("id-task").value))}><td id='a28'>07:00</td> <td className='tb' id='b28' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b29').attributes.getNamedItem("id-task").value))}><td id='a29'>07:15</td> <td className='tb' id='b29' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b30').attributes.getNamedItem("id-task").value))}><td id='a30'>07:30</td> <td className='tb' id='b30' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b31').attributes.getNamedItem("id-task").value))}><td id='a31'>07:45</td> <td className='tb' id='b31' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b32').attributes.getNamedItem("id-task").value))}><td id='a32'>08:00</td> <td className='tb' id='b32' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b33').attributes.getNamedItem("id-task").value))}><td id='a33'>08:15</td> <td className='tb' id='b33' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b34').attributes.getNamedItem("id-task").value))}><td id='a34'>08:30</td> <td className='tb' id='b34' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b35').attributes.getNamedItem("id-task").value))}><td id='a35'>08:45</td> <td className='tb' id='b35' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b36').attributes.getNamedItem("id-task").value))}><td id='a36'>09:00</td> <td className='tb' id='b36' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b37').attributes.getNamedItem("id-task").value))}><td id='a37'>09:15</td> <td className='tb' id='b37' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b38').attributes.getNamedItem("id-task").value))}><td id='a38'>09:30</td> <td className='tb' id='b38' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b39').attributes.getNamedItem("id-task").value))}><td id='a39'>09:45</td> <td className='tb' id='b39' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b40').attributes.getNamedItem("id-task").value))}><td id='a40'>10:00</td> <td className='tb' id='b40' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b41').attributes.getNamedItem("id-task").value))}><td id='a41'>10:15</td> <td className='tb' id='b41' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b42').attributes.getNamedItem("id-task").value))}><td id='a42'>10:30</td> <td className='tb' id='b42' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b43').attributes.getNamedItem("id-task").value))}><td id='a43'>10:45</td> <td className='tb' id='b43' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b44').attributes.getNamedItem("id-task").value))}><td id='a44'>11:00</td> <td className='tb' id='b44' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b45').attributes.getNamedItem("id-task").value))}><td id='a45'>11:15</td> <td className='tb' id='b45' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b46').attributes.getNamedItem("id-task").value))}><td id='a46'>11:30</td> <td className='tb' id='b46' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b47').attributes.getNamedItem("id-task").value))}><td id='a47'>11:45</td> <td className='tb' id='b47' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b48').attributes.getNamedItem("id-task").value))}><td id='a48'>12:00</td> <td className='tb' id='b48' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b49').attributes.getNamedItem("id-task").value))}><td id='a49'>12:15</td> <td className='tb' id='b49' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b50').attributes.getNamedItem("id-task").value))}><td id='a50'>12:30</td> <td className='tb' id='b50' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b51').attributes.getNamedItem("id-task").value))}><td id='a51'>12:45</td> <td className='tb' id='b51' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b52').attributes.getNamedItem("id-task").value))}><td id='a52'>13:00</td> <td className='tb' id='b52' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b53').attributes.getNamedItem("id-task").value))}><td id='a53'>13:15</td> <td className='tb' id='b53' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b54').attributes.getNamedItem("id-task").value))}><td id='a54'>13:30</td> <td className='tb' id='b54' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b55').attributes.getNamedItem("id-task").value))}><td id='a55'>13:45</td> <td className='tb' id='b55' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b56').attributes.getNamedItem("id-task").value))}><td id='a56'>14:00</td> <td className='tb' id='b56' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b57').attributes.getNamedItem("id-task").value))}><td id='a57'>14:15</td> <td className='tb' id='b57' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b58').attributes.getNamedItem("id-task").value))}><td id='a58'>14:30</td> <td className='tb' id='b58' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b59').attributes.getNamedItem("id-task").value))}><td id='a59'>14:45</td> <td className='tb' id='b59' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b60').attributes.getNamedItem("id-task").value))}><td id='a60'>15:00</td> <td className='tb' id='b60' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b61').attributes.getNamedItem("id-task").value))}><td id='a61'>15:15</td> <td className='tb' id='b61' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b62').attributes.getNamedItem("id-task").value))}><td id='a62'>15:30</td> <td className='tb' id='b62' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b63').attributes.getNamedItem("id-task").value))}><td id='a63'>15:45</td> <td className='tb' id='b63' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b64').attributes.getNamedItem("id-task").value))}><td id='a64'>16:00</td> <td className='tb' id='b64' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b65').attributes.getNamedItem("id-task").value))}><td id='a65'>16:15</td> <td className='tb' id='b65' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b66').attributes.getNamedItem("id-task").value))}><td id='a66'>16:30</td> <td className='tb' id='b66' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b67').attributes.getNamedItem("id-task").value))}><td id='a67'>16:45</td> <td className='tb' id='b67' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b68').attributes.getNamedItem("id-task").value))}><td id='a68'>17:00</td> <td className='tb' id='b68' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b69').attributes.getNamedItem("id-task").value))}><td id='a69'>17:15</td> <td className='tb' id='b69' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b70').attributes.getNamedItem("id-task").value))}><td id='a70'>17:30</td> <td className='tb' id='b70' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b71').attributes.getNamedItem("id-task").value))}><td id='a71'>17:45</td> <td className='tb' id='b71' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b72').attributes.getNamedItem("id-task").value))}><td id='a72'>18:00</td> <td className='tb' id='b72' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b73').attributes.getNamedItem("id-task").value))}><td id='a73'>18:15</td> <td className='tb' id='b73' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b74').attributes.getNamedItem("id-task").value))}><td id='a74'>18:30</td> <td className='tb' id='b74' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b75').attributes.getNamedItem("id-task").value))}><td id='a75'>18:45</td> <td className='tb' id='b75' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b76').attributes.getNamedItem("id-task").value))}><td id='a76'>19:00</td> <td className='tb' id='b76' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b77').attributes.getNamedItem("id-task").value))}><td id='a77'>19:15</td> <td className='tb' id='b77' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b78').attributes.getNamedItem("id-task").value))}><td id='a78'>19:30</td> <td className='tb' id='b78' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b79').attributes.getNamedItem("id-task").value))}><td id='a79'>19:45</td> <td className='tb' id='b79' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b80').attributes.getNamedItem("id-task").value))}><td id='a80'>20:00</td> <td className='tb' id='b80' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b81').attributes.getNamedItem("id-task").value))}><td id='a81'>20:15</td> <td className='tb' id='b81' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b82').attributes.getNamedItem("id-task").value))}><td id='a82'>20:30</td> <td className='tb' id='b82' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b83').attributes.getNamedItem("id-task").value))}><td id='a83'>20:45</td> <td className='tb' id='b83' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b84').attributes.getNamedItem("id-task").value))}><td id='a84'>21:00</td> <td className='tb' id='b84' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b85').attributes.getNamedItem("id-task").value))}><td id='a85'>21:15</td> <td className='tb' id='b85' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b86').attributes.getNamedItem("id-task").value))}><td id='a86'>21:30</td> <td className='tb' id='b86' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b87').attributes.getNamedItem("id-task").value))}><td id='a87'>21:45</td> <td className='tb' id='b87' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b88').attributes.getNamedItem("id-task").value))}><td id='a88'>22:00</td> <td className='tb' id='b88' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b89').attributes.getNamedItem("id-task").value))}><td id='a89'>22:15</td> <td className='tb' id='b89' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b90').attributes.getNamedItem("id-task").value))}><td id='a90'>22:30</td> <td className='tb' id='b90' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b91').attributes.getNamedItem("id-task").value))}><td id='a91'>22:45</td> <td className='tb' id='b91' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b92').attributes.getNamedItem("id-task").value))}><td id='a92'>23:00</td> <td className='tb' id='b92' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b93').attributes.getNamedItem("id-task").value))}><td id='a93'>23:15</td> <td className='tb' id='b93' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b94').attributes.getNamedItem("id-task").value))}><td id='a94'>23:30</td> <td className='tb' id='b94' id-task='' ></td> <td></td> </tr>
                    <tr className='taskscss' onClick={()=>idtasksAction(Number(document.getElementById('b95').attributes.getNamedItem("id-task").value))}><td id='a95'>23:45</td> <td className='tb' id='b95' id-task='' ></td> <td></td> </tr>
                          
                </table>
                
            </div>
        )
    }

    //APOS RENDERIZAR

    componentDidMount() {
        
        montaLista(this.state.ttasks,this.state.data);
        
    }

    componentDidUpdate(){
        limpaLista()
        montaLista(this.state.ttasks, this.state.data);
        
        
        
        

    }

}


function montaLista(tasks, data) {

    for (let id = 0; id < 96; id++) {
        let y = document.getElementById('a' + id.toString())
        let z = document.getElementById('b' + id.toString())
        

        for (const task of tasks) {
            if((task.dia===data.dia)&&(task.mes===data.mes)&&(task.ano===data.ano)){
            for (let n = 0; n < task.horario.length; n++) {
                if (task.horario[n] === id) {
                    z.attributes.getNamedItem("id-task").value = task.id
                    //alert(z.attributes.getNamedItem("id-task").value)
                    z.innerHTML = task.titulo
                    y.style.backgroundColor = task.cor
                }
            }
            }
        }
    }
}

function limpaLista() {

    for (let id = 0; id < 96; id++) {
        let y = document.getElementById('a' + id.toString())
        let z = document.getElementById('b' + id.toString())
        z.attributes.getNamedItem("id-task").value = ''
        z.innerHTML = ''
        y.style.backgroundColor = 'snow'

    }
}







//REDUX

const mapStateToProps = store => ({
    user: store.userState.user,
    _date: store.dateState._date,
    tasks: store.tasksState.tasks,
    idtasks: store.idtasksState.idtasks
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ userAction, dateAction,tasksAction, idtasksAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);