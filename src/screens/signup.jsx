import { Text, SafeAreaView, Image, TextInput, View, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

const genderOptions = [ 'Male', 'Female']

export default function Signup() {
  const [gender, setGender] = useState(null)
  return (
    <SafeAreaView style={{flex: 1 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 20}}>
        Never forget your notes!
      </Text>

      <View style={{paddingHorizontal: 16, paddingVertical: 25}}>
        <Input placeholder='Email adress' />
        <Input placeholder='Passwoard' secureTextEntry/>
        <Input placeholder='Full Name' />
        <Input placeholder='Age' />
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
      <Button title={"Signup"} customStyles={{alignSelf: 'center', marginBottom: 60}}></Button>
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