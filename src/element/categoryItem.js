import React,{PureComponent} from "react";
import {
    Image,
    Text,
    View,
    StyleSheet,
    Dimensions
} from "react-native";



class CategoryItem extends PureComponent{
        render(){
            return (<View style={styles.container}>
                <Image source={this.props.img} style={styles.image} />
                <Text style={styles.text}>{this.props.txt}</Text>
            </View>)
        }
}

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width/5,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:5
    },
    image:{
        width:43,
        height:43,
        marginBottom:5
    },
    text:{
        fontSize:10,
        color:'#000000'
    }
});

export default CategoryItem;