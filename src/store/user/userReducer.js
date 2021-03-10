import { userActions } from "./userActions"

export class userReducer{



static inintial_state = {
 data:[],
 favData:[]


    };

// static toDelete=(t)=>{
//       // console.log('t',t)=
  
//     return  data.filter(item => item.name !== t);
    
//       // console.log('arr',arr)
//   }
  
    

    static reduce = (state=userReducer.inintial_state,action) =>{
        switch(action.type){

         case userActions.SET_DATA:{
               return{
            ...state,
            data:action.params
                    }
          }

          case userActions.DEL_DATA:{
            return{
             ...state,
            data:state.data.filter(item => item.name !== action.name)
                 }
                }

          case userActions.FAV_DATA:{
            if (state.favData.find(item => item === action.fav)===undefined){
             return{ 
            
              ...state,
                favData:[...state.favData,action.fav] 
                

                  }
                } else
              {
                alert(" already exist ! ")
              }
            }  

          default:
            return state;

        }



};


}