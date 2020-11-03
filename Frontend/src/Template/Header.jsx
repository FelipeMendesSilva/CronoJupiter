import React from 'react'
import './Header.css'
import logo from '../assets/logo.png'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userAction, dateAction } from '../actions';


class Header extends React.Component  {
    render(){
        const {user} = this.props
    return (
        <div className='headercss'>
            <img src={logo} alt='logo' width='50px' height='50px'></img>
            <h1 className='cronologo'>CRONOJUPITER</h1>
            <h2 className='cronologo2'>{saudacao()}<spam>{user}</spam></h2>
        </div>
    )
    }
}
function saudacao(){
    let y = new Date()
    if(5<y.getHours() && y.getHours()<12){return 'Bom dia '}
    if(11<y.getHours() && y.getHours()<18){return 'Boa tarde '}
    else{return 'Boa noite '}

}

//REDUX

const mapStateToProps = store => ({
    user: store.userState.user,
    _date: store.dateState._date
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ userAction, dateAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);


