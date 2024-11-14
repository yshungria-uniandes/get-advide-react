import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center vh-100 justify-content-center text-center">
      <div className="card p-4 shadow" style={{ maxWidth: "500px" }}>
        <h1 className="card-title mb-4">💡 Advice of the Day</h1>
        <p className="card-text fs-4">{advice}</p>
        <button className="btn btn-primary my-3" onClick={getAdvice}>
          Get New Advice
        </button>
        <Message count={count} />
      </div>
    </div>
  );
}

function Message({ count }) {
  return (
    <p className="text-muted mt-3">
      You have read <strong>{count}</strong> pieces of advice
    </p>
  );
}
