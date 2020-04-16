import Axios from "axios";
import Setauthtoken from '../components/utils/Setauthtoken';
//import jwt from 'jsonwebtoken';

export function login(data) {
    return dispatch => {
        return Axios.post('/api/auth', data).then(
            res => {
                const token = res.data.token
                localStorage.setItem('jwtToken', token);
                Setauthtoken(token)
               // console.log(jwt.decode(token))
            }
        );

    }
}