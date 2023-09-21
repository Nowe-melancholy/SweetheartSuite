'use server';

import { createClient, createChannel } from 'nice-grpc';
import { ToDoDefinition } from '../../../types/pkg/ToDo/presenter/todo';
import { BACKEND_END_POINT } from '../../const/const';
import { revalidatePath } from 'next/cache';

export async function deleteItem(itemId: string) {
  const client = createClient(ToDoDefinition, createChannel(BACKEND_END_POINT));
  await client.deleteItem({ itemId });
  revalidatePath('/todo');
}
