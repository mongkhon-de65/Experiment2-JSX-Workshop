// src/TodoItem.jsx
import React, { useState } from 'react';

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) { // 🔽 รับ editTodo
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim()) {
      editTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        // 🔽 UI สำหรับโหมดแก้ไข
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleSave} // บันทึกเมื่อ focus หลุด
          onKeyPress={(e) => e.key === 'Enter' && handleSave()} // บันทึกเมื่อกด Enter
          autoFocus // focus อัตโนมัติเมื่อแสดงผล
        />
      ) : (
        // UI ปกติ
        <span onClick={() => toggleTodo(todo.id)}>
          {todo.text}
        </span>
      )}

      <div>
        {isEditing ? (
          <button onClick={handleSave} className="save-btn">บันทึก</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="edit-btn">แก้ไข</button>
        )}
        <button onClick={() => deleteTodo(todo.id)}>ลบ</button>
      </div>
    </li>
  );
}

export default TodoItem;