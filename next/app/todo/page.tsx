import { center, flex } from '../../styled-system/patterns';
import { css } from '../../styled-system/css';
import { Item } from './_component/Item';
import { createChannel, createClient } from 'nice-grpc';
import { ToDoDefinition } from '../../types/pkg/ToDo/presenter/todo';
import { BACKEND_END_POINT } from '../const/const';
import { AddItem } from './_component/AddItem';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

const fetch = async (coupleId: string) => {
  const channel = createChannel(BACKEND_END_POINT);
  const client = createClient(ToDoDefinition, channel);
  return client.getItemsByCouple({ coupleId });
};

export default async function ToDo() {
  const res = await fetch('hoge');

  return (
    <div className='flex justify-center'>
      <Card className='w-96'>
        <CardTitle className='m-3'>やりたいことリスト</CardTitle>

        <CardContent>
          {res.items.map((item) => (
            <Item
              key={item.itemId}
              id={item.itemId}
              title={item.title}
              isDone={item.isDone}
            />
          ))}
          <AddItem />
        </CardContent>
      </Card>
    </div>
  );
}
