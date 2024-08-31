import React, { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Button from "../components/Button";

const Signup = () => {
  const [state, setState] = useState("Signup");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleInputs = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const signUpHandler = async () => {
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        console.log("Token saved to localStorage:", data.token);
        window.location.replace("/");
      } else {
        console.error("Signup failed:", data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const signInHandler = async () => {
    try {
      const response = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        console.log("Token saved to localStorage:", data.token);
        window.location.replace("/");
      } else {
        console.error("Signup failed:", data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen gap-16">
      <div className="rounded-r-full overflow-hidden hidden lg:block">
        <img
          className="object-cover h-full w-full"
          src="https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Sign up banner"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 w-full px-10 lg:px-24 md:px-56">
        <div className="mb-10">
          <Heading
            heading={
              state === "Signup"
                ? "Create your account"
                : "Sign in to your account"
            }
            subHeading="Let's get started with your 30-day trial!"
          />
        </div>
        <Input
          value={formData.email}
          onChange={handleInputs}
          label="Email"
          placeholder="Enter your email"
          name="email"
        />
        {state === "Signup" && (
          <div className="w-full">
            <Input
              value={formData.firstName}
              onChange={handleInputs}
              label="First name"
              placeholder="Enter your first name"
              name="firstName"
            />
            <Input
              value={formData.lastName}
              onChange={handleInputs}
              label="Last name"
              placeholder="Enter your last name"
              name="lastName"
            />
          </div>
        )}
        <Input
          value={formData.password}
          onChange={handleInputs}
          label="Password"
          type="password"
          placeholder="Enter your password"
          name="password"
        />
        <div className="w-full text-center mt-10">
          <Button
            onClick={state === "Signup" ? signUpHandler : signInHandler}
            label={state}
          />
          <h1 className="text-sm capitalize font-semibold">
            {state === "Signup" ? (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => setState("Signin")}
                  className="underline cursor-pointer text-blue-600"
                >
                  Login
                </span>
              </>
            ) : (
              <>
                Don&apos;t have an account?{" "}
                <span
                  onClick={() => setState("Signup")}
                  className="underline cursor-pointer text-blue-600"
                >
                  Sign up
                </span>
              </>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;
