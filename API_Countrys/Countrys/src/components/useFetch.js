import { useEffect,useState } from "react";

const useFetch = (url) =>{
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(null)
    const [error,setError] = useState(true)

    useEffect(()=>{
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>setData(data))
            .catch((error)=>{
                setError(error)
            })
            .finally(()=>setLoading(false))
    },[url])
    return {data,error,loading}
}
export {useFetch}