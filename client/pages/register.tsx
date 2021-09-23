import Header from "../components/Header";
import { TextField, Typography, Button, Grid } from "@material-ui/core";
import React from "react";
import styles from "../styles/pages/Register.module.scss";
import Footer from "../components/Footer";

export default function Register() {
  const [username, setUsername] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <form>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <Typography variant="h5">Registrar-se</Typography>
            </Grid>
            <Grid item>
              <TextField
                required
                label="Nome"
                InputProps={{
                  disableUnderline: true,
                }}
                variant="filled"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                label="E-mail"
                InputProps={{
                  disableUnderline: true,
                }}
                variant="filled"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                label="Senha"
                InputProps={{
                  disableUnderline: true,
                }}
                variant="filled"
                type="text"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button type="submit">Confirmar</Button>
            </Grid>
          </Grid>
        </form>
      </main>
        <Footer />
    </div>
  );
}
