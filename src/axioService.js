import axios from 'axios';
let userID = localStorage.getItem('userID');
let token = localStorage.getItem('accessToken')
let configs = null;
let axiosInstance = axios.create({
  headers: {'Authorization':token}
})
// axiosInstance.interceptors.request.use((config)=> {
//   console.log('configs maathiko',configs)
//   configs = config;
//   return config;
// }, (error)=> {
//   console.log('here')
//   return Promise.reject(error);
// });
axiosInstance.interceptors.response.use((response)=>{  
    return response;
  }, (error)=>{
    console.log('error',error)
    if(error.response.status === 404){
      alert('invalid user');
      return Promise.reject(error);
     }
    else if(error.response.status === 401){
      configs = error.response.config
      return axiosInstance.get('http://127.0.0.1:8848/api/users/'+userID+'/refresh').then((result)=>{
        token = result.data.newAccessToken;
        configs.headers.Authorization = token;
        return axiosInstance.request(configs); 
      }).catch(()=>{
        alert('session expired')
        return Promise.reject(error)
      })
    }
    else if (error.response.status === 422){
      alert('access token not received') 
    }
    else{
      return Promise.reject(error)
    }
  })

export default axiosInstance;