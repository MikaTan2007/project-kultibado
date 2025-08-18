"use client";
import Image from "next/image";
import LoginForm from "./landing/loginform";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center pt-10">
      </div>
      <div className = "pt-10">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
