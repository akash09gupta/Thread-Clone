import { Stack } from "@mui/material";
import ProfileBar from "../../components/Search/ProfileBar";
import SearchInput from "../../components/Search/SearchInput";

const Search = () => {
    return (
        <>
        <SearchInput/>
        <Stack 
            flexDirection={'column'} 
            gap={2} 
            mb={5} 
            width={'90%'} 
            // maxWidth='750px' 
            mx={'auto'}
            >
            <ProfileBar/>
            <ProfileBar/>
            <ProfileBar/>
            <ProfileBar/>
        </Stack>
        </>
    )
}

export default Search;