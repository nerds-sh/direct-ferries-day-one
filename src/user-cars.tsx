import { useParams } from "react-router-dom"

export const UserCars = () => {
    const {id, model} = useParams()

    return <div>
        User with id {id} has car {model}
    </div>
}