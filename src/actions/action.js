import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './types'

const logindetails = {
    username: "hruday@gmail.com",
    password: 'hruday123',
}
const userdetails = {
    user: [{
        "id": 1,
        "name": "test1",
        "age": "11",
        "gender": "male",
        "email": "test1@gmail.com",
        "phoneNo": "9415346313"
    },
    {
        "id": 2,
        "name": "test2",
        "age": "12",
        "gender": "male",
        "email": "test2@gmail.com",
        "phoneNo": "9415346314"
    },
    {
        "id": 3,
        "name": "test3",

        "age": "13",
        "gender": "male",
        "email": "test3@gmail.com",
        "phoneNo": "9415346315"
    }, {
        "id": 4,
        "name": "test4",
        "age": "14",
        "gender": "male",
        "email": "test4@gmail.com",
        "phoneNo": "9415346316"
    },
    {
        "id": 5,
        "name": "test5",
        "age": "15",
        "gender": "male",
        "email": "test5@gmail.com",
        "phoneNo": "9415346317"
    },
    {
        "id": 6,
        "name": "test6",
        "age": "16",
        "gender": "male",
        "email": "test6@gmail.com",
        "phoneNo": "9415346318"
    }
    ]
}

export const fetchUsers = (details ) => {

    console.log('details--------------->', details)
 
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        if (logindetails.username == details.name && logindetails.password == details.pass) {
            dispatch(fetchUsersSuccess(userdetails))   
        }
        else {
            alert("Invalid Credentials")
            dispatch(fetchUsersFailure("Error"))
        }
    }
}

export const fetchUsersRequest = () => {
    
    return {
        type: FETCH_USERS_REQUEST //on process
    }
}

export const fetchUsersSuccess = users => {

    console.log("users" ,users)
    return {
        type: FETCH_USERS_SUCCESS, //get espinse
        payload: users //
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE, /// 
        payload: error
    }
}
