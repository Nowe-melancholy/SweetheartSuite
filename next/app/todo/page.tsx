import { center, flex, grid } from '../../styled-system/patterns';
import { css } from '../../styled-system/css';
import Link from 'next/link';
import { ItemComponent } from './_component/Item';
import { createChannel, createClient } from 'nice-grpc';
import { ToDoDefinition } from '../../types/pkg/ToDo/presenter/todo';
import { BACKEND_END_POINT } from '../const/const';
import { Card } from '../../components/Card';

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
          <div
            className={css({
              display: 'flex',
            })}
          >
            {res.items.map((item) => (
              <ItemComponent
                id={item.itemId}
                title={item.title}
                isDone={item.isDone}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
