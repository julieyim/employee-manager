const getRequest = async (url)=>{
   const res = await fetch(url);
   const result = await res.json();
   return result
}

const deleteRequest = async (url)=>{
   const requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };
       const res = await fetch(url, requestOptions)
       const result = await res.json()
       return result
}

const putRequest = async(url,data)=>{

   // Snippet #6
   const requestHeader = new Headers();

   requestHeader.append("Content-Type", "application/json");
   const employeeData = JSON.stringify(data);
   
 
   const requestObject = {
     method: 'PUT',
     headers: requestHeader,
     body: employeeData,
     redirect: 'follow'
   };

    
   
     const req = await fetch(url, requestObject)
     const result = await req.text()

}

const dataFetcher = {getRequest, deleteRequest, putRequest}

export default dataFetcher