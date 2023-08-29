import { NextRequest, NextResponse } from "next/server";

export default function Home(req: NextRequest, res: NextResponse) {
  const authorizationHeader = req.headers.get("Authorization");
  const token = authorizationHeader?.substring(7);

  const response = new NextResponse();
  response.headers.set("Authorization", `Bearer ${token}`);

  return response;
}