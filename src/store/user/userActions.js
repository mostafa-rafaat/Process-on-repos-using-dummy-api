export class userActions {

    static GET_DATA = 'GET_DATA';
    static getData = ()=> {
        return{
            type :userActions.GET_DATA, 
        };


    };
    static SET_DATA = 'SET_DATA';
    static setData = (params)=> {
        return{
            type :userActions.SET_DATA,
            params : params 
        };

    };
    static DEL_DATA = 'DEL_DATA';
    static delData = (name)=> {
        return{
            type :userActions.DEL_DATA,
            name:name
        };}

        static FAV_DATA = 'FAV_DATA';
    static favData = (fav)=> {
        return{
            type :userActions.FAV_DATA,
            fav:fav
        };
}
}