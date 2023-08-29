import { useState, useEffect } from "react";
import { cookies } from "next/headers";

export default function ReadCookie() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const cookies = cookies();
    setTheme(cookies.get("theme") || "light");
  }, []);

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  );
}
Use c