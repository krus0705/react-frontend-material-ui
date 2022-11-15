import {
    ADD_USER,
    GET_ALL_USER,
    DELETE_USER,
    UPDATE_USER,
  } from "../action/types";
  import axios from "axios";
  
  export const addUser = (data) => (dispatch) => {
    console.log(data)
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:5000/api/insert", data)
        .then((res) => {
          console.log(res)
          dispatch({
            type: ADD_USER,
            payload: res,
          });
        })
      . catch((err) => console.log(err));
    })
    
  };
  
  export const getAll = () => (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:5000/api")
        .then((res) => {
          dispatch({
            type: GET_ALL_USER,
            payload: res.data,
          });
        })
      . catch((err) => console.log(err));
    })
    
  };
  
  export const deleteUser = (id) => (dispatch) => {
    axios
      .delete(`http://localhost:5000/api/users/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: DELETE_USER,
          payload: id,
        });
      })
      .catch((err) => console.log(err));
  };
  
  export const updateUser = (id, user) => (dispatch) => {
    axios
      .put(`http://localhost:5000/api/users/${id}`, user)
      .then((res) => {
        console.log("update User" + res.data);
        dispatch({
          type: UPDATE_USER,
          payload: res.payload,
        });
      })
      .catch((err) => console.log(err));
  };
  