import { Text, SafeAreaView, Image, TextInput, View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Button from '../components/Button'

export default function Signin() {
  return (
    <SafeAreaView>
      <Image source={require("../../assets/note-taking.png")}
      style={{ alignSelf: "center", height: 250, width: 400}}
      ></Image>
      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 20}}>
        Never forget your notes!
      </Text>

      <View style={{paddingHorizontal: 16, paddingVertical: 25}}>
        <TextInput placeholder='Email adress' style={styles.input}/>
        <TextInput placeholder='Passwoard' style={styles.input} secureTextEntry/>
        <Button title={"Login"} customStyles={{alignSelf: 'center', marginTop: 40}}></Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 25,
  }
})