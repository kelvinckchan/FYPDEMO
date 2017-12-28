import React from 'react'
import { ScrollView,  Image, View ,Alert,ListView} from 'react-native'
import {Container, Header, Title, Content, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, Button, Text as NBText } from 'native-base'
import { Images } from '../Themes'
// Styles
import styles from './Styles/FrameStyle'

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDQRru2tRRRuLTtkqTDcwtS4cxU9XXZhuI",
    authDomain: "fir-app-bab56.firebaseapp.com",
    databaseURL: "https://fir-app-bab56.firebaseio.com",
    projectId: "fir-app-bab56",
    storageBucket: "fir-app-bab56.appspot.com"
};
firebase.initializeApp(firebaseConfig);

const StatusBar = require('../Components/Database/StatusBar');
const ActionButton = require('../Components/Database/ActionButton');
const ListItem = require('../Components/Database/ListItem');
const style = require('../Components/Database/styles')

export default class ChartShowCase extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       dataSource: new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2,
       })
     };
     this.itemsRef = this.getRef().child('items');
   }

   getRef() {
     return firebase.database().ref();
   }
   listenForItems(itemsRef) {
        itemsRef.on('value', (snap) => {

          // get children as an array
          var items = [];
          snap.forEach((child) => {
            items.push({
              title: child.val().title,
              _key: child.key
            });
          });

          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(items)
          });

        });
      }

      componentDidMount() {
        this.listenForItems(this.itemsRef);
      }

         _addItem() {

             this.itemsRef.push({ title: "123123", val: 555 })
             Alert.alert(
               'Complete',
               null

             );
         }

         _renderItem(item) {

           const onPress = () => {
             Alert.alert(
               'Complete',
               null,
               [
                 {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
                 {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
               ]
             );
           };

           return (
             <ListItem item={item} onPress={onPress} />
           );
         }
  render () {
    return (
      <View style={styles.mainContainer}>
         <Content padder>
           <StatusBar title="Grocery List" />

          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderItem.bind(this)}
            enableEmptySections={true}
            style={style.listview}/>

          <ActionButton onPress={this._addItem.bind(this)} title="Add" />
      </Content>
    </View>
    )
  }
}
