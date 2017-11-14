import React from 'react'
import { ScrollView,  Image, View ,Alert} from 'react-native'
import {Container, Header, Title, Content, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, Button, Text as NBText } from 'native-base'
import { Images } from '../Themes'
// Styles
import styles from './Styles/FrameStyle'
import CardTemplate from '../Components/CardTemplate'

import ChartsStyle from '../Components/Styles/ChartsStyle'
import BarChartScreen from '../Components/charts/BarChartScreen'
import AxisLineChartScreen from '../Components/charts/AxisLineChartScreen'
import CandleStickChartScreen from '../Components/charts/CandleStickChartScreen'
import HorizontalBarChartScreen from '../Components/charts/HorizontalBarChartScreen'
import LineChartScreen from '../Components/charts/LineChartScreen'
import PieChartScreen from '../Components/charts/PieChartScreen'
import RadarChartScreen from '../Components/charts/RadarChartScreen'
import ScatterChartScreen from '../Components/charts/ScatterChartScreen'
import StackedBarChartScreen from '../Components/charts/StackedBarChartScreen'
import TimeSeriesLineChartScreen from '../Components/charts/TimeSeriesLineChartScreen'
import ZeroLineChartScreen from '../Components/charts/ZeroLineChartScreen'


export default class Idea extends React.Component {
  state={
    stars : 1926,

  };
  _onPressButton(Object) {
    Alert.alert(
    'Alert Title: '+ Object.Title,
    'My Alert Msg: ' + Object.Message,
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => Alert.alert('OK Pressed')},
    ],
    { cancelable: false }
  );
  }

  render () {
       let Starss=this.state.stars;
    return (
      <View style={styles.mainContainer}>

         <Content padder>
         <Card style={{flex: 0}}>
             <CardItem style={{backgroundColor:'#1111'}}>
                 <Image style={{ resizeMode: 'cover', height: 300,flex: 1 }} source={{uri: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'}} />
             </CardItem>
             <CardItem>
             <Left>
               <Button transparent>
                 <Icon name="logo-github" />
                 <Text>41,926 stars</Text>
               </Button>
               </Left>
               <Right style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
               <Button Style={{backgroundColor:'green'}} onPress={()=> this._onPressButton({Title:"Sup!", Message:"The MSG"})}>
                 <NBText>Button</NBText>
               </Button>
               <Button dark onPress={()=> this._onPressButton({Title:"Sup!", Message:"The MSG"})}>
                 <NBText>Button</NBText>
               </Button>
               </Right>
             </CardItem>
           </Card>
       <Card style={{flex: 0}}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'http://d.stockcharts.com/school/data/media/chart_school/overview/images/charts-3sunw-c.png'}} />
            <Body>
              <Text>NativeBase</Text>
              <Text note>April 15, 2016</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Image style={{ resizeMode: 'cover', height: 200,flex: 1 }} source={{uri: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'}} />
        </CardItem>
          <CardItem>
            <Left>
              <Button transparent   onPress={ ()=> this.setState({ stars:  Starss+1 }) } >
                <Icon name="logo-github" />
                <Text>{this.state.stars} stars</Text>
              </Button>
            </Left>
            <Right>
            <Button  dark onPress={()=> this._onPressButton({Title:"WhatSup!", Message:"The MSG"})}>
              <NBText>Button</NBText>
            </Button>
            </Right>
          </CardItem>
        </Card>
        <Card style={{flex: 0}}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'http://d.stockcharts.com/school/data/media/chart_school/overview/images/charts-3sunw-c.png'}} />
            <Body>
              <Text>NativeBase</Text>
              <Text note>April 15, 2016</Text>
            </Body>
          </Left>
        </CardItem>
           <CardItem>
             <Image style={{ resizeMode: 'cover', height: 200,flex: 1 }} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
           </CardItem>
           <CardItem>
           <Left>
             <Button transparent>
              <Icon name="logo-github" />
              <Text>41,926 stars</Text>
             </Button>
           </Left>
           <Right>
             <Button onPress={()=> this._onPressButton({Title:"Hey WhatSup!", Message:"The MSG"})}>
               <NBText>Button</NBText>
              </Button>
              </Right>
         </CardItem>
         </Card>
      </Content>

    </View>
    )
  }
}
