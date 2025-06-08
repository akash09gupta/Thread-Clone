import { Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMyInfo, toggleColorMode, toggleMainMenu, resetMyInfo } from "../../redux/slice";
import { useLogoutMeMutation } from "../../redux/service";
import { useEffect } from "react";

const MainMenu = () => {
    const dispatch = useDispatch();
    const { anchorE1, myInfo } = useSelector(state => state.service);

    const [logoutMe, logoutMeData] = useLogoutMeMutation();

    const handleClose = () => {
        dispatch(toggleMainMenu(null));
    }
    const handleToggleTheme = () => {
        handleClose();
        dispatch(toggleColorMode());
    }
    const handleLogout = async () => {
        handleClose();
        console.log("Logging out..."); // Debugging log
        await logoutMe();
        // const response = await logoutMe();// ye maine change kiya hai ok kyu ki repo m alag tha
        console.log("Logout response:", response); // Debugging log
    }

    useEffect(() => {
        if (logoutMeData.isSuccess) {
            console.log("Logout successful, resetting user info..."); // Debugging log
            // dispatch(addMyInfo({ me: null })); // Updated to dispatch a valid object ye maine change kiya hai ok kyu ki repo m alag tha
            dispatch(resetMyInfo()); // Reset user information on logout
            console.log(logoutMeData.data);
            // window.location.reload(); // Commented out to prevent immediate reload
        }
    }, [logoutMeData.isSuccess])

    return (
        <>
            <Menu
                anchorEl={anchorE1}
                open={anchorE1 !== null ? true : false}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <MenuItem onClick={handleToggleTheme}>Toggle Theme</MenuItem>
                <Link to={`/profile/threads/${myInfo?._id}`} className="link">
                    <MenuItem>My Profile</MenuItem>
                </Link>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    )
}
export default MainMenu;
