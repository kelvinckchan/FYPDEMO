import React ,{Component}from 'react'
import { ScrollView,  Image, View, Alert,ListView,StyleSheet  } from 'react-native'
import {Form,Container,Item, Input, Label, Header, Title, Content, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, Button, Text as NBText ,List, ListItem} from 'native-base'
import { Images } from '../Themes'
// Styles
import Styles from './Styles/LoginScreenStyles'
import MapView from 'react-native-maps';
const datas = [
  {title: 'Item1'},
  {title: 'Item2'},
];
const Dimensions = require('Dimensions');
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO    = width / height;
const LATITUDE        = 37.78825;
const LONGITUDE       = -122.4324;
const LATITUDE_DELTA  = 0.0122;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE           = 0.01;
export default class MapShowCase extends React.Component {
  constructor(props) {
     super(props);

     const rowHasChanged = (r1, r2) => r1 !== r2
     const ds = new ListView.DataSource({rowHasChanged})
     this.state = {
       basic: true,
       listViewData: datas,
       Num:1,
       dataSource: ds.cloneWithRows(datas),
       region: {
       latitude: LATITUDE,
       longitude: LONGITUDE,
       latitudeDelta: LATITUDE_DELTA,
       longitudeDelta: LONGITUDE_DELTA
     }
   }}

   deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  _onSubmit(text){
    this.setState({ Num:1});
    Alert.alert("submitted: "+text);
  }
  _addItem(){
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})
    const newData = [...this.state.listViewData];
    newData.push({title:"Item"+(newData.length+1)});
    this.setState({ listViewData:newData, dataSource: ds.cloneWithRows(newData)});
  }
  _deleteItem(){
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})
    const newData = [...this.state.listViewData];
    newData.pop();
    this.setState({ listViewData:newData, dataSource: ds.cloneWithRows(newData)});
  }

  renderRow (data) {
    return (

      <ListItem >
        <Item floatingLabel>
        <Label>{data.title}: </Label>
          <Input/>
        </Item>
      </ListItem>

    )
  }
  componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchID);
    }
  componentDidMount() {

      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
              accuracy: position.coords.accuracy
            }
          });
        },
        (error) => alert(error.message),
        {timeout: 10000}
      );
      this.watchID = navigator.geolocation.watchPosition((position) => {
        const newRegion = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
          accuracy: position.coords.accuracy
        }
        this.setState({newRegion});
      });
    }

    getInitialState() {
     return {
       region: new MapView.AnimatedRegion({
         latitude: LATITUDE,
         longitude: LONGITUDE,
         latitudeDelta: LATITUDE_DELTA,
         longitudeDelta: LONGITUDE_DELTA,
       }),
     };
   }

  onRegionChange(region) {
    this.setState({ region });
  }
  onRegionChangeComplete(region) {
  this.setState({ region });
}https://github.com/kelvinckchan/FYPDEMO.githttps://github.com/kelvinckchan/FYPDEMO.git

  render () {

    return (
      <Container>
        <Content https://github.com/kelvinckchan/FYPDEMO.git

        <View style ={LocalStyles.mapcontainer}>

          <MapView style={LocalStyles.map}
            region={this.state.region}
            onRegionChangeCompleted={this.onRegionChange}
          />

        </View>
       </Content>
     </Container>
    )
  }
}


const LocalStyles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5
  },
  listContent: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  mapcontainer: {
    height: height*0.7,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
