import React,{ Component } from "react";
import {
    View,
    Image,
    StyleSheet
} from "react-native";


class ShoppingCart extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../image/shopping/cart.png')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:15,
        right:10,
        backgroundColor:'#fff',
        width:35,
        height:35,
        borderRadius:18,
        borderColor:'#CCCCCC',
        borderWidth:0.5
    },
    image:{
        width:18,
        height:18
    }
})

export default ShoppingCart;