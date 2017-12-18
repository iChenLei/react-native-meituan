import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

const {width} = Dimensions.get('window');

class GridItem extends Component{
    render(){
        return (
            <View style={styles.wrapper}>
                <View style={styles.textWrapper}>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.slogan}>{this.props.slogan}</Text>                    
                </View>
                <View style={styles.imageWrapper}>
                    <Image source={this.props.path} style={styles.image}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper:{
        width:(width-20)/2,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:70,
        paddingRight:5,
        paddingLeft:5,
        
    },
    textWrapper:{
        
    },
    imageWrapper:{

    },
    image:{
        width:45,
        height:45
    },
    name:{
        fontSize:15,
        color:'#FF7F00'
    },
    slogan:{
        fontSize:10,
        color:'#B4CDCD'
    }
});

export default GridItem;