"use client"

import { useState } from "react";
import { cookies } from "next/headers";

export default function SetCookie() {
  const [theme, setTheme] = useState("light");

  const handleClick = () => {
    cookies().set("theme", theme);
  };

  return (
    <div>
      <button onClick={handleClick}>Set Cookie</button>
      <p>Current theme: {theme}</p>
    </div>
  );
}