import { NextResponse } from "next/server";

export default function Home() {
  const response = new NextResponse();
  response.json({
    message: "Welcome to our API!",
    version: "1.0",
  });

  return response;
}