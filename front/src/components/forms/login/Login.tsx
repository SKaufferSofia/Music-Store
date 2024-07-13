"use client";

import React from "react";
import styles from "./login.module.css";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { ILoginFormErrors } from "./types";
import { validate } from "./helpers/validate";

const LoginForm = () => {
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const [errorData, setErrorData] = React.useState<ILoginFormErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
    setErrorData(validate({ ...loginData, [name]: value }));
  };

  const HandleSumit = (event: React.FormEvent) => {
    event.preventDefault();

    const errors = validate(loginData);
    setErrorData(errors);
    if (Object.keys(errorData).length === 0) {
      console.log("Success Submit");
    } else {
      console.log("Error Submit");
    }
  };

  return (
    <Card
      className={`${styles.colorForm} flex flex-col items-center justify-center poppins-regular relative z-10`}
      shadow={false}
    >
      <div className="flex flex-col items-center poppins-regular">
        <Typography variant="h4" color="pink" className="poppins-semibold">
          Login
        </Typography>
        <Typography color="white" className="mt-1 font-normal poppins-regular">
          Enter your details to sign up.
        </Typography>
      </div>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={HandleSumit}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="pink" className="-mb-3">
            Your Email
          </Typography>
          <Input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="pink" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <button type="submit" className="button">
          Login
        </button>
        <Typography
          color="white"
          className="mt-4 text-center font-normal poppins-light"
        >
          You don´t have an account?{" "}
          <a href="/login/register" className="font-medium text-pink-500">
            Sign up
          </a>
        </Typography>
      </form>
    </Card>
  );
};

export default LoginForm;
