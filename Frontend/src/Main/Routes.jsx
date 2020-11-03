import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

//import Home from '../components/home/Home'
//import UserCrud from '../components/user/UserCrud'

import Calendar from '../Components/Calendar'
import Login from '../Components/Login'


export default props => 
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/calendar' component={Calendar} />
        <Redirect from='*' to='/' />
    </Switch>