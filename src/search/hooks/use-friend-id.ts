import { useSearchParams } from "react-router-dom"

export const useFriendId = (): any => {
    const [search] = useSearchParams()

    return search.get('friendId') || ''
}