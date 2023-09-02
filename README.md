# SweetheartSuite
恋人とのToDoリスト、スケジュール、写真などを管理するためのアプリ

# 設計

## ToDoList
- User
  - Attributes: UserID, Name, ToDoList
  - Methods: ShareToDoList()

- ToDoList
  - Attributes: ID, ToDoItems
  - Methods: AddItem(), RemoveItem(), EditItem(), CheckItem()

- ToDoItem
  - Attributes: ID, Title, Description, IsDone
  - Methods: EditItem(), MarkAsDone()

# grpcurlの使い方

- サービス一覧
  - grpcurl -plaintext 0.0.0.0:8080 list
- 関数一覧
  - grpcurl -plaintext 0.0.0.0:8080 list SweetheartSuite.v2.ToDo
- 関数実行
  - grpcurl -plaintext -d '{\"coupleId\":\"hoge\"}' 0.0.0.0:8080 SweetheartSuite.v2.ToDo/AddList