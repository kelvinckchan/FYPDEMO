import React from 'react'
import { ScrollView,  Image, View } from 'react-native'
import {Container, Header, Title, Content, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, Button, Text as NBText } from 'native-base'
import { Images } from '../Themes'
import DashBoard from './DashBoard';
// Styles
import styles from './Styles/FrameStyle'
import ClientDetailTab from '../Components/ClientDetailTab'
import { Actions as NavigationActions } from 'react-native-router-flux'

export default class ClientDetail extends React.Component {

  render () {

    return (
      <View style={styles.mainContainer}>
        <Container>
         <Header style={styles.HeaderContainer}>
           <Left>
             <Button transparent onPress={()=> {NavigationActions.dashboard({TabNumber:2})}}>
             <Icon name='ios-arrow-back-outline' />
             </Button>
           </Left>
           <Body>
             <Title>{this.props.name}</Title>
           </Body>
           <Right>
             <Button transparent onPress={()=> this.context.drawer.open()}>
             <Icon name='search'/>
             </Button>
             <Button transparent onPress={()=> this.context.drawer.open()}>
             <Icon name='options'/>
             </Button>
           </Right>
         </Header>
          <ClientDetailTab name={this.props.name}/>
       </Container>
      </View>
    )
  }
}
ClientDetail.contextTypes = {
  drawer: React.PropTypes.object
}
