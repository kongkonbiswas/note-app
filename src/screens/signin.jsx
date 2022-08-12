import { Text, SafeAreaView, Image } from 'react-native'
import React from 'react'

export default function Signin() {
  return (
    <SafeAreaView>
      <Image source={require("../../assets/note-taking.png")}
      style={{ alignSelf: "center", width:"100px" }}
      ></Image>
    </SafeAreaView>
  )
}