import baseUrl from "../Api/baseURL";

const useInsertDataWithImg = async (url,params) =>{

    const config = {
        
    headers:{"Content-type":"multipart/form-data"}    
    }
    const response = await baseUrl.post(url,params,config);
    return response.data
}

const useInsertData = async (url,params) =>{
    const response = await baseUrl.post(url,params);


    return response.data
}


export  {useInsertData,useInsertDataWithImg};