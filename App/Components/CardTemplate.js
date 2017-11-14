import React from 'react'
import { ScrollView,  Image, View ,Alert} from 'react-native'
import {Container, Header, Title, Content, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, Button, Text as NBText } from 'native-base'

// Styles
import styles from '../Containers/Styles/FrameStyle'


export default class CardTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      stars : 1926,
      showBody: false,
      buttonName: "Show Chart",
    };
  }

  _ShowChart() {

    this.setState(function(prevState, props){
          return {
            showBody: !prevState.showBody,
            buttonName: prevState.buttonName!="Show Chart"?"Show Chart":"Hide",
          }
       });
  }

  render () {

      let ShowBody = this.state.showBody ? this.props.CardBody: <View/>;
       let Starss = this.state.stars;

    return (
            <Card style={{flex: 0}}>
             <CardItem>
               <Left>
                 <Thumbnail source={{uri: 'http://d.stockcharts.com/school/data/media/chart_school/overview/images/charts-3sunw-c.png'}} />
                 <Body>
                  {this.props.CardTitle}
                 </Body>
               </Left>
             </CardItem>
             <CardItem>
                 {ShowBody}
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent onPress={()=>this.setState({stars:Starss+1})} >
                   <Icon name="logo-github" />
                   <Text>{this.state.stars} stars</Text>
                 </Button>
               </Left>
               <Right>
               <Button style={{backgroundColor:'#29c9db'}} onPress={()=> this._ShowChart()}>
                 <NBText>{this.state.buttonName}</NBText>
                </Button>
               </Right>
             </CardItem>
          </Card>
    )
  }
}
