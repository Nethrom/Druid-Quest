import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View, 
  Button,
  Switch,
} from 'react-native';


export default class App extends React.Component{
  state = {
    swtichValue: false
  }
  switchChange = () => {
    this.setState({swtichValue: !this.state.swtichValue});
  }
  startGame = () => {
    console.log('Start button pressed')
  }
  render () {
    return (
      <View style={styles.container}>
        <ImageBackground source={require ('./assets/ForestBG.jpg')} style={styles.bg} >
        </ImageBackground>
 
        <Button
        title="Start"
        onPress={this.startGame}
        />
        
        <Switch onValueChange={this.switchChange} value={this.state.swtichValue} />
      
      </View>
    )
  }


  

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
