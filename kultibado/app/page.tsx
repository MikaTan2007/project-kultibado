"use client";
import Image from "next/image";
import LoginForm from "./landing/loginform";

export default function LoginPage() {
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
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
