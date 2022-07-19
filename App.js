import { StyleSheet, Text, View,Image,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      
      <View style={styles.avatarContainer}>
        <View>
          <Image 
          style={{marginBottom:30, height:200,width:200,}}
          source={require('./assets/image/avatar.png')}/>
          <Text style={{width:200, fontSize:40, color:'black',textAlign:'center'}}>profile</Text>
          <Text> </Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.item}>
           <Text style={styles.label}>NAME :</Text>
           <Text  style={styles.data}>Bhart</Text>
        </View>
        <View style={styles.item}>
           <Text style={styles.label}>City :</Text>
           <Text  style={styles.data}>Banglore</Text>
        </View>
        <View style={styles.item}>
           <Text style={styles.label}>Profession :</Text>
           <Text  style={styles.data}>Web developer</Text>
        </View>
        <View style={styles.item}>
           <Text style={styles.label}>DOB :</Text>
           <Text  style={styles.data}>16.02.2000</Text>
        </View>
      </View>
    
    
    
    </SafeAreaView>
    
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ccc'
  },
  avatarContainer:{
    backgroundColor:'white',
    flex:0.4,
    justifyContent:'center', //vertical way styling/positioning
    alignItems:'center',// horizontal way styling/positioning
    borderBottomColor:'black',
     borderBottomWidth:2,
  },
  detailsContainer:{
    backgroundColor:'white',
    flex:0.6,
  },
  item:{
borderBottomWidth:1,
borderBottomColor:'black',
flex:0.25,
flexDirection:'row',
alignItems:'center',
paddingHorizontal:20,
  },
  label:{
    flex:0.6,
    color:'orange',
    fontSize:30,
  },
  data:{
    flex:0.4,
    color:'black',
    fontSize:30,
  },
  
})