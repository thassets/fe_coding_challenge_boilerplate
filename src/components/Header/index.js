import React from 'react'
import {
  Text,
  StyleSheet,
  SafeAreaView
} from 'react-native'

export function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>TRADE HOUNDS</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowOpacity: 1,
    shadowColor: '#000'
  },
  text: {
    fontSize: 20,
    color: '#eba400',
    fontFamily: 'Oswald-Bold'
  }
})