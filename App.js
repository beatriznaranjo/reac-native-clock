import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
//import Clock from './components/Clock';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {on: true};
  }

  render () {
    return (
      <View style={this.styles.container}>
        {this.state.on && <Clock />}
        <Button 
          title={`Turn clock ${this.state.on ? 'OFF':'ON'}`}
          onPress={() => {this.setState({on: !this.state.on})}}
        /> 
        <StatusBar style="dark"/>
      </View>
    );
  };


  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#052A38',
      alignItems: 'center',
      justifyContent: 'center',
    },
    baseText: {
      color: '#FFF'
    },
  });
};

class Clock extends Component {

  tick = 0;

  constructor(props) {
    console.log('Constructor called');
    super(props);
    this.state = {
      time: '00:00',
    };
  }

  render () {
    console.log('render was called');
    return (
      <View>
          <Text style={{fontWeight: 'bold', fontSize: 32, color: 'white'}}>
            {this.state.time}
          </Text>
        </View>
    );
  }

  componentDidMount() {
    console.log('componentDidMount called')
    this.tick = setInterval(() => {
       this.setState({
          time: new Date().toLocaleTimeString(),
       });
       console.info('tick')
    }, 1000);
  };

  componentDidUpdate() {
    console.log('componentDidUpdate Called')
  };

  componentWillUnmount() {
    console.log('componentWillUnmount Called');
    clearInterval(this.tick);
  };
};