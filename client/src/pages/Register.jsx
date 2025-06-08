import {
    Button,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLoginMutation, useSigninMutation } from "../redux/service";
import Loading from "../components/common/Loading";

const Register = () => {
    const _700 = useMediaQuery("(min-width:700px)");

    const [signinUser, signinUserData] = useSigninMutation();
    const [loginUser, loginUserData] = useLoginMutation();

    const [login, setLogin] = useState(false);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const toggleLogin = () => {
        setLogin((pre) => !pre);
    };

    const handleLogin = async () => {
        const data = {
            email,
            password,
        };
        // console.log("Login Data: ", data);
        const result = await loginUser(data);
        if (result.error) {
            setErrorMessage(result.error.data.msg);
        }
    };

    const handleRegister = async () => {
        const data = {
            userName,
            email,
            password,
        };
        const result = await signinUser(data);
        if (result.error) {
            setErrorMessage(result.error.data.msg);
        }
    };
    useEffect(() => {
        if (signinUserData.isSuccess) {
            console.log(signinUserData.data);
            localStorage.setItem("userId", user._id);
        }
        if (loginUserData.isSuccess) {
            console.log(loginUserData.data);
            console.log("Login success");
            localStorage.setItem("userId", user._id);
        }
    }, [signinUserData.isSuccess, loginUserData.isSuccess]);

    if (signinUserData.isLoading || loginUserData.isLoading) {
        return (
            <Stack height={"90vh"} alignItems={"center"} justifyContent={"center"}>
                <Loading />
            </Stack>
        );
    }

    return (
        <>
            <Stack
                width={"100%"}
                height={"100vh"}
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={
                    _700
                        ? {
                            backgroundImage: 'url("/register-bg.webp")',
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 600px",
                        }
                        : null
                }
            >
                <Stack
                    flexDirection={"column"}
                    width={_700 ? "40%" : "90%"}
                    gap={2}
                    mt={_700 ? 20 : 0}
                >
                    <Typography
                        variant="h5"
                        fontSize={_700 ? "1.5rem" : "1rem"}
                        fontWeight={"bold"}
                        alignSelf={"center"}
                    >
                        {login ? " Login with email" : " Register with email"}
                    </Typography>
                    {login ? null : (
                        <TextField
                            variant="outlined"
                            placeholder="Enter your userName..."
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    )}
                    <TextField
                        variant="outlined"
                        placeholder="Enter your Email..."
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        placeholder="Enter your Password..."
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errorMessage && (
                        <Typography color="red" alignSelf="center">
                            {errorMessage}
                        </Typography>
                    )}
                    <Button
                        size="large"
                        sx={{
                            width: "100%",
                            height: 52,
                            bgcolor: "green",
                            color: "white",
                            fontSize: "1rem",
                            ":hover": {
                                bgcolor: "blue",
                                cursor: "pointer",
                            },
                        }}
                        onClick={login ? handleLogin : handleRegister}
                    >
                        {login ? "Login" : "  Sign Up"}
                    </Button>
                    <Typography
                        variant="subtitle2"
                        fontSize={_700 ? "1.3rem" : "1rem"}
                        alignSelf={"center"}
                    >
                        {login ? "Don`t have an account ?" : " Already have an account ?"}
                        <span className="login-link" onClick={toggleLogin}>
                            {" "}{login ? "Sign up" : "Login"}
                        </span>
                    </Typography>
                </Stack>
            </Stack>
        </>
    );
};

export default Register;
