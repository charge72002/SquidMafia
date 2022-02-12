

import { Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import React, { Component } from 'react';
import { AppRegistry, Image, Dimensions, ScrollView, TouchableHighlight, SafeAreaView, TextInput, Picker, Alert } from 'react-native';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import MosseImage from './assets/humanities_map.jpg';

const imagesList = {humanities: MosseImage};
const buildingNames = {humanities: 'Humanities', cs: 'CS', memorial: 'Memorial Library'};

export default class App extends Component {
  state = {
    building: 'humanities'
  }
  changeBuilding = (building) => {
    this.setState(state => ({building: building}))
  }
 render() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Lost In Mosse
      </Text>
        <Picker
                  onValueChange={(value, index) =>
                    this.changeBuilding(value)
                  }>

                  <Picker.Item label="Mosse Humanities Building" value="humanities" />
                  <Picker.Item label="Computer Sciences" value="cs" />
                  <Picker.Item label="Memorial Library" value="memorial" />
                </Picker>
      <Card style={styles.card}>
        <Image style = {styles.image} source= {imagesList[this.state.building]}/>
        <Text style={styles.heading}>{buildingNames[this.state.building]}</Text>
      </Card>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F90B0B',
    padding: 8
  },
  title: {
    margin: 24,
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'top'
  },
  heading: {
    color: '#000000',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  card: {
    flex: 1,
    padding: 10
  },
  image: {
    
  }
  })
