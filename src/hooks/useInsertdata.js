import baseUrl from "../Api/baseURL";

const useInsertDataWithImg = async (url,params) =>{

    const config={   
       headers:{"Content-Type":"multipart/form-data"}    
    }
    const response = await baseUrl.post(url,params,config);
     // console.log(response.status)
    return response
  }

const useInsertData = async (url,params) =>{
    const response = await baseUrl.post(url,params);
    return response
}


export  {useInsertData,useInsertDataWithImg};