import { InputAdornment, TextField, useMediaQuery } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

const SearchInput = () => {
    const {darkMode} = useSelector((state) => state.service);
    const _700 = useMediaQuery("(min-width : 700px)");
    return (
        <>
        <TextField sx={{
            width: "90%",
            maxWidth: "750px",
            boxShadow: "5px 5px 5px gray",
            borderRadius: "15px",
            px: 2,
            py: 1,
            my: 5,
            mx: "auto",
            "& .MuiOutlinedInput-root" : {
                color: darkMode ? 'whitesmoke' : "black",
                "& fieldset" : {
                    border: "none",
                },
            }
        }}
        placeholder="search user..."
        InputProps={{
            startAdornment: (
                <InputAdornment position="start" sx={{ color: darkMode?'whitesmoke':"black" }}>
                    <FaSearch />
                </InputAdornment>
            ),
        }}
        />
        </>
    )
}
export default SearchInput;