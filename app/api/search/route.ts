import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q");

    if (!q || q.length < 2) {
        return NextResponse.json([]);
    }

    const { data, error } = await supabase
        .from("posts")
        .select("post_id, title, slug")
        .eq("status", "published")
        .ilike("title", `%${q}%`)
        .order("publish_at", { ascending: false })
        .limit(6);

    if (error) {
        console.error("Search error:", error);
        return NextResponse.json([], { status: 500 });
    }

    return NextResponse.json(data);
}