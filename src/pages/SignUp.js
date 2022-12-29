import React,{useState} from 'react'

import boo from "../assets/images/dressed_standing_boo.svg";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from 'axios'; 

const LogoBoo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;

function SignUp() {
  const [signup, setSignup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      id: data.get("id"),
      password: data.get("password"),
      name: data.get("name"),
      stuId: data.get("stuId"),
      dept: data.get("dept"),
      email: data.get("email"),
      phone: data.get("phone"),
    });

    axios
    .post("http://203.253.76.182/users", {
      id: data.get("id"),
      password: data.get("password"),
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      department: data.get("dept"),
      message: data.get("stuId"),
    })
    .then((response) => {
      alert('회원가입 성공!');
      localStorage.setItem('token', response.data.jwt);
      console.log('User profile', response.data.userEmail);
      console.log("User token", response.data.jwt);
      console.log(response.data);
      document.location.href = 'http://localhost:3000/login';
    })
    .catch((error) => {
      alert(error.response.data.message)
      setSignup(false)
    })

  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LogoBoo src={boo} alt="GNUVILLAGE" />
        <Typography component="h1" variant="h4">
          GNUVILLAGE
        </Typography>
        <Typography component="h1" variant="h5">
          SIGN UP
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <TextField label="ID" name="id" required fullWidth autoFocus />
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  alert("아이디 중복 확인 메시지 출력");
                }}
              >
                중복 확인
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                name="password"
                type="password"
                required
                fullWidth
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password 재확인"
                name="rePassword"
                type="password"
                required
                fullWidth
                autoComplete="re-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="이름" name="name" required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="학번 (ex. 202201234)"
                name="stuId"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="전공" name="dept" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="E-mail" name="email" required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="휴대전화" name="phone" required fullWidth />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 4 }}>
            SIGN UP
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUp;
