import { grid } from '../../styled-system/patterns';
import { credentials } from '@grpc/grpc-js';
import { ToDoClient } from '../../types/pkg/ToDo/presenter/todo_grpc_pb';
import {
  GetItemsRequest,
  GetItemsResponse,
} from '../../types/pkg/ToDo/presenter/todo_pb';

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
  const res = await fetch('974ef869-b3b2-41f2-abcc-b9156981cd62');

  return (
    <>
      <h1>やりたいことリスト</h1>
      <button>新規作成</button>
      <div className={grid({ columns: 5, backgroundColor: 'white' })}>
        <div>状態</div>
        <div>タイトル</div>
        <div>概要</div>
        <div>編集</div>
        <div>削除</div>
        {res.getItemsList().map((item) => (
          <>
            <div>{item.getIsdone()}</div>
            <div>{item.getTitle()}</div>
            <div>{item.getDescription()}</div>
            <div>
              <button>編集</button>
            </div>
            <div>
              <button>削除</button>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
