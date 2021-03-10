import React from 'react'
import { View, Text, Button ,FlatList} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'


const FavoriteScreen = ({navigation}) => {
    const {favData}=useSelector((state) => state.userReducer)
    console.log('favData',favData)

    return (
        <View>
          <FlatList
            data={favData}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=>{
                 return  (
                    <View style={{padding:30}}>
                        <Text style={{fontSize:20}}>
                            {item}
                        </Text>

                 </View>
                  )
            }}/>

            
        </View>
    )
}

export default FavoriteScreen
