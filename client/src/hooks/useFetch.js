import { useEffect, useState } from "react";
import { fetchApi } from "./fetchApi";

const useFetch = (endPoint) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchApi.get(endPoint)
            try {
                setLoading(true)
                setData(res.data.data)
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        }
        fetchData()

    }, [endPoint])
    return { data, loading, error }

}
export default useFetch