import axios from "axios";
import { ADDTOCART, DELETECART, GETBOOKS, REMOVEFROMCART } from "../actionType/bookActionType";

export const getBooks = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/book/get");
    console.log(res.data); // Vérifiez ce que contient res.data

    dispatch({
      type: GETBOOKS,
      payload: {
        allbooks: res.data.allBooks, // Assurez-vous d'utiliser la clé correcte
        msg: res.data.msg,
      },
    });
  } catch (error) {
    console.log(error);
  }
};


export const addBook =(data) => async(dispatch)=>{
  
    try {
    const res=await axios.post("http://localhost:5000/book/add",data)
       dispatch(getBooks())
    } catch (error) {
     console.log(error)
    }
 }
 export const addtocart = (book) =>{

  return {
     type:ADDTOCART,
     payload:{book}
  }
} 
export const removefromcart = (id) =>{

  return {
     type:REMOVEFROMCART,
     payload:id
  }
} 
export const deletecart = () =>{

  return {
     type:DELETECART
  
  }
} 