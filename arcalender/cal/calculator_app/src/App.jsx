import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (type) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Enter valid numbers");
      return;
    }

    let res;
    switch (type) {
      case "add": res = a + b; break;
      case "sub": res = a - b; break;
      case "mul": res = a * b; break;
      case "div": res = b !== 0 ? a / b : "Cannot divide by zero"; break;
      default: res = "";
    }

    setResult(res);
  };

  const clearAll = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "radial-gradient(circle at top, #0f172a, #020617)",
      color: "white",
      fontFamily: "Segoe UI"
    }}>

      <h1 style={{
        fontSize: "40px",
        marginBottom: "30px",
        fontWeight: "bold"
      }}>
        Arithmetic Calculator
      </h1>

      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{ ...inputStyle, marginLeft: "15px" }}
        />
      </div>

      <br />

      <div>
        <button onClick={() => calculate("add")} style={btnStyle}>Add</button>
        <button onClick={() => calculate("sub")} style={btnStyle}>Subtract</button>
        <button onClick={() => calculate("mul")} style={btnStyle}>Multiply</button>
        <button onClick={() => calculate("div")} style={btnStyle}>Divide</button>
      </div>

      <br />

      <button onClick={clearAll} style={btnStyle}>Clear</button>

      <h2 style={{
        marginTop: "40px",
        fontSize: "28px",
        fontWeight: "bold"
      }}>
        Result: {result}
      </h2>

    </div>
  );
}

// 🔥 Styles
const inputStyle = {
  padding: "12px",
  width: "220px",
  backgroundColor: "transparent",
  border: "1px solid #334155",
  color: "white",
  borderRadius: "8px",
  outline: "none"
};

const btnStyle = {
  margin: "6px",
  padding: "10px 18px",
  backgroundColor: "#1e293b",
  border: "1px solid #475569",
  color: "white",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "0.3s"
};

export default App;