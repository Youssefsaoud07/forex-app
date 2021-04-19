import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_REGISTER,
  USER_UPDATE,
 
  AUTH
  
} from "../constants/actionsTypes";

import axios from "axios";

export const userRegister = (newUser,router) => async (dispatch) => {
  dispatch({ type: USER_REGISTER });

  try {
    const addResult = await axios.post("http://localhost:7000/user/register", newUser);
     console.log('addResult',addResult.config)
    dispatch({ type: USER_REGISTER, payload: addResult.config.data });
    router.push('/');
    alert ("welcome sir please log in now");
  } catch (error) {
    console.log(error.data);
    router.push('/');

     

    // dispatch({ type: REGISTER_FAIL, payload: error.response.data });
    
  }
};

export const userLogin = (userLog,router) => async (dispatch) => {
  // dispatch({ type: USER_LOGIN });

  try {
    const loginResult = await axios.post("http://localhost:7000/user/login", userLog);
    

    console.log('login result',loginResult.data);
    const token = loginResult.data.token;
    const result=loginResult.data.payload;

    dispatch({ type: AUTH , data:{ result ,token  }});
    router.push('/');

    // dispatch({ type: LOGIN_SUCCESS, payload: loginResult.data });
  } catch (error) {
    // dispatch({ type: LOGIN_FAIL, payload: error.response.data });
  }
};

// export const getProfile = () => async (dispatch) => {
//   dispatch({ type: GET_PROFILE });

//   try {
//     const config = {
//       headers: {
//         Authorization: localStorage.getItem("token"),
//       },
//     };

//     const user = await axios.get("/user/currentPage", config);

//     dispatch({ type: GET_PROFILE_SUCCESS, payload: user.data });
//   } catch (error) {
//     dispatch({ type: GET_PROFILE_FAIL, payload: error.response.data });
//   }
// };
export const userUpdate = (userUp,router) => async (dispatch) => {
  dispatch({ type: USER_UPDATE});

  try {
    const update = await axios.put("http://localhost:7000/user/update", userUp);
    

    console.log('update result',update.data);
    

    
    router.push('/');

    // dispatch({ type: LOGIN_SUCCESS, payload: loginResult.data });
  } catch (error) {
    // dispatch({ type: LOGIN_FAIL, payload: error.response.data });
  }
};
