"use server";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    return NextResponse.json({message: "This is a JSON formatter app with CI?CD pielines and i am Utkarsh.", status: true}, {status: 200})
}