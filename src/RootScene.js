/*
*  CopyRight (c) 2017-present , ChenLei
*  ALl rights reserved
*  Github: www.github.com/iChenLei
*  @flow        
*/

import React,{ Component} from 'react';
import {StatusBar,Image,View,StyleSheet} from 'react-native';
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';

import HomePage from './page/homepage';
import OrderPage from './page/orderpage';
import UserPage from './page/userpage';

import TabBarItem from './element/tabbarItem';

class RootScene extends Component{
     constructor(){
         super();
     }

     render(){
         return(
        <View style={styles.container}> 
            <StatusBar barStyle='light-content' />
            <Tab />
        </View> 
        );
     }
}

const styles = StyleSheet.create({
    container:{flex:1}
})

const Tab = TabNavigator({
    Home:{
        screen: HomePage,
        navigationOptions:({navigation})=>({
            tabBarLabel:'主页',
            tabBarIcon:({focused,tintColor})=>(<TabBarItem 
                    focused={focused}
                    normalImage={require('./image/tabbar/home_inactive.png')}
                    selectedImage={require('./image/tabbar/home_active.png')}
            />)
        }),
    },
    Order:{
        screen: OrderPage,
        navigationOptions:({navigation})=>({
            tabBarLabel:'订单',
            tabBarIcon:({focused,tintColor})=>(<TabBarItem 
                focused={focused}
                normalImage={require('./image/tabbar/order_inactive.png')}
                selectedImage={require('./image/tabbar/order_active.png')}
        />)
        })
    },
    User:{
        screen:UserPage,
        navigationOptions:({navigation})=>({
            tabBarLabel:'我的',
            tabBarIcon:({focused,tintColor})=>(<TabBarItem 
                focused={focused}
                normalImage={require('./image/tabbar/user_inactive.png')}
                selectedImage={require('./image/tabbar/user_active.png')}
        />)
        })
    }
},{
    tabBarComponent:TabBarBottom,
    tabBarPosition:'bottom',
    swipeEnabled:false,
    animationEnabled:true,
    lazy:true,
    tabBarOptions:{
        activeTintColor:'#000000',
        style:{backgroundColor:'#ffffff'}
    }
});

export default RootScene;