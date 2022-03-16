import { useFriend } from "./hooks"

export const Message = () => {
    const friend = useFriend()

    return <div>
        Hello from {friend.name}
    </div>
}