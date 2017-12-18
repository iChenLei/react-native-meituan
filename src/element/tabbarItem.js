import React,{ PureComponent } from 'react';
import {
    Image
} from 'react-native';

class TabBarItem extends PureComponent{
     render(){
          let selectedImage = this.props.focused ? this.props.selectedImage : this.props.normalImage;
          return (
              <Image
                    source={selectedImage}
                    style={{tintColor:this.props.tintColor,width:28,height:28}}
              />
          );  
     }   
}

export default TabBarItem;