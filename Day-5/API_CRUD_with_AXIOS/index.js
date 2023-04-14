import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';


axios.interceptors.request.use((req)=>{ 
  console.log('Axios GET','OK')

  
  return req;
},
(error)=>{
  return Promise.reject(error)
})


axios.interceptors.response.use((res)=>{ 
  if(res.status==201)
  {
  console.log('Axios POST','OK')
  }
  
  return res;
},
(error)=>{
  return Promise.reject(error)
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
