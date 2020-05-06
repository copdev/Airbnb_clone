import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import StarRating from 'react-native-star-rating'

const Home = (props) => {
  return (
    <View style={{ width: props.width / 2 - 30, height: props.width / 2-30, borderWidth: 0.5, borderColor: '#ddd' }}>
      <View style={{ flex: 1 }}>
        <Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, }}
          source={require('../../../assets/img1.jpg')} />
      </View>
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
        <Text style={{ fontSize: 14, color: '#b63838' }}>{props.name}</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{props.detail}</Text>
        <Text style={{ fontSize: 12 }}>{`$ ${props.price}`}</Text>
        <StarRating 
          disable={true}
          maxStars={5}
          rating={props.rating}
          starSize={10}
        />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
