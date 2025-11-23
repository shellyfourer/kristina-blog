import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(request: Request, context: { params: Promise<{ slug: string }> }) {
    const { params } = context;
    const { slug } = await params;
    console.log("SLUG RECEIVED:", slug);

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error || !data) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(data);
}