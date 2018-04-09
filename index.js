import {
  AppRegistry, Text , View ,StatusBar,StyleSheet ,
  TouchableOpacity, Button , Image,TextInput,ListView
        } from 'react-native';
import App from './App';
import PropTypes from 'prop-types';
import React , {Component} from "react";

var URL = "http://192.168.1.21/reactnative_demo/getdata.php"
var NhapMonHoc = require('./NhapMonHoc')

class WebserviceDemo extends Component{

constructor(props) {
     super(props);
     this.state = {
       dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
     }
   }
fetchData(){
      fetch(URL, {method: "POST"  , body:null})
      .then((response) => response.json())
      .then((responseData) => {this.setState({dataSource:this.state.dataSource.cloneWithRows(responseData)});})
      .done()
    }
componentDidMount(){
        this.fetchData();
      }
taoHang(property){
         return(
           <View style={styles.hang}>

           <View style={styles.hienthi}>
            <Text>{property.MonHoc}</Text>
           </View>

           <View style={styles.hienthi}>
            <Text>{property.HocPhi}</Text>
           </View>

           </View>
         );
       }
render(){
    return(

      <View style={styles.container}>
      <StatusBar hidden = {true}/>
      <View style={styles.danhsach}>

          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.taoHang}
          />
    </View>
    <NhapMonHoc/>
    </View>


    );
  }

// render(){
//   return(
//     <NhapMonHoc/>
//   );
// }

}





var styles = StyleSheet.create({
  container:{
    flex:1
  },
  danhsach:{
    flex:1
  },
  hang:{
    flexDirection:'column',
    flex:1,
    borderBottomWidth:1
  },
  hienthi:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:10,

  }

})


AppRegistry.registerComponent('WebserviceDemo', () => WebserviceDemo);
