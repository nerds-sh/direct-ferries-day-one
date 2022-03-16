import { NotFound } from "../not-found";
import { PageOne } from "../page-one";
import { PageTwo } from "../page-two";
import { Search } from "../search";
import { UserCars } from "../user-cars";
import { Users } from "../users";

export const routes = [
    { path: '/search', element: Search },
    { path: '/users/:id/cars/:model', element: UserCars },
    { path: '/users/:id', element: Users },
    { path: '/page-two', element: PageTwo },
    { path: '/', element: PageOne },
    { path: '/404', element: NotFound },
]