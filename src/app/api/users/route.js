import connectDB from "@/lib/connectDB";

export const GET = async () => {
  const db = await connectDB();
  const users = await db.collection("users").find().toArray();

  return Response.json({
    users,
  });
};
