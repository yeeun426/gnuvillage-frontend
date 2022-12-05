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

const LogoBoo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;

function LogIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      id: data.get("id"),
      password: data.get("password"),
    });
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
