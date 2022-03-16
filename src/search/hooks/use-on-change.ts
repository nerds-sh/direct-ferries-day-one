import { useCallback } from "react"
import { useSearchParams } from "react-router-dom"

export const useOnChange = () => {
    const [_, setSearch] = useSearchParams()

    return useCallback((event: any) => {
       setSearch({friendId: event.target.value}) 
    }, [setSearch])
}