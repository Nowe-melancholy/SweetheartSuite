'use server';

import { credentials } from '@grpc/grpc-js';
import { ToDoClient } from '../../../types/pkg/ToDo/presenter/todo_grpc_pb';
import { DeleteItemRequest } from '../../../types/pkg/ToDo/presenter/todo_pb';
import { revalidatePath } from 'next/cache';

export async function deleteItem(itemId: string) {
  const client = new ToDoClient('localhost:8080', credentials.createInsecure());
  const request = new DeleteItemRequest();
  request.setItemid(itemId);

  return new Promise((resolve, reject) => {
    client.deleteItem(request, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
        revalidatePath('/todo');
      }
    });
  });
}
