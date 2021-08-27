import React from 'react'

import {
    BrowserRouter as Router,
    Redirect,
    Switch,
} from "react-router-dom";

import LoginScreen from '../components/auth/LoginScreen'
import CalendarScreen from '../components/calendar/CalendarScreen'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {

    const isLogged = true;
    return (
        <div>
            <Router>
                <Switch>

                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={ CalendarScreen } 
                        isAutenticated={ isLogged }
                    />

                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen } 
                        isAutenticated={ isLogged } 
                    />

                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter
