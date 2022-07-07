import { getUser as user} from "./fetchData";

export const getUser = (userId) => {
    console.log(user(userId))
}