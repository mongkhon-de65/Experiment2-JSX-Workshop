// src/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem'; // 🔽 Import

function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        // 🔽 เรียกใช้ TodoItem และส่ง props ต่อไป
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          
        />
      ))}
    </ul>
  );
}

export default TodoList;