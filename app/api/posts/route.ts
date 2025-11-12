import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
    const { data } = await supabase
    .from('posts')
    .select('*')
    .order ('publish_at', { ascending: false });
    return Response.json(data);
}

export async function POST(request: Request) {
    const { title, content, image_url, status, publish_at} = await request.json();
    const { data } = await supabase
    .from('posts')
    .insert({ title, content, image_url, status, publish_at });
    return Response.json(data);
}

export async function PUT(request: Request) {
    const { id, title, content, image_url } = await request.json();
    const { data } = await supabase
    .from('posts')
    .update({ title, content, image_url })
    .eq('id', id);
    return Response.json(data);
}

export async function DELETE(request: Request) {
    const { id } = await request.json();
    const { data } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);
    return Response.json(data);
}

