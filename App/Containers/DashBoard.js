import React from 'react'
import { ScrollView,  Image, View } from 'react-native'
import {Container, Header, Title, Content, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, Button, Text as NBText } from 'native-base'
import { Images } from '../Themes'

import DashBoardTab from '../Components/DashBoardTab'


// Styles
import styles from './Styles/FrameStyle'

export default class DashBoard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
            content: <DashBoardTab/>,
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Container>
         <Header style={styles.HeaderContainer}>
           <Left>
             <Button transparent onPress={()=> this.context.drawer.open()}>
             <Icon name='menu' />
             </Button>
           </Left>
           <Body>
             <Title>Ride Sharing</Title>
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
            <DashBoardTab TabNumber={this.props.TabNumber}/>
       </Container>
      </View>
    )
  }
}

DashBoard.contextTypes = {
  drawer: React.PropTypes.object
}
