// src/App.jsx
import Welcome from "./Welcome.jsx"
import Counter from "./Counter.jsx"

function App() {
  return (
    <div>
      <h1>Workshop: State & Props</h1>
      {/* ส่ง props ชื่อ name และมีค่าเป็น "นักศึกษา" */}
      <Welcome name="นักศึกษา" />
      <Welcome name="อาจารย์" />
      <Counter />
    </div>
  );
}


export default App;
