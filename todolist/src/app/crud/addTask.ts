'use server'
import { prisma } from "../lib/prisma"
import { revalidatePath } from "next/cache"

export async function addTask(formData: FormData) {
  const content = formData.get("content") as string
  const description = formData.get("description") as string
  
  if (!content) return

  await prisma.task.create({
    data: {
      content,
      description,
      isCompleted: false
    }
  })
  
  revalidatePath("/")
}