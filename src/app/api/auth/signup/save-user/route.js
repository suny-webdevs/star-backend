const { default: connectDB } = require("@/lib/connectDB");
const { NextResponse } = require("next/server");

export const POST = async (request) => {
  try {
    const db = await connectDB();
    const newUser = await request.json();
    const res = await db.collection("users").insertOne(newUser);
    return NextResponse.json({
      success: true,
      message: "Saved user successfully!",
      res,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
