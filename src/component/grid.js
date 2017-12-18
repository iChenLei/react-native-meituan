import React,{ PureComponent } from "react";
import { 
    View,
    StyleSheet, 
    Dimensions
} from "react-native";
import ActivityConfig from '../mockdata/image_activity';
import GridItem from "../element/gridItem";

const {width,height} = Dimensions.get('window');
class Grid extends PureComponent{
    render(){
        const Activitys = ActivityConfig.map((data,key)=>(
             <GridItem key={key} path={data.path} name={data.name} slogan={data.slogan} />   
        ));
        return (
            <View style={styles.wrapper}>
                   {Activitys} 
            </View>
        )
    }
}
const styles = StyleSheet.create({
      wrapper:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        alignItems: 'flex-start',
        width:width,
        paddingLeft:10,
        paddingRight:10
      }
});

export default Grid;