import { Stack, Typography, useMediaQuery } from "@mui/material"
import { IoIosMore } from "react-icons/io"
import PostOne from "./Post/PostOne";
import PostTwo from "./Post/PostTwo";
import { useDispatch, useSelector } from "react-redux";
import { addPostId, toggleMyMenu } from "../../redux/slice";
import { useEffect, useState } from "react";

const Post = ({e}) => {
    const {darkMode, myInfo} = useSelector((state) => state.service);
    const _300 = useMediaQuery("(min-width : 300px)");
    const _400 = useMediaQuery("(min-width : 400px)");
    const _700 = useMediaQuery("(min-width : 700px)");

    const [isAdmin, setIsAdmin] = useState();

    const dispatch = useDispatch();

    const handleOpenMenu = (event) => {
        dispatch(addPostId(e._id))
        dispatch(toggleMyMenu(event.currentTarget));
    }

    const checkIsAdmin = ()=>{
        if(e?.admin._id === myInfo._id) {
            setIsAdmin(true);
            return;
        }
        else {
            setIsAdmin(false);
        }
    }

    useEffect(()=>{
        if(e && myInfo) {
            checkIsAdmin();
        }
    },[e, myInfo])
    
    return(
        <>
            <Stack
            flexDirection={'row'}
            justifyContent={'space-between'}
            borderBottom={'3px solid gray'}
            p={_700 ? 2 : _400 ? 1 : "5px"}
            width={_700 ? '70%' : _300 ? '90%' : '100%'}
            mx={'auto'}
            sx={{
                ":hover": {
                    cursor: 'ponter',
                    boxShadow: _700 ? '10px 10px 10px gray' : '',
                },
                transition: 'all ease-in-out 0.3sec',
            }}
            >
                <Stack
                flexDirection={'row'}
                gap={_700 ? 2 : 1}
                >
                    <PostOne e={e}/>
                    <PostTwo e={e}/>
                </Stack>
                <Stack 
                flexDirection={'row'} 
                justifyContent={'center'}
                gap={1}
                fontSize={'1rem'}
                >
                    <Typography
                    variant="caption"
                    color={darkMode ? "white":"GrayText"}
                    fontSize={'1rem'}
                    position={'relative'}
                    top={2}
                    >24h</Typography>
                    {
                        isAdmin ? (<IoIosMore size={_700 ? 28 : 20} onClick={handleOpenMenu}/>) : 
                        (<IoIosMore size={_700 ? 28 : 20}/>)
                    }
                </Stack>
            </Stack>
        </>
    )
}
export default Post;