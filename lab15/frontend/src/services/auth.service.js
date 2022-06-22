import axios from 'axios';

const API_URL = "http://localhost:8000/"

class AuthService{
    login(usuario,password){
        return axios
        .post(API_URL + "login/",{
            username:usuario,
            password:password
        }).then(res=>{
            if(res.data.access){
                console.log(JSON.stringify(res.data.access));
                localStorage.setItem('token',JSON.stringify(res.data.access))
            }
            return res.data.access;
        })
    }

    getToken(){
        return JSON.parse(localStorage.getItem('token'))
    }
}

export default new AuthService();