export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGIN_USER';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';


// BELOW IS THE FUNCTION TO LOG IN A USER

export const loginUser = (userData) => async(dispatch) => {  
  
  const config = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  };

  const res = await fetch('http://localhost:3000/api/login', config)
  const user = await res.json();
  let token = await res.headers.get('authorization');
  if (user.data) {
    console.log("1234")
    Cookies.set('token', token.split(' ')[1], {secure: true});
    // Cookies.set('token', token);
    Cookies.set('id', user.data.id, {secure: true});
    dispatch({ type: LOGIN_USER, payload: user.data });
  } else {
    console.log('login fetch not working')
  }
};