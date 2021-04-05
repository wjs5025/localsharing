import React, {Component} from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
import Swiper from "react-native-web-swiper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  slideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  slide1: {
    backgroundColor: "rgba(20,20,200,0.3)"
  },
  slide2: {
    backgroundColor: "rgba(20,200,20,0.3)"
  },
  slide3: {
    backgroundColor: "rgba(200,20,20,0.3)"
  },
  slide4: {
    backgroundColor: "#903372",
  },
  slideTextTitle:{
    color : "blue",
    fontSize : 30,
  },
  slideTextSub :{
    color : "red",
  }
});

class FirstSlide extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Swiper
            index={1}
            >
            <View style={[styles.slideContainer,styles.slide1]}>
              <Text style = {[styles.slideTextTitle]}>111μ²μ?€?¨κ΅°μ?</Text>
            </View>
            <View style={[styles.slideContainer,styles.slide2]}>
              <Text>μ§?κΈλ???° ?Έ???΄λ§μ ????΄ κ°λ¨? ?€λͺν΄ ?λ¦΄κ²?!</Text>
              <Text>?Έ???΄λ§μ΄????</Text>
              <Text style = {[styles.slideTextTitle]}>{"\n"}"λ¨Ήμ ? ?μ§?λ§? λ¨Ήμ?? ?? ??? ???΄?{"\n"} ??λ¬Όμ°? κΈ°λ?? μ€μ΄κΈ°μ? μ·¨μ??? ?κ²½μ΄?"{"\n"}</Text>
              <Text>? ?»?©??€.</Text>
            </View>
            <View style={[styles.slideContainer,styles.slide3]}>
              <Text style={[styles.slideTextSub]}>κ·Έλ ?€λ©?</Text>
              <Text> "λ‘μ»¬??΄λ§?"?΄????</Text>
              <Text>{"\n"}"?΄?¬? ?Έ???΄λ§μ ?΄ μ£Όλ???΄?κ³?{"\n"} ??½κ²? μ§ν?  ? ??λ‘? ????μ£Όλ ?±"{"\n"}</Text>
              <Text>?΄?? !</Text>
            </View>
            <View style={[styles.slideContainer,styles.slide4]}>
              <View style={[styles.slideText]}>
                <Text style={[styles.slideTextTitle]}>μ§?κΈ? λ°λ‘{"\n"} ???΄λ³΄μΈ? !</Text>
                <Button title="Hello"></Button>
              </View>
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
}
  export default FirstSlide;