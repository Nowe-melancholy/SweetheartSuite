import { flex, grid } from '../../styled-system/patterns';
import { css } from '../../styled-system/css';
import Link from 'next/link';
import { ItemComponent } from './_component/Item';
import { createChannel, createClient } from 'nice-grpc';
import { ToDoDefinition } from '../../types/pkg/ToDo/presenter/todo';
import { BACKEND_END_POINT } from '../const/const';

const fetch = async (coupleId: string) => {
  const channel = createChannel(BACKEND_END_POINT);
  const client = createClient(ToDoDefinition, channel);
  return client.getItemsByCouple({ coupleId });
};

export default async function ToDo() {
  const res = await fetch('hoge');

  return (
    <div
      className={flex({
        direction: 'column',
        width: '50%',
        margin: 'auto',
        padding: '1rem',
      })}
    >
      <h1>やりたいことリスト</h1>
      <Link
        href='/todo/add'
        className={css({
          color: 'white',
          width: 'fit-content',
          backgroundColor: 'orange',
          borderRadius: '100vh',
        })}
      >
        新規作成
      </Link>
      <div className={grid({ columns: 5, backgroundColor: 'white' })}>
        <div>状態</div>
        <div>タイトル</div>
        <div>概要</div>
        <div>編集</div>
        <div>削除</div>
        {res.items.map(({ itemId, title, description, isDone }) => (
          <ItemComponent
            key={itemId}
            id={itemId}
            title={title}
            description={description}
            isDone={isDone}
          />
        ))}
      </div>
    </div>
  );
}
