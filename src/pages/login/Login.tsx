import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { LoginApi } from "./api/login.api.interface";
import { LoginApiService } from "./api/login.api.service";
import { LoginUseCase } from "./use-cases/login-use-case.interface";
import { LoginUseCaseService } from "./use-cases/login-use-case.service";

export const Login = () => {
  //los Hooks no se pueden declar en un bloque condicional
  const loginApi: LoginApi = new LoginApiService();
  const loginUseCase: LoginUseCase = new LoginUseCaseService(loginApi);

  const navigate: NavigateFunction = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };

  const getToken = async () => {
    await loginUseCase.getToken();
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Welcome to Spotify clone
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Only for educational purposes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={goToHome}>
          Login
        </Button>
      </CardActions>
    </Card>
  );
};
