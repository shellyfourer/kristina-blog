import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: Request) {
    const { data } = await supabase
    .from('subscribers')
    .select('email, name');
    return Response.json(data);
}

export async function POST(request: Request) {
    const { name, email } = await request.json();
    const { data } = await supabase
    .from('subscribers')
    .insert({ name, email })
    return Response.json(data);
}