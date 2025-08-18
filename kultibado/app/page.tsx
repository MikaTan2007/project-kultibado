"use client";
import Image from "next/image";
import SignUpForm from "./landing/signupform";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center pt-10">
      </div>
      <div className = "pt-10">
        <SignUpForm></SignUpForm>
      </div>
    </div>
  );
}
