import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Protected/Home";
import Replies from "./pages/Protected/profile/Replies";
import Repost from "./pages/Protected/profile/Repost";
import ProtectedLayout from "./pages/Protected/ProtectedLayout";
import Register from "./pages/Register";
import SinglePost from "./pages/Protected/SinglePost";
import { useMyInfoQuery } from "./redux/service";
import ProfileLayout from "./pages/protected/Profile/ProfileLayout";
import Threads from "./pages/protected/Profile/Threads";
import Search from "./pages/protected/Search";

const App = () => {
  const { darkMode } = useSelector((state) => state.service);
  const { data, isError } = useMyInfoQuery();

  if (isError || !data) {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/*" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <>
      <Box minHeight={"100vh"} className={darkMode ? "mode" : ""}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ProtectedLayout />}>
              <Route exact path="" element={<Home />} />
              <Route exact path="post/:id" element={<SinglePost />} />
              <Route exact path="search" element={<Search />} />
              <Route exact path="profile" element={<ProfileLayout />}>
                <Route exact path="threads/:id" element={<Threads />} />
                <Route exact path="replies/:id" element={<Replies />} />
                <Route exact path="reposts/:id" element={<Repost />} />
              </Route>
            </Route>
            <Route exact path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
};

export default App;