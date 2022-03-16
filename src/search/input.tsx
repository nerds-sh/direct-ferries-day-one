import { useFriendId, useOnChange } from "./hooks"

export const Input = () => {
    const friendId = useFriendId()
    const onChange = useOnChange()

    return <input value={friendId} onChange={onChange} />
}