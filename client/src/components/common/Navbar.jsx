import { Stack, useMediaQuery } from "@mui/material";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPostModal } from "../../redux/slice";

const Navbar = () => {
    const {darkMode} = useSelector((state) => state.service);
    const _300 = useMediaQuery("(min-width : 300px)");
    const dispatch = useDispatch();

    const handleAddPost = () => {
        dispatch(addPostModal(true));
    }
    return (
        <>
        <Stack
        flexDirection={'row'}
        maxWidth={'100%'}
        justifyContent={'space-around'}
        alignItems={'center'}
        >
            <FiArrowLeft
            size={_300 ? 32 : 24}
            className="image-icon"
            color={darkMode ? "White" : "black"}   
            />
            <Link to={'/'} className="link">
                <FiHome size={_300 ? 32 : 24} color={darkMode ? "White" : "black"}/>
            </Link>
            <Link to={'/search'} className="link">
                <IoIosSearch size={_300 ? 32 : 24} color={darkMode ? "White" : "black"}/>
            </Link>
            <TbEdit size={_300 ? 32 : 24} className="image-icon" color={darkMode ? "White" : "black"} onClick={handleAddPost}/>
            <FaRegHeart size={_300 ? 32 : 24} color={darkMode ? "White" : "black"}  />
            <Link to={'/profile/threads/1'} className="link">
                <RxAvatar size={_300 ? 32 : 24} color={darkMode ? "White" : "black"}  />
            </Link>
        </Stack>
        </>
    )
}
export default Navbar;