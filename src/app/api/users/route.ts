import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

interface User {
  email: string;
  password: string;
}

let users: User[] = [];

const findUserByEmail = (email: string) =>
  users.find((user) => user.email === email);

export async function POST(req: NextRequest) {
  const { email, password, action } = await req.json();

  console.log({ email, password, action });

  if (!email || !password || !action) {
    return NextResponse.json(
      { message: "Missing email, password, or action" },
      { status: 400 }
    );
  }

  if (action === "signup") {
    if (findUserByEmail(email)) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    users.push({ email, password });
    return NextResponse.json({ message: "User created" }, { status: 200 });
  }

  if (action === "login") {
    const user = findUserByEmail(email);
    if (!user || user.password !== password) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }
    return NextResponse.json({ message: "Successful Login" }, { status: 200 });
  }

  return NextResponse.json({ message: "Invalid Action" }, { status: 400 });
}
