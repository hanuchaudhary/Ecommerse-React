import React from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Button from "../components/Button";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen gap-16">
      <div className="rounded-r-full overflow-hidden hidden lg:block">
        <img
          className="object-cover h-full w-full"
          src="https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 w-full px-10 lg:px-24 md:px-56">
        <div className="mb-10">
          <Heading
            heading={"Create your account"}
            subHeading={"lets gets started with you 30 days trials!!"}
          />
        </div>
        <Input label={"Email"} placeholder={"Enter your email"} />
        <Input label={"First name"} placeholder={"Enter your firstname"} />
        <Input label={"last name"} placeholder={"Enter your lastname"} />
        <Input
          label={"password"}
          type="password"
          placeholder={"Enter your password"}
        />
        <div className="w-full text-center mt-10">
          <Button label={"Signup"} />
          <h1 className="text-sm capitalize font-semibold">
            Already have an account?{" "}
            <span className="underline cursor-pointer text-blue-600">
              Login
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;
