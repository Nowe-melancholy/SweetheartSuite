import { center, flex } from '../../styled-system/patterns';
import { css } from '../../styled-system/css';
import { Item } from './_component/Item';
import { createChannel, createClient } from 'nice-grpc';
import { ToDoDefinition } from '../../types/pkg/ToDo/presenter/todo';
import { BACKEND_END_POINT } from '../const/const';
import { Card } from '../_components/Card';
import { AddItem } from './_component/AddItem';

const fetch = async (coupleId: string) => {
  const channel = createChannel(BACKEND_END_POINT);
  const client = createClient(ToDoDefinition, channel);
  return client.getItemsByCouple({ coupleId });
};

export default async function ToDo() {
  const res = await fetch('hoge');

  return (
    <div className={center()}>
      <div className={css({ width: '500px' })}>
        <Card>
          <h1 className={css({ margin: '10px', fontSize: '24px' })}>
            やりたいことリスト
          </h1>
          <div className={flex({ direction: 'column' })}>
            {res.items.map((item) => (
              <Item
                key={item.itemId}
                id={item.itemId}
                title={item.title}
                isDone={item.isDone}
              />
            ))}
          </div>

          <AddItem />
        </Card>
      </div>
    </div>
  );
}
