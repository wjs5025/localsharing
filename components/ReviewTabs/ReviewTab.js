import React, {Component} from 'react';
import {TouchableHighlight , View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import NewReview from "./NewReview";


const Stack = createStackNavigator();

export default class Screen extends Component {
    render() {
       return (
          <Stack.Navigator>
             <Stack.Screen name="ReviewTab" component={ReviewTab} options={{headerShown: false}}/>
             <Stack.Screen name="NewReview" component={NewReview} options={{headerShown: false}}/>
          </Stack.Navigator>
       );
     }
}


class ReviewTab extends Component{

    state = {
        data : []
    }

    constructor(props){
    super(props);

    } 

    WritenReview() {
       console.log("WrithenReview()");
       console.log("-------------");
       this.post = firestore().collection("review-posts").get().then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
            console.log(documentSnapshot.data());
            this.setState({
             data : this.state.data.concat(documentSnapshot.data())
            });
        });
        })
        
    }

    ReceivedReview(){
       console.log("ReceiveReview()");
       console.log("-------------");

    }

    UnWritenReview(){
       console.log("UnWritenReview()");
       console.log("-------------");

    }

    render(){ // 렌더링 해서 화면에 보여줄 컨텐츠들
        return(
            <View style={style.root}>
                <View style={style.Review}>
                    <TouchableHighlight underlayColor = {'none'} onPress={()=>{this.WritenReview(this);}}>
                        <View style={{flexDirection : "row"}}>
                            <Text style={style.Writen } >| 내가 쓴 리뷰 |</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor = {'none'} onPress={()=>{this.ReceivedReview(this);}}>
                        <View style={{flexDirection : "row"}}>
                            <Text style={style.Given} > | 내가 받은 리뷰 |</Text>
                        </View>
                    </TouchableHighlight>
                    </View>

                    <TouchableHighlight underlayColor = {'none'} onPress={()=>{this.UnWritenReview(this), console.log(this.props), this.props.navigation.navigate("NewReview");}}>
                    <View style={style.Unwritten}>                        
                    <Text style={style.Unwritten}>  미작성 리뷰 {foo}  </Text>  
                    </View>
                    </TouchableHighlight>
                    
                    <FlatList // FlatList 의 기본속성, data는 this.state처럼 가변한 부분에서 가져온다.
                    data={this.state.data}
                    renderItem={this.renderItem}  // this.state가 renderItem의 매개변수로 들어간다.
                    keyExtractor={ item=> item.review_ID }
                    >
                   </FlatList>
            </View>
        );
    }//render method ..
    renderItem=({item, state})=>{
        return(
            <View style={style.List}>
                <View style={{flexDirection:'column'}}>
                    <Text style={style.itemName}>{item.title}</Text>
                    <Text style={style.itemMsg}>{item.comment}</Text>
                    <Text style={style.itemdate}>{item.date}</Text>
                    
                    
                </View>
            </View>
        );
    }


}
const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16, 
        backgroundColor: "#CF2A27"
    },
    Review:{
        flexDirection : "row",
        marginLeft : 40,
    },
   
    Writen:{
        fontFamily: 'NanumSquare_acEB',
        fontSize:18,
        marginBottom:10,
        marginRight : 20,

    },
    Given:{
        fontFamily: 'NanumSquare_acEB',
        fontSize:18,
        marginBottom:10,
        marginLeft : 20,

    },
    Unwritten:{
        fontFamily: 'NanumSquare_acEB',
        flexDirection: 'row',
        //alignItems: 'flex-end',        
        justifyContent: 'flex-end',
        fontSize:15,
        marginBottom:10,
        marginLeft : 20,
    },
    List:{
        borderWidth:4,
        borderRadius: 10, 
        resizeMode:'contain',
        marginRight:10,
        borderRadius: 0,
        marginBottom:3,
        backgroundColor: "#FFFFFF"
    },
    itemView:{
        flexDirection:'row',
        borderWidth:1.3,
        borderColor:'#353535',
        padding:7,
        borderRadius:10,
        marginBottom:7,
    },
    // 
    itemdate:{
        marginLeft:7,
        marginRight:10,
        fontFamily: 'NanumSquare_acR',
        fontSize:14,
        marginBottom:7,
    },
    itemName:{
        marginLeft:7,
        marginTop:7,
        fontFamily: 'NanumSquare_acEB',
        fontSize:18,
    },
    itemMsg:{
        marginLeft:7,
        marginTop:5,
        fontFamily: 'NanumSquare_acR',
        fontSize:15,
        flexShrink:1,
    },

});
