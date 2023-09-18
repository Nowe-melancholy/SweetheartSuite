'use server';

import { credentials } from '@grpc/grpc-js';
import { ToDoClient } from '../../../types/pkg/ToDo/presenter/todo_grpc_pb';
import { AddItemRequest } from '../../../types/pkg/ToDo/presenter/todo_pb';
import { revalidatePath } from 'next/cache';

export type AddToDoItemType = {
  title: string;
  description: string;
};

export async function addToDoItem(item: AddToDoItemType) {
  const client = new ToDoClient('localhost:8080', credentials.createInsecure());
  const request = new AddItemRequest();
  request.setCoupleid('hoge');
  request.setTitle(item.title);
  request.setDescription(item.description);
  return new Promise((resolve, reject) => {
    client.addItem(request, (err, res) => {
      if (err) {
        reject(err);
      } else {
        revalidatePath('/todo');
        resolve(res);
      }
    });
  });
}
