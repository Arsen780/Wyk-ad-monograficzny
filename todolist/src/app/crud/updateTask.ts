'use server'
import { prisma } from "../lib/prisma"
import { revalidatePath } from "next/cache"

export async function toggleTaskCompletion(id: string, currentStatus: boolean) {
  await prisma.task.update({
    where: { id },
    data: { isCompleted: !currentStatus }
  })
  revalidatePath("/")
}