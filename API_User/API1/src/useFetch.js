//Custom Hook
import { useEffect, useState } from "react";

export function useFetch(url){

    //useState para pedir los datos de la API
    const [data,setData] = useState(null)

    //indica si carga el pedido
    const [loading,setLoading] = useState(true)

    //capturador de errores y para mostrarlo
    const [error,setError] = useState(null)

    //creamos estado de controlador de cancelado porque
    //lo creamos dentro del useEffect
    const [controller,setController] = useState(null)

    //useEffect para hacer la peticion http
    useEffect(()=>{
        //cancelar petición en los casos que sean necesarios
        const abortController = new AbortController();

        //ponemos el setController de acuedo a abortController
        setController(abortController)

        //informar que se está cargando la petición
        setLoading(true);

        //link de usuarios random
        //se pone URL para parametrizar la misma.
        fetch(url, {signal: abortController.signal})
            //devuelve una promesa y creamos lo siguiente:
            .then ((response)=>response.json())
            .then ((data)=>setData(data))

            //acá se utiliza el capturador de errores
            //y agregamos el if para ver si es un error ó
            //si el usuario lo hizo manualmente.
            .catch((error)=>{
                if (error.name==="AbortError"){
                    console.log("Request Cancelled");
                } else{
                    setError(error)
                }
            })

            //se usa finally porque permite terminar de cargar
            //el pedido a la url y cuando termina, ejecuta
            //lo que tenga dentro
            .finally(()=>setLoading(false));
        
        return () => abortController.abort();
    },[])

    const handleCancelRequest = () =>{
        if (controller){
            controller.abort();
            setError("Request cancelled")
        }
    }

    return {data, loading, error, handleCancelRequest}
}