import React from 'react'
import { ScrollView,  Image, View } from 'react-native'
import {Container, Header, Title, Content, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, Button, Text as NBText } from 'native-base'
import { Images } from '../Themes'
import DashBoard from './DashBoard';
// Styles
import styles from './Styles/FrameStyle'

export default class ClientDetailContent extends React.Component {

  render () {

    return (
      <View style={styles.mainContainer}>
        <Content padder>
         <Text>Client Detail</Text>
         <Text>Name: {this.props.name}</Text>
       </Content>
      </View>
    )
  }
}
