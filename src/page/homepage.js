/*
*  @flow
*/
import React,{ Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import Category from '../component/category';
import Banner from "../component/banner";
import RedBag from "../component/redBag";
import ShoppingCart from "../component/shoppingCart";
import Header from "../component/header";
import Search from '../component/search';
import Grid from "../component/grid";
import Select from "../component/select"; 
import Store from "../component/store";

import Title from "../element/titleItem";



class HomePage extends Component{
    render(){
        return (
            <View style={styles.container}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    stickyHeaderIndices={[1,7]}>
                    <Header />
                    <Search />
                    <Banner />
                    <RedBag />  
                    <Category />
                    <Grid />
                    <Title title="附近商家" />
                    <Select />
                    <Store />                 
                </ScrollView>
                <ShoppingCart />
            </View>    
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:Dimensions.get('window').width
    }
}) 

export default HomePage;