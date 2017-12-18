import React,{Component} from 'react';
import {
    View
} from 'react-native';
import RootScene from "./RootScene";
import Splash from "./page/splashpage";

class SplashScene extends Component{
    constructor(){
        super();
        this.state = {enterAble:false};
    }

    render(){
        if(this.state.enterAble){
            return (
                <RootScene />    
            )
        }else{
            return (
                <Splash />
            )
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState(
                {enterAble:true}
            );
        },1000)
    }
}

export default SplashScene;