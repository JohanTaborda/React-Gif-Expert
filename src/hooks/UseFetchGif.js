import { useState, useEffect } from "react";
import getGifs from "../helpers/getGif";

const UseFetchGif = (category) => {
    const [imgData, setImgData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImgData = async () => {
        
        const objData = await getGifs(category);
        setIsLoading(false)
        setImgData(objData);

    }

    useEffect(() => {
        getImgData();
    }, [])

    return{
        imgData,
        isLoading
    }

}

export default UseFetchGif
