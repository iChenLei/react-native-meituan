import React,{Component} from 'react';
import {
    View
} from 'react-native';
import StoreConfig from "../mockdata/image_store";
import StoreItem from "../element/storeItem";

class Store extends Component{
    render(){
      const Stores = StoreConfig.map((data,key)=>(
            <StoreItem key={key} path={data.path}
              title={data.title} yueshou={data.yueshou}
              qisong={data.qisong} peisong={data.peisong}
              renjun={data.renjun} fenzhong={data.fenzhong}
              km={data.km} category={data.categoty}
              av1={data.av1}  av2={data.av2} av3={data.av3}/>
      ));
      return(  
            <View>
                {Stores}
                {Stores}
            </View>
        )
    }
}

export default Store;