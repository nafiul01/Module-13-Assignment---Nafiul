import { NextResponse } from "next/server";

export default function Home() {
  const response = new NextResponse();
  response.redirect("/redirectPage");

  return response;
}