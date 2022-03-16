import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

const makeSearch = () => {
    const params = new URLSearchParams()
    params.set('from', 'search')

    return params.toString()
}

export const useGoHome = () => {
    const navigate = useNavigate()

    return useCallback(() => {
        navigate({pathname: '/', search: makeSearch()})
    }, [navigate])
}