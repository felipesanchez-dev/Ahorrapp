import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>register</Text>
    </View>
  )
}

export default register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})