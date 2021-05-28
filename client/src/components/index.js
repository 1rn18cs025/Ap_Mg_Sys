import React from 'react'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './Login'
import Home from './Home'
import Error from './Error'
import Residents from './Residents'
import Flat from './Flats'
import Staff from './Staffs'
import Bill from './Bills'
import Complain from './Complains'
import Insert_Resident from './Insert_Resident'
import Delete_Resident from './Delete_Resident'
import Insert_Flat from './Insert_Flat'
import Insert_Staff from './Insert_Staff'
import Insert_Bill from './Insert_Bill'
import Insert_Compain from './Insert_Complain'
import Delete_Staff from './Delete_Staff'
 

const ReactRouterSetup = () => {
    return <Router>
                <Switch>

         <Route exact path = '/'>
            <Login/>
         </Route>
         <Route path = '/Home'>
            <Home/>
         </Route>
         <Route path = '/Residents'>
            <Residents/>
         </Route>
         <Route path = '/Flats'>
            <Flat/>
         </Route>
         <Route path = '/Staff'>
            <Staff/>
         </Route>
         <Route path = '/Bill'>
            <Bill/>
         </Route>
         <Route path = '/Complain'>
            <Complain/>
         </Route>
         <Route path = '/Insert_Resident'>
            <Insert_Resident/>
         </Route>
         <Route path = '/Delete_Resident'>
            <Delete_Resident/>
         </Route>
         <Route path = '/Insert_Flat'>
            <Insert_Flat/>
         </Route>
         <Route path = '/Insert_Staff'>
            <Insert_Staff/>
         </Route>
         <Route path = '/Insert_Bill'>
            <Insert_Bill/>
         </Route>
         <Route path = '/Insert_Complain'>
            <Insert_Compain/>
         </Route>
         <Route path = '/Delete_Staff'>
            <Delete_Staff/>
         </Route>
         <Route path = '*'>
            <Error/>
         </Route>
                </Switch>
    </Router>
}

export default ReactRouterSetup;