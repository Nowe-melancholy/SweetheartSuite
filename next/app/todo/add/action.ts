'use server';

import { createClient, createChannel } from 'nice-grpc';
import { ToDoDefinition } from '../../../types/pkg/ToDo/presenter/todo';
import { BACKEND_END_POINT } from '../../const/const';
import { revalidatePath } from 'next/cache';

type AddToDoItemType = {
  title: string;
  description: string;
};

export async function addToDoItem(item: AddToDoItemType) {
  const client = createClient(ToDoDefinition, createChannel(BACKEND_END_POINT));
  await client.addItem({ coupleId: 'hoge', ...item });
  revalidatePath('/todo');
}
