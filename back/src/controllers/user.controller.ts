import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import {
  loginUserService,
  registerUserService,
} from "../services/user.service";
import RegisterUserDto from "../dtos/registerUser.dto";
import LoginUserDto from "../dtos/loginUser.dto";

export const registerUser = catchedController(
  async (req: Request, res: Response) => {
    const registerData: RegisterUserDto = req.body;
    const newUser = await registerUserService(registerData);
    res.status(201).send(newUser);
  }
);

export const login = catchedController(async (req: Request, res: Response) => {
  const LoginData: LoginUserDto = req.body;
  const user = await loginUserService(LoginData);
  res.status(200).send({
    login: true,
    user: user.user,
    token: user.token,
  });
});
