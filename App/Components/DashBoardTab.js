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

import Todo from '../Containers/Todo'
import Idea from '../Containers/Idea'
import ClientList from '../Containers/ClientList'
import ChartShowCase from '../Containers/ChartShowCase'

import styles from './Styles/DashBoardTabStyle'

class DashBoardTab extends Component {
  // eslint-disable-line

  render() {
    return (
      <Content >
        <Tabs  initialPage={this.props.TabNumber}>
        <Tab heading="Todo" tabStyle={{backgroundColor: 'transparent'}} textStyle={{color: '#29c9db'}} activeTabStyle={{backgroundColor: '#61d9e8',opacity:0.8}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
     <Todo/>
          </Tab>
        <Tab heading="Idea" tabStyle={{backgroundColor: 'transparent' }} textStyle={{color: '#29c9db'}} activeTabStyle={{backgroundColor: '#61d9e8',opacity:0.8}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Idea/>
          </Tab>
          <Tab heading="Charts" tabStyle={{backgroundColor: 'transparent' }} textStyle={{color: '#29c9db'}} activeTabStyle={{backgroundColor: '#61d9e8',opacity:0.8}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <ChartShowCase />
          </Tab>
          <Tab heading="Client" tabStyle={{backgroundColor: 'transparent' }} textStyle={{color: '#29c9db'}} activeTabStyle={{backgroundColor: '#61d9e8',opacity:0.8}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <ClientList />
          </Tab>
        </Tabs>
      </Content>
    );
  }
}

export default DashBoardTab;
