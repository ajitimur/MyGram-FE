import { Home, Person, AddCircleOutline } from "@mui/icons-material";


export type ListRoutes = {
    path: string,
    name: string,
    Icon: any,
}

const listRoutes: ListRoutes[] = [
    {
        path: "/",
        name: "Home",
        Icon: Home,
    },
    {
      path: "/post",
      name: "Add Post",
      Icon: AddCircleOutline,
    },
    {
        path: "/profile",
        name: "Profile",
        Icon: Person,
    },
  ];
export default listRoutes;
