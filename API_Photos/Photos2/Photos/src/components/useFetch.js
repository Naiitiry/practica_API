import { useEffect,useState } from "react";

const useFetch = (imgId)=>{
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        fetch(imgId)
            .then((response)=>response.json())
            .then((data)=>setData(data))
            .catch((error)=>{
                setError(error)
            })
            .finally(()=>setLoading(false))
    },[])
    return {data,error,loading}
}
export {useFetch}