'use server'
import { prisma } from "../lib/prisma" // Zwróć uwagę na zmianę ścieżki!
import { revalidatePath } from "next/cache"

export async function addTask(formData: FormData) {
  const content = formData.get("content") as string
  
  if (!content) return

  await prisma.task.create({
    data: {
      content,
      isCompleted: false
    }
  })
  
  revalidatePath("/")
}