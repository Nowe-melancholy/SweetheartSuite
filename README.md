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
