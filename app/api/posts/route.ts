import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
    const { data } = await supabase
        .from('posts')
        .select('*')
        .eq("status", "published")
        .order ('publish_at', { ascending: false });
    return NextResponse.json(data);
}

export async function POST(request: Request) {
    const { title, content_blocks, cover_image, status, publish_at, slug} = await request.json();
    const { data } = await supabase
        .from('posts')
        .insert({title, content_blocks, cover_image, status, publish_at, slug});
    return NextResponse.json(data);
}

export async function PUT(request: Request) {
    const { post_id, title, content_blocks, cover_image, status, publish_at, slug} =
        await request.json();
    const { data } = await supabase
        .from('posts')
        .update({ title, content_blocks, cover_image, status, publish_at, slug})
        .eq('post_id', post_id);
    return NextResponse.json(data);
}

export async function DELETE(request: Request) {
    const { post_id } = await request.json();
    const { data } = await supabase
        .from('posts')
        .delete()
        .eq('post_id', post_id);
    return NextResponse.json(data);
}