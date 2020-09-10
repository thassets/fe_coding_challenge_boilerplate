import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

export const MetricText = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}: </Text>
      <Text>{subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  title: {
    fontWeight: 'bold'
  },
  subtitle: {

  }
})