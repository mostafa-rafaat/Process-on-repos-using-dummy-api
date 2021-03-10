import React ,{useEffect}from 'react'
import { View, Text, Button, TouchableOpacity,FlatList, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../store/user/userActions'
import one from '../../../assets/1.jpg'
import two from '../../../assets/2.jpg'
import three from '../../../assets/3.jpg'



const HomeScreen = ({navigation}) => {

    const {data}=useSelector((state) => state.userReducer)
    const {favData}=useSelector((state) => state.userReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.getData())
        }, [])

    

    return (
        <View>
           <TouchableOpacity style={{padding:50}}
            onPress={()=>navigation.navigate('favorite')}>

            <Text style={{fontSize:30}}>
                To Favorite List 
            </Text>
            </TouchableOpacity>

            <FlatList
            data={data}
            keyExtractor={(item,index)=>`${index}`}
            renderItem={({item})=>{
                 return ( 

                        <View style={{padding:30 , justifyContent :'space-between' , flexDirection:"row"}}>
                         <Text style={{fontSize:20}}>{item.name}</Text>
                         <TouchableOpacity
                         onPress={()=>dispatch(userActions.delData(item.name))
                         }> 
                         <Image
                          style={{height:20 , width : 20}}
                          source={one}/>
                         
                             </TouchableOpacity>
                             <TouchableOpacity
                             onPress={()=>dispatch(userActions.favData(item.name))}>
                             <Image
                          style={{height:20 , width : 20}}
                          source={two}/>
                             </TouchableOpacity>
                         
                               </View>
                     )}
                    }
            
            
            
            />

            
        </View>
    )
}

export default HomeScreen

