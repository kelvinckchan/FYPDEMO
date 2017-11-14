import React, { Component } from "react";

import {
  Container,
  Content,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Body,
  ScrollableTab
} from "native-base";

import ClientDetailContent from '../Containers/ClientDetailContent'
import ClientList from '../Containers/ClientList'

import styles from './Styles/DashBoardTabStyle'

class ClientDetailTab extends Component {
  // eslint-disable-line

  render() {
    return (
      <Content >
        <Tabs  initialPage={0}>
        <Tab heading="Detail" tabStyle={{backgroundColor: 'transparent'}} textStyle={{color: '#29c9db'}} activeTabStyle={{backgroundColor: '#61d9e8',opacity:0.8}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
          <ClientDetailContent name={this.props.name} />
          </Tab>
        <Tab heading="Protfolio 1" tabStyle={{backgroundColor: 'transparent' }} textStyle={{color: '#29c9db'}} activeTabStyle={{backgroundColor: '#61d9e8',opacity:0.8}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>

          </Tab>
          <Tab heading="Protfolio 2" tabStyle={{backgroundColor: 'transparent' }} textStyle={{color: '#29c9db'}} activeTabStyle={{backgroundColor: '#61d9e8',opacity:0.8}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <ClientList/>
          </Tab>
        </Tabs>
      </Content>
    );
  }
}

export default ClientDetailTab;
