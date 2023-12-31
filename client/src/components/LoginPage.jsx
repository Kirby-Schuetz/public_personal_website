import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { logIn } from "../API/users";
import { FormControl, TextField } from "@mui/material";
// import { useLogin } from "../context/loginContext";

export default function LogInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn, setUserId, setUserName } = useLogin();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const result = await logIn(username, password);

      if (result.success) {
        setIsLoggedIn(true);
        setUserId(result.user.user_id);
        setUserName(result.user.username);
      }

      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h1 className="pageheader">Login:</h1>
      <FormControl>
        <TextField
          id="NP-input-box"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="NP-input-box"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Sign in</button>
        <Link to="/createUser">Register here.</Link>
      </FormControl>
    </div>
  );
}
