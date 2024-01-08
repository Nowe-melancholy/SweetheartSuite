import { createChannel, createClient } from 'nice-grpc';
import { ToDoDefinition } from '../../../../types/pkg/ToDo/presenter/todo';
import { BACKEND_END_POINT } from '../../../const/const';
import { EditToDoItem } from './_component/edit';

const fetch = async (itemId: string) => {
  const channel = createChannel(BACKEND_END_POINT);
  const client = createClient(ToDoDefinition, channel);
  const res = await client.getItemsByIds({ itemIds: [itemId] });
  return res.items[0];
};

export default async function Page({
  params: { itemId },
}: {
  params: { itemId: string };
}) {
  const { title, description } = await fetch(itemId);
  return (
    <div className={'flex justify-center'}>
      <EditToDoItem itemId={itemId} title={title} description={description} />
    </div>
  );
}
