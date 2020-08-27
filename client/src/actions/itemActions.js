import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEM_LOADING} from "./types";
import axios from 'axios';

export const getItems = () => (dispatch) => {
    dispatch(setItemLoading());
    axios
        .get('/api/items')
        .then(res =>
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )
};



export const setItemLoading=()=>{
    return{
        type:ITEM_LOADING,
    }
};