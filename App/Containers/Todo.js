import React ,{Component}from 'react'
import { ScrollView,  Image, View, Alert,ListView,StyleSheet  } from 'react-native'
import {Form,Container,Item, Input, Label, Header, Title, Content, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, Button, Text as NBText ,List, ListItem} from 'native-base'
import { Images } from '../Themes'
// Styles
import Styles from './Styles/LoginScreenStyles'

const datas = [
  {title: 'Item1'},
  {title: 'Item2'},
];
export default class Todo extends React.Component {
  constructor(props) {
     super(props);

     const rowHasChanged = (r1, r2) => r1 !== r2
     const ds = new ListView.DataSource({rowHasChanged})
     this.state = {
       basic: true,
       listViewData: datas,
       Num:1,
       dataSource: ds.cloneWithRows(datas)
     };
   }

   deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  _onSubmit(){
    this.setState({ Num:1});
    Alert.alert("submitted");
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

  render () {

    return (
      <Container>
        <Content padder>
        <View style={{flexDirection:'row'}}>
          <Text style={{flex:6}} >Todo List: </Text>
          <Button style={{backgroundColor:'#29c9db' , flex:0 }}  onPress={()=>{this._addItem()}}>
          <Icon name='add'/>
          </Button>
          <Button style={{backgroundColor:'#29c9db' , flex:0 }}  onPress={()=>{this._deleteItem()}}>
          <Icon name='close'/>
          </Button>
        </View>
<Form >
        <ListView
         dataSource={this.state.dataSource}
         renderRow={data => this.renderRow(data)}
         />
         <Right>
           <Button style={{backgroundColor:'#29c9db' ,flex:1, marginTop: 20 }}  onPress={()=>{this._onSubmit()}}>
             <NBText>
               Submit
             </NBText>
           </Button>
         </Right>
</Form>

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
  }
});
