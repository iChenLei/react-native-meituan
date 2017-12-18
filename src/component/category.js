import React,{ PureComponent } from "react";
import {
   View, StyleSheet,Dimensions   
} from "react-native";
import CategoryItem from "../element/categoryItem";
import CategoryConfig from "../mockdata/image_category"


class Category extends PureComponent{
    render(){
        return(
            <View style={styles.container}>
                {
                CategoryConfig.map((data,key)=>(
                    <CategoryItem key={key} img={data.path} txt={data.name_zh}/>
                ))     
                }
            </View>
        )}
}

const styles = StyleSheet.create({
     container:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        alignItems: 'flex-start',
        width: Dimensions.get('window').width
     }
});

export default Category;