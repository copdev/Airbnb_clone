import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
  Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Category from './components/explore/Category'
import Home from './components/explore/Home'

const { height, width } = Dimensions.get('window')


const Explore = () => {
 
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.explore}>
            <Icon
              name="search"
              size={30}
              style={{
                marginRight: 10,
                textAlignVertical: 'center',
              }}
            />
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder="Try New Delhi"
            />
          </View>
          
        </View>
        <ScrollView
        >
          <View style={{flex: 1, paddingTop: 20}}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                paddingHorizontal: 20,
              }}>
              What can we help you find, Varun?
            </Text>
            <View style={{height: 130, marginTop: 20}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Category
                  imageUri={require('../assets/img1.jpg')}
                  name="Home"
                />
                <Category
                  imageUri={require('../assets/img2.jpg')}
                  name="Experinces"
                />
                <Category
                  imageUri={require('../assets/img3.jpeg')}
                  name="Nature"
                />
                <Category
                  imageUri={require('../assets/img4.jpeg')}
                  name="Vegetation"
                />
              </ScrollView>
            </View>
            <View style={{marginTop: 40, paddingHorizontal: 20}}>
              <Text style={{fontSize: 24, fontWeight: '700'}}>
                Introducing Airbnb Plus
              </Text>
              <Text style={{fontWeight: '100', marginTop: 10}}>
                A new selection of homes verified for quality & comfort
              </Text>
              <View style={{width: width - 40, height: 200, marginTop: 20}}>
                <Image
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                    resizeMode: 'cover',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#ddd',
                  }}
                  source={require('../assets/img2.jpg')}
                />
              </View>
            </View>
          </View>
          <View style={{marginTop: 40}}>
            <Text
              style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
              Homes around the world
            </Text>
            <View
              style={{
                paddingHorizontal: 20,
                marginTop: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <Home
                width={width}
                name="Paris - FRANCE"
                detail="la'maison"
                price={120}
                rating={4}
              />
              <Home
                width={width}
                name="Paris - FRANCE"
                detail="la'maison"
                price={120}
                rating={4}
              />
              <Home
                width={width}
                name="Paris - FRANCE"
                detail="la'maison"
                price={120}
                rating={4}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 80,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  textInput: {
    flex: 1,
    fontWeight: '700',
    backgroundColor: '#fff'
    

  },
  explore: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 1,
    borderRadius: 5
  }
});
