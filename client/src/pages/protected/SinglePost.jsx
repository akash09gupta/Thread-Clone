import {Stack, TextField} from "@mui/material";
import Post from '../../components/Home/POST';
import Comments from "../../components/Home/Post/comments"
import { useState } from "react";

const SinglePost = () => {
    const [comment, setComment] = useState('')
    return (
        <>
        <Stack flexDirction='column' my={5} gap={2}>
            <Post />
            <Stack 
            flexDirction='column' 
            gap={2} 
            width={'80%'}
            mx={'auto'}
            >
                <Comments />
            </Stack>
            <TextField 
            variant="outlined"
            autoFocus
            placeholder="Comment here...."
            id="comment"
            sx={{width: '50%', mx: 'auto', my: 5, p: 1}}
            onChange={(e) => setComment(e.target.value)}
            />
        </Stack>
        </>
    )
}
export default SinglePost;