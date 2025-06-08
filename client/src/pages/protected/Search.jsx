import { Stack } from "@mui/material";
import ProfileBar from "../../components/Search/ProfileBar";
import SearchInput from "../../components/Search/SearchInput";
import { useSelector } from "react-redux";

const Search = () => {
    const { searchedUsers } = useSelector((state) => state.service);
    return (
        <>
        <SearchInput/>
        <Stack 
            flexDirection={'column'} 
            gap={2} 
            mb={5} 
            width={'100%'} 
            // maxWidth='750px' 
            mx={'auto'}
            >
            {searchedUsers ? (
          searchedUsers.length > 0 ? (
            searchedUsers.map((e) => {
              return <ProfileBar key={e._id} e={e} />;
            })
          ) : (
            ""
          )
        ) : (
          <Typography variant="h6" textAlign={"center"} mb={5}>
            Start searching...
          </Typography>
        )}
        </Stack>
        </>
    )
}

export default Search;