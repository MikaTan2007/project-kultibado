"use client";
import Image from "next/image";
import LoginForm from "./landing/loginform";

export default function LoginPage() {
  return (
    <div>
      <div className = "pt-10">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
