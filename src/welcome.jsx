// src/Welcome.jsx
function Welcome() {
  return <h2>ยินดีต้อนรับสู่ Workshop ของเรา!</h2>;
}
// รับ props เป็น parameter ของฟังก์ชัน
function Welcome(props) {
  // เข้าถึงค่า props ผ่าน props.ชื่อprops
  return <h2>ยินดีต้อนรับ, {props.name}!</h2>;
}

export default Welcome;