import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createTremrSchema = z.object({
  title: z.string().max(255),
  content: z.string().min(1),
});
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createTremrSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newTremr = await prisma.tremr.create({
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return NextResponse.json(newTremr); 
}
