import { STUDIES } from "@/config/constants/studies";

export async function GET () {
  return Response.json(STUDIES, { status: 200 });
};
