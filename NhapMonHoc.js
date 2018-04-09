import {
  AppRegistry, Text , View ,StatusBar,StyleSheet ,
  TouchableOpacity, Button , Image,ListView,TextInput
        } from 'react-native';

import React , {Component} from "react";

var URL = "http://192.168.1.21/reactnative_demo/insert.php"

class NhapMonHoc extends Component{

nhapMonHoc(monhoc , hocphi){
  fetch(URL , {method:"POST" , body:JSON.stringify({MonHoc:monhoc , HocPhi:hocphi})})
  .then((response) => response.text())
  .then((responseData) => {alert("Da send thanh cong")})
  .done()
}

constructor(props){
  super(props);
  this.state={
    monhoc:'',
    hocphi:''
  }
}
	render(){
	  return(
	    <View	style={styles.container}>

				<TextInput style={styles.textInput}
        onChangeText={(text) => this.setState({monhoc: text})}
        value = {this.state.monhoc}
				placeholder = 'Nhap mon hoc'/>

				<TextInput style={styles.textInput}
        onChangeText={(text) => this.setState({hocphi: text})}
        value = {this.state.hocphi}
				placeholder = 'Nhap hoc phi'/>

        <Button
        onPress={() => {this.nhapMonHoc(this.state.monhoc, this.state.hocphi)}}
        title="SEND"
        color='blue'
        accessibilityLabel="Learn more about this purple button"
        />

			</View>
	  );
	}
}

var styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center'
	},
	textInput:{
		height:45,
		borderColor:'pink',
		borderWidth:1,

	}
})
module.exports = NhapMonHoc;
