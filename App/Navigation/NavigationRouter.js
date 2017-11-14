import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import DashBoard from '../Containers/DashBoard'
import ListviewExample from '../Containers/ListviewExample'
import CardExample from '../Containers/CardExample'
import Login from '../Containers/LoginScreen'
import ListviewGridExample from '../Containers/ListviewGridExample'

import ClientDetail from '../Containers/ClientDetail'
import DashBoardTab from '../Components/DashBoardTab'
/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
          <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene initial key='login' component={Login} title='Login' />
          <Scene key='launchScreen' component={LaunchScreen} title='LaunchScreen' />
          <Scene key='dashboard' component={DashBoard} title='DashBoard'  />
          <Scene key='listViewExample' component={ListviewExample}/>
          <Scene key='cardExample' component={CardExample}/>
          <Scene key='listviewGridExample' component={ListviewGridExample}/>
          <Scene key='clientDetail' component={ClientDetail}/>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
