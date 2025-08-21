// src/Counter.jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // ฟังก์ชันเพิ่มค่า
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // ฟังก์ชันลดค่า
  const handleDecrement = () => {
    setCount(count - 1);
  };

  // ใช้ useEffect เมื่อ count เปลี่ยน
  useEffect(() => {
    console.log('Effect ทำงาน!');
    document.title = `คุณกดไปแล้ว ${count} ครั้ง`;
  }, [count]);

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <h3>ตัวนับเลข (พร้อม Effect)</h3>
      <p>คุณกดไปแล้ว: {count} ครั้ง</p>
      <button onClick={handleIncrement}>เพิ่มค่า +</button>
      <button onClick={handleDecrement} style={{ marginLeft: '8px' }}>
        ลดค่า -
      </button>
    </div>
  );
}

export default Counter;
