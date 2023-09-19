import { center, flex, grid } from '../../styled-system/patterns';
import { credentials } from '@grpc/grpc-js';
import { ToDoClient } from '../../types/pkg/ToDo/presenter/todo_grpc_pb';
import {
  GetItemsRequest,
  GetItemsResponse,
} from '../../types/pkg/ToDo/presenter/todo_pb';
import { css } from '../../styled-system/css';
import Link from 'next/link';
import { ItemComponent } from './_component/Item';

const fetch = async (coupleId: string): Promise<GetItemsResponse> => {
  const client = new ToDoClient('localhost:8080', credentials.createInsecure());
  const req = new GetItemsRequest();
  req.setCoupleid(coupleId);

  return new Promise((resolve, reject) => {
    client.getItems(req, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
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
        {res.getItemsList().map((item) => (
          <ItemComponent
            key={item.getItemid()}
            id={item.getItemid()}
            title={item.getTitle()}
            description={item.getDescription()}
            isDone={item.getIsdone()}
          />
        ))}
      </div>
    </div>
  );
}
