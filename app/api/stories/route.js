import { STORIES } from "@/config/constants/stories";

export async function GET (req) {
    const { searchParams } = new URL(req.url);
    const locale = searchParams.get("locale");

    try {
        return Response.json(STORIES[locale], { status: 200 });
    } catch (err) {
        return Response.json({
            error: "Language not found",
        }, { status: 404 });
    }
};
