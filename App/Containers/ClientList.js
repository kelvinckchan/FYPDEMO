import React from 'react'
import { ScrollView,  Image, View, Alert } from 'react-native'
import {Container, Header, Title, Content, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, Button, Text as NBText ,List, ListItem} from 'native-base'
import { Images } from '../Themes'
// Styles
import styles from './Styles/FrameStyle'
import ClientDetail from './ClientDetail'
import { Actions as NavigationActions } from 'react-native-router-flux'


export default class ClientList extends React.Component {
  render () {

    

    return (
        <Content padder>
          <List>
            <ListItem avatar onPress={()=> {NavigationActions.clientDetail({name:'Danny Wong'})}}>
              <Left>
                <Thumbnail source={Images.launch} />
              </Left>
              <Body>
                <Text>Danny Wong</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar onPress={()=> {NavigationActions.clientDetail({name:'Kumar Pratik'})}}>
              <Left>
                <Thumbnail source={Images.launch} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar onPress={()=> {NavigationActions.clientDetail({name:'Karsic Darwin'})}}>
              <Left>
                <Thumbnail source={Images.launch} />
              </Left>
              <Body>
                <Text>Karsic Darwin</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
    )
  }
}
