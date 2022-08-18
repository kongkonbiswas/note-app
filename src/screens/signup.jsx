import { Text, SafeAreaView, Image, TextInput, View, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth()

const genderOptions = [ 'Male', 'Female']

export default function Signup() {
  const [gender, setGender] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState("")
  const [name, setName] = useState("")
  
  const signup = () => {
    // Create a new user
    createUserWithEmailAndPassword( auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User created", user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  }

  return (
    <SafeAreaView style={{flex: 1 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 20}}>
        Never forget your notes!
      </Text>

      <View style={{paddingHorizontal: 16, paddingVertical: 25}}>
        <Input placeholder='Email adress' onChangeText={(text) => setEmail(text)} />
        <Input placeholder='Password' onChangeText={(text) => setPassword(text)} secureTextEntry/>
        <Input placeholder='Full Name' onChangeText={(text) => setName(text)} />
        <Input placeholder='Age' onChangeText={(text) => setAge(text)} />
        <View style={{ marginVertical: 20 }}>
          <Text>Select Gender</Text>
        </View>
        {genderOptions.map((option) => {
          const selected = option === gender;
          return(
            <Pressable onPress={() => setGender(option)} key={option} style={styles.radioContainer}>
              <View style={[styles.outerCircle, selected && styles.selectedOuterCircle]}>
                <View style={[styles.innerCircle, selected && styles.selectedInnerCircle]}></View>
              </View>
              <Text style={styles.radioText}>{option}</Text>
            </Pressable>
          )
            
        })}
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
      <Button title={"Signup"} customStyles={{alignSelf: 'center', marginBottom: 60}}  onPress={signup}></Button>
        <Pressable>
          <Text>Already have an account? <Text style={{color: 'green', fontWeight: 'bold'}}>Sign in</Text></Text>
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
  },

  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  outerCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#cfcfcf",
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerCircle: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    borderWidth: 1,
    borderColor: "#cfcfcf",
  },
  radioText: {
    marginLeft: 10,
  },
  selectedOuterCircle: {
    // backgroundColor: "orange",
  },
  selectedInnerCircle:{
    backgroundColor: 'orange',
    borderColor: 'orange'
  },
  
})