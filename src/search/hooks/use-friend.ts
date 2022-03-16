import { friends } from "./friends"
import { useFriendId } from "./use-friend-id"

export const useFriend = () => {
    const friendId = useFriendId()
    

    return friends.find(({id}) => `${id}` === `${friendId}`) || {name: 'No such friend'}
}