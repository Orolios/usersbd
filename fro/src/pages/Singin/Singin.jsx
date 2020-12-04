import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
//import { CREATE_USERS } from "../../services/api";
import Api from '../../services/api';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    //backgroundColor: #282c34;
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  // VARIAVEL GLOBAL DO FORM

  const [username, setUsername] = React.useState(""); //arrumardps
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  //const history = useHistory();
  // VERIFICA QUANDO SUBMETER O FORMULARIO
 /* async function handleSubmit(event) {
    event.preventDefault();
    // PUXA DADOS DE URL E OPTIONS DA API PARA REALIZAR A REQUISIÇÃO
    const {url, options} = CREATE_USERS({username,email,password,cpf})
    // FAZ A REQUISIÇÃO
    const response = await fetch(url,options)
    // TRATA O JSON RETORNADO PARA PADRÃO DO JS
    /*axios.post("/users/update/2", { username }).then(function (response) {
      console.log("salvo com sucesso");
  });
    const json = await response.json();
    // EXIBI RETORNO NO COSOLE
    console.log(json);
}
  // ATUALIZA OS VALORES NA VARIAVEL GLOBAL QUANDO TIVER ALTERAÇÃO

*/
function onChange({ target }) {
  // VERIFICA CAMPO NAME E ATRIBUI O VALOR A VARIAVEL GLOBAL
  switch (target.name) {
    case "username":
      setUsername(target.value);
      console.log("te");
      break;
    case "email":
      setEmail(target.value);
      break;
    case "password":
      setPassword(target.value);
      break;
    case "cpf":
      setCpf(target.value);
      break;
    default:
  }
}



 const handleSubmit = (event) =>{


     const user = {
       name: username,
       email:email,
       password:password,
       cpf:cpf,
     };

    event.preventDefault();
    Api.post('users/store', user, {'Content-Type':'application/json'})
       .then(res => {
         console.log(res);
         console.log(res.data);
       })
   }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="username"
            label="username"
            type="username"
            id="username"
            autoComplete="current-username"
            onChange={onChange}
            value={username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
            name="email"
            autoComplete="current-email"
            onChange={onChange}
            autoFocus
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChange}
            value={password}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="cpf"
            label="CPF"
            type="CPF"
            id="CPF"
            autoComplete="current-CPF"
            onChange={onChange}
            value={cpf}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
