import { Avatar, Stack, Typography, useMediaQuery } from "@mui/material";
import { IoIosMore } from "react-icons/io";
import { Menu, MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

const Comments = () => {
    const {darkMode} = useSelector((state) => state.service);
    const _700 = useMediaQuery("(min-width : 700px)");

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    }
    const handleDeleteComment = () => {}
    return (
        <>
        <Stack
        flexDirection={'row'}
        justifyContent={'space-between'}
        px={2}
        py={4}
        mx={'auto'}
        width={'90%'}
        >
            <Stack
            flexDirection={'row'}
            gap={_700 ? 2 : 1}
            >
                <Avatar src="" alt=""/>
                <Stack flexDirection={'column'}>
                    <Typography variant={'h6'} fontWeight={'bold'} fontSize={'0.9rem'}>
                        akash097_9
                    </Typography>
                    <Typography variant={'subtitle2'} fontSize={'0.9rem'}>
                        this is a comment
                    </Typography>
                </Stack>
            </Stack>
            <Stack 
            flexDirection={'row'} 
            gap={1} 
            alignItems={'center'} 
            color={darkMode ? 'white':'GrayText'} 
            fontSize={'0.9rem'}
            >
                <p>24min</p>
                <IoIosMore size={_700 ? 28 : 20} onClick={(e)=>setAnchorEl(e.currentTarget)} className="image-icon"/>                    
            </Stack>
        </Stack>
        <Menu 
        anchorEl={anchorEl} 
        open={anchorEl !== null ? true : false} 
        onClose={handleClose}
        anchorOrigin={{vertical:"bottom", horizontal:"right"}}
        transformOrigin={{vertical:"top", horizontal: "right"}}
        >
            <MenuItem onClick={handleDeleteComment}>Delete</MenuItem>
        </Menu>
        </>
    )
}
export default Comments;