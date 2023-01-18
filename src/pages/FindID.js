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
import React,{useState, useEffect} from 'react'

const LogoBoo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;

function FindID() {
    const [find, setFind] = useState(false);
    const [findId, setFindId] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let usersState = {};
        setFindId([]);

        console.log({
            name: data.get("name"),
            email: data.get("email")
        });
        axios
        .get("http://114.206.145.160:3000/users/p")
        .then((res) => {
          usersState = res.data.items;

          for(let i = 0; i < usersState.length; i++) {
            if(usersState[i]["name"] === data.get("name")
              && usersState[i]["email"] === data.get("email")) {
                setFindId(findId => [...findId, usersState[i]["userId"]]);
                setFind(true);

            }
          }
        })
        .catch((error) => {
          alert(error.response.data.message)
        })

        console.log(findId);
        console.log(find);
    };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",}}>
        <Link href="/">
          <LogoBoo src={boo} alt="GNUVILLAGE" />
        </Link>
        <Typography component="h1" variant="h4">GNUVILLAGE</Typography>
        <Typography component="h1" variant="h5">아이디 찾기</Typography>
        <div>
            아이디는 가입시 입력하신 이메일을 통해 찾을 수 있습니다.
        </div>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12}>
                <TextField margin="normal" label="이름" name="name" required fullWidth />
                </Grid>            
                
                <Grid item xs={12}>
                    <TextField margin="normal" label="이메일" name="email" required fullWidth/>
                </Grid>
            </Grid>
            {!find ?
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 4 }}>
                아이디 찾기
            </Button>
            :
            <>
                <div className="find-id-message">회원님의 아이디는<br/>{findId.map((users, index) => (<div key = {index}>"{users}"</div>))}로 등록되어 있습니다.</div>
                <Link href="/login"><Button variant="contained" fullWidth sx={{ mt: 3, mb: 2 }}>LOGIN</Button></Link>
            </>
            }
            <Grid container justifyContent="space-evenly">
            <Grid item>
              <Link href="/findPw">비밀번호 찾기</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default FindID;
