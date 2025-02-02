import { Button, Stack } from "@mui/material";
import Input from "../../components/Home/Input";
import Post from "../../components/Home/POST";

const Home = () => {
    return (
        <>
            <Input />
            <Stack flexDirection={'column'} gap={2} mb={10}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Button size="large" 
                sx={{my:5, p:3, textDecoration:"underline", cursor: "pointer"}}
                >Load More</Button>
            </Stack>
        </>
    )
}

export default Home;