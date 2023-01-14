import boo from "../assets/images/dressed_standing_boo.svg";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from 'axios'; 
import React,{useState} from 'react'

const LogoBoo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;

function LogIn() {
  const [user, setUser] = useState('');
  let sessionStorage = window.sessionStorage;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios
    .post("http://114.206.145.160:3000/auth/login",{
      id: data.get("id"),
      password: data.get("password"),
    })
    .then((res) => {
      console.log(res)
      console.log(res.data)
      sessionStorage.setItem("id", data.get("id"))
      sessionStorage.setItem("token", res.data)
      // debugger
      setUser(sessionStorage.getItem("id"));
      console.log(user)

      alert("로그인 성공")

      document.location.href = 'http://localhost:3000';
      console.log(user);
    })
    .catch((error) => {
      alert(error.response.data.message)
    })

  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <LogoBoo src={boo} alt="GNUVILLAGE" />
        </Link>
        <Typography component="h1" variant="h4">
          GNUVILLAGE
        </Typography>
        <Typography component="h1" variant="h5">
          LOGIN
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            label="ID"
            name="id"
            required
            fullWidth
            autoFocus
          />
          <TextField
            margin="normal"
            label="Password"
            name="password"
            type="password"
            required
            fullWidth
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="아이디 저장"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            LOGIN
          </Button>
          <Grid container justifyContent="space-evenly">
            <Grid item>
              <Link href="#">아이디 찾기</Link>
            </Grid>
            <Grid item>
              <Link href="#">비밀번호 찾기</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default LogIn;
