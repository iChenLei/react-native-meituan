//主要是iOS 11风格的标题组件  预留

import React,{ PureComponent } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions
} from 'react-native';

const {width} = Dimensions.get('window');
class Title extends PureComponent{
    render(){
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        width:width,
        paddingLeft:17,
        height:35,
        justifyContent:'center'
    },
    text:{
        fontSize:20,
        color:'#000000'
    }
})

export default Title;