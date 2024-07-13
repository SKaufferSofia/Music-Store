"use client";

import { Card, Input, Button, Typography } from "@material-tailwind/react";

import "../../../app/store/page";
import React from "react";
import { validate } from "./helpers/validate";
import { IRegisterFormErrors } from "./types";

const RegisterForm = () => {
  const [regiterData, setRegiterData] = React.useState({
    name: "",
    phone: Number(),
    address: "",
    email: "",
    password: "",
  });

  const [errorData, setErrorData] = React.useState<IRegisterFormErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegiterData({ ...regiterData, [name]: value });

    setErrorData(validate({ ...regiterData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const errors = validate(regiterData);
    setErrorData(errors);

    if (Object.keys(errors).length === 0) {
      alert("Success Submit: All fields are correctly filled.");
      console.log("Success Submit");
    } else {
      alert("Error Submit: Please fill out all fields correctly.");
      console.log("Error Submit", errors);
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <div className="flex flex-col items-center">
        <Typography variant="h4" color="blue-gray">
          Register
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
      </div>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account?{" "}
        <a href="#" className="font-medium text-gray-900">
          Sign In
        </a>
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            type="text"
            name="name"
            value={regiterData.name}
            onChange={handleChange}
            size="lg"
            placeholder="Name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errorData.name && (
            <Typography color="red" className="text-sm">
              {errorData.name}
            </Typography>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Phone
          </Typography>
          <Input
            type="number"
            name="phone"
            value={regiterData.phone}
            onChange={handleChange}
            size="lg"
            placeholder="Phone"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errorData.phone && (
            <Typography color="red" className=" text-sm">
              {errorData.phone}
            </Typography>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Adress
          </Typography>
          <Input
            type="text"
            name="address"
            value={regiterData.address}
            onChange={handleChange}
            size="lg"
            placeholder="Address"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errorData.address && (
            <Typography color="red" className=" text-sm">
              {errorData.address}
            </Typography>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            type="email"
            name="email"
            value={regiterData.email}
            onChange={handleChange}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errorData.email && (
            <Typography color="red" className=" text-sm">
              {errorData.email}
            </Typography>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            name="password"
            value={regiterData.password}
            onChange={handleChange}
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errorData.password && (
            <Typography color="red" className=" text-sm">
              {errorData.password}
            </Typography>
          )}
        </div>

        <Button className="mt-6" fullWidth type="submit">
          Sign up
        </Button>
      </form>
    </Card>
  );
};

export default RegisterForm;
