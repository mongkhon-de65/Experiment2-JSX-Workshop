// src/TodoList.jsx

import React from 'react';

// 🔽 รับ toggleTodo เพิ่ม
function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        // 🔽 เพิ่ม className แบบมีเงื่อนไข
        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          {/* 🔽 เพิ่ม onClick และเปลี่ยน span */}
          <span onClick={() => toggleTodo(todo.id)}>
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>ลบ</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;