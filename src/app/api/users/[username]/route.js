import connectDB from "@/lib/connectDB";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const user = await db
    .collection("users")
    .findOne({ username: params.username });
  if (!user) return Response.json({ success: false });
  return Response.json({
    success: true,
    user,
  });
};
