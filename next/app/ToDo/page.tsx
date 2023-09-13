import { grid } from '../../styled-system/patterns';

export default function ToDo() {
  return (
    <>
      <h1>やりたいことリスト</h1>
      <button>新規作成</button>
      <div className={grid({ columns: 6, backgroundColor: 'white' })}>
        <div>状態</div>
        <div>タイトル</div>
        <div>概要</div>
        <div>編集</div>
        <div>削除</div>
      </div>
    </>
  );
}
