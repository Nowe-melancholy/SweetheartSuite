'use server';

import { createClient, createChannel } from 'nice-grpc';
import { revalidatePath } from 'next/cache';
import { ToDoDefinition } from '../../../../../types/pkg/ToDo/presenter/todo';
import { BACKEND_END_POINT } from '../../../../const/const';

export async function updateItem(item: {
  itemId: string;
  title: string;
  description: string;
}) {
  const client = createClient(ToDoDefinition, createChannel(BACKEND_END_POINT));
  await client.updateItem(item);
  revalidatePath('/todo');
}
