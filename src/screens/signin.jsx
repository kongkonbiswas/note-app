import { Text, SafeAreaView, Image, TextInput, View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

export default function Signin({navigation}) {
  return (
    <SafeAreaView style={{flex: 1 }}>
      <Image source={require("../../assets/login-image.png")}
      style={{ alignSelf: "center", height: 250, width: 400}}
      ></Image>
      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 20}}>
        Never forget your notes!
      </Text>

      <View style={{paddingHorizontal: 16, paddingVertical: 25}}>
        <Input placeholder='Email address'></Input>
        <Input placeholder='Password'secureTextEntry/>
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
      <Button title={"Login"} customStyles={{alignSelf: 'center', marginBottom: 60}}></Button>
        <Pressable onPress={() => { navigation.navigate('Signup')}}>
          <Text>Don't have an account? <Text style={{color: 'green', fontWeight: 'bold'}}>Sign up</Text></Text>
        </Pressable>
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