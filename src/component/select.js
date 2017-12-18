import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';

const {width} = Dimensions.get('window');
class Select extends Component{
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.textWrapper}><Text style={styles.text}>综合排序</Text><Image source={require('../image/tool/down.png')} style={styles.image} /></View> 
                <View style={styles.textWrapper}><Text style={styles.text}>销量最高</Text></View>            
                <View style={styles.textWrapper}><Text style={styles.text}>距离最近</Text></View>            
                <View style={styles.textWrapper}><Text style={styles.text}>筛选</Text><Image source={require('../image/tool/select.png')} style={styles.image}/></View>                                       
            </View>
        )
    }
}

const styles = StyleSheet.create({
     wrapper:{
        width:width,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        height:35,
        backgroundColor:'#fff'
     },
     textWrapper:{
        flexDirection:'row',
        alignItems:'center',
     },
     text:{
        fontSize:12,
        marginRight:5   
     },
     image:{
         width:10,
         height:10
     }   
});

export default Select;