"use client";
import Image from "next/image";
import SignUpForm from "./components/signupform";

export default function SignUpPage() {
  return (
    <div>
      <div className="flex flex-col items-center pt-10">
        <Image 
            className = "w-auto h-auto"
            src = "/images/kultibado_text.png" 
            width = {400}
            height = {400}
            alt = "logo"
            priority={true}
        />
      </div>
      <div className = "pt-10">
        <SignUpForm></SignUpForm>
      </div>
    </div>
  );
}
