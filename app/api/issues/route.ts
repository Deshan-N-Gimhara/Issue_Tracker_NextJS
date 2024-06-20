import { NextRequest, NextResponse } from "next/server";
import { createIssueSchema } from "./schema";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
  const body = await request.json();

  //validation with zod
  const validation = createIssueSchema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })

  //send data to db with prisma
  const response = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description
    }
  })
  return NextResponse.json(response, { status: 201 })
}
