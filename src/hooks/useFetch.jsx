import {useState, useEffect} from "react"

export function useFetch(URL) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchProducts, setSearchProducts] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch(URL)
            .then(res => res.json())
            .then((json) => {
                setProducts(json)
                setSearchProducts(json)
            })
            .finally(() => setLoading(false))
    },[])

    return {products, loading, searchProducts, setSearchProducts}
}