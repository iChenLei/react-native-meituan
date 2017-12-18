import React,{Component} from 'react';
import { 
    StyleSheet,
    Dimensions,
    Image,
    View,
    Text
} from 'react-native';


const {width,height} = Dimensions.get('window');
class Search extends Component{
    render(){
        return (
            <View style={styles.wrapper}>
                <View style={styles.wihteBg}>
                    <Image source={require('../image/tool/search.png')} style={styles.searchIcon}/>
                    <Text style={styles.searchText}>沙县小吃</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'#ffd700',
        width:width,
        flex:1,
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    wihteBg:{
        height:30,
        width:width-20,
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center'
    },
    searchIcon:{
        margin:5,
        width:15,
        height:15
    },
    searchText:{
        fontSize:12
    }
});

export default Search;