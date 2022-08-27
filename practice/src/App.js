import React, { useState } from "react";
const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 },
];

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="display">
        <div>JSX is cool!</div>
      </div>
      <div className="count">
        <button onClick={() => setCount(count + 1)}>plus</button>
        <button onClick={() => setCount(count - 1)}>minus</button>
        <h3>{count}</h3>
      </div>
      <div className="array">
        <h3>User names</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <div className="hide"></div>
    </div>
  );
}

export default App;
