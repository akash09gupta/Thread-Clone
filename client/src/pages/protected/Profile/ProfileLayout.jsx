import { Avatar, Button, Stack, Typography, Chip, useMediaQuery } from "@mui/material";
import { FaInstagram } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { editProfileModal } from "../../../redux/slice";
import { useDispatch } from 'react-redux';

const ProfileLayout = () => {
    const _300 = useMediaQuery("(min-width:300px");
    const _500 = useMediaQuery("(min-width:500px");
    const _700 = useMediaQuery("(min-width:700px");
    
    const dispatch = useDispatch(); //func calling or in use selector is used to get the value
    
    const handleOpenEditModal = () => {
        dispatch(editProfileModal(true));
    }
    return (
        <>
        <Stack 
        flexDirection={'column'} 
        gap={2}
        p={2}
        m={2}
        width={_700 ? '800px' : '90%'}
        mx={'auto'}
        >
            <Stack
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            >
                <Stack flexDirection={'column'} gap={2}>
                    <Typography variant="h6" fontWeight={'bold'} fontSize={_300 ? '2rem' : '1rem'}>
                        akash097_9
                    </Typography>
                    <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
                        <Typography variant="h2" fontSize={_300 ? '1rem' : '0.8rem'}>
                            akash097_9
                        </Typography>
                        <Chip 
                        label="threads.net" 
                        size="small" 
                        sx={{fontSize: _300 ? "0.8rem" : '0.6rem'}}
                        />
                    </Stack>
                </Stack>
                <Avatar src="" alt="" sx={{ width: _300 ? 60 : 40, height: _300 ? 60 : 40}}/>
            </Stack>
            <Typography variant="subtitle2">This is bio</Typography>
            <Stack 
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            >
                <Typography variant="subtitle2" color={"gray"}>
                    50k followers
                </Typography>
                <FaInstagram size={_300 ? 40 : 24}/>
            </Stack>
        </Stack>
        <Button size="large" sx={{
            color: "black",
            width: _700 ? "800px" : "90%",
            mx: "auto",
            textAlign: "auto",
            border:"1px solid gray",
            borderRadius: "10px",
            ":hover":{
                cursor: "pointer",
            },
        }}
        onClick={handleOpenEditModal}
        >
            Edit Profile
        </Button>
        <Stack
        flexDirection={'row'}
        justifyContent={'space-evenly'}
        my={5}
        pb={2}
        borderBottom={"2px solid gray"}
        fontSize={_500 ? "1.2rem" : _300 ? '1.1rem' : '0.9rem'}
        width={_700 ? "800px" : "90%"}
        mx={'auto'}

        >
            <Link to={'/profile/threads/1'} className="link">Threads</Link>
            <Link to={'/profile/replies/1'} className="link">Replies</Link>
            <Link to={'/profile/repost/1'} className="link">Repost</Link>
        </Stack>
        <Outlet />
        </>
    )
}
export default ProfileLayout;