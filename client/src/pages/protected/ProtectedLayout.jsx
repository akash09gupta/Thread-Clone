import { Stack, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom"
import Header from "../../components/common/Header";
import AddPost from "../../components/Modals/AddPost";
import MainMenu from "../../components/Menu/MainMenu";
import MyMenu from "../../components/Menu/MyMenu";
import EditProfile from "../../components/modals/EditProfile";

const ProtectedLayout = () => {
    const _700 = useMediaQuery("(min-width:700px)")
    return(
        <Stack
        maxWidth={_700 ? '800%' : '90%'}
        minWidth={'100%'}
        mx={'auto'}
        overflow={'hidden'}
        >
            <Header/>
            <AddPost/>
            <EditProfile/>
            <MainMenu/>
            <MyMenu/>
            <Outlet/>
        </Stack>
    )
};
export default ProtectedLayout;