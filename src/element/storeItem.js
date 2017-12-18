import React,{ PureComponent } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

const {width} = Dimensions.get('window');
class StoreItem extends PureComponent{
    render(){
        return (
        <View style={styles.wrapper}>
            <View style={styles.leftWrapper}>
                <Image source={this.props.path} style={styles.image_food}/>
            </View>
            <View style={styles.rightWrapper}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.text_title}>{this.props.title}</Text>
                    <Text style={styles.text_normal}>···</Text>
                </View>
                <View style={styles.starWrapper}>
                    <View><Text style={styles.text_normal}>月售{this.props.yueshou}</Text></View>
                    <View><Text style={styles.text_normal}>{this.props.fenzhong}分钟|{this.props.km}km</Text></View>
                </View>
                <View style={styles.requireWrapper}>
                    <Text style={styles.text_normal}>起送{this.props.qisong}   |</Text>
                    <Text style={styles.text_normal}>配送{this.props.peisong}   |</Text>
                    <Text style={styles.text_normal}>人均{this.props.renjun}</Text>
                </View>
                <View style={styles.categoryWrapper}>
                    <Image style={styles.image_category} source={require('../image/tool/store_icon_gray.png')}/>
                    <Text style={styles.text_normal}>{this.props.category}</Text>
                </View>
                <View style={styles.activityWrapper}>
                    <View style={styles.activity_wrapper}><Text style={styles.text_activity}>{this.props.av1}</Text></View>
                    <View style={styles.activity_wrapper}><Text style={styles.text_activity}>{this.props.av2}</Text></View>
                    <View style={styles.activity_wrapper}><Text style={styles.text_activity}>{this.props.av3}</Text></View>
                </View>
            </View>            
        </View>)
    }
}

const styles = StyleSheet.create({
        activity_wrapper:{
            borderWidth:1,
            borderRadius:2,
            marginRight:5,
            paddingLeft:4,
            paddingRight:4,
            borderColor:'#adadad'
        },
        text_activity:{
            fontSize:10,
            color:'#ff0000',
        },
        wrapper:{
            flex:1,
            width:width,
            flexDirection:'row',
            justifyContent:'space-between'
        },
        leftWrapper:{
            width:100,
            paddingLeft:20,
            paddingTop:10
        },
        rightWrapper:{
            paddingTop:5,
            flex:1,
            paddingLeft:15,
            paddingRight:15
        },
        titleWrapper:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        },
        starWrapper:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        },
        requireWrapper:{
            flexDirection:'row',
            alignItems:'center'
        },
        categoryWrapper:{
            flexDirection:'row',
            alignItems:'center',
            marginLeft:5
        },
        activityWrapper:{
            flexDirection:'row',
            alignItems:'center',
            marginLeft:5
        },
        image_food:{
            width:75,
            height:75
        },
        image_star:{

        },
        image_category:{
            width:15,
            height:15
        },
        text_title:{
            fontSize:20,
            color:'#000000',
            marginLeft:5
        },
        text_normal:{
            fontSize:12,
            color:'#808080',
            margin:5   
        }
});

export default StoreItem;