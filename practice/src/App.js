import React, { useEffect, useState } from "react";
import "./style.css";
const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 },
];

function Child({ setMessage }) {
  return (
    <>
      <div>Child</div>
      <button onClick={setMessage("Changed!")}>Change Parent Value</button>
    </>
  );
}
function Child2() {
  return <div>This is children content</div>;
}
function Parent({ children }) {
  return (
    <div>
      <h3>Parent Component</h3>
      {children}
    </div>
  );
}
const url = "https://jsonplaceholder.typicode.com/users/1";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [word, setWord] = useState("");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("I need to be updated from my child");
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);
  const [userData, setUserData] = useState({});
  
  const fetch = async () => {
    const resp = await fetch(url);
    const respData = await resp.json();
    setUserData(respData);
  };
  useEffect(() => {
    fetch();
  }, []);

  const calculate = () => {
    setTotal(number1 + number2);
  };

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
      <div className="hide">
        <button onClick={() => setToggle(!toggle)}>Hide Element Below</button>
        {toggle ? <div>Toggle Challenge</div> : <div></div>}
      </div>
      <div className="binding">
        <input
          type="text"
          placeholder="Enter Text"
          onChange={(e) => setWord(e.target.value)}
        />
        <p>{word}</p>
      </div>
      <div className="disableButton">
        <h3>Disable Button Challenge</h3>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button disabled={value ? false : true}>Submit</button>
      </div>
      <div className="callback">
        <h3>Update Parent State Challenge</h3>
        <div className="wrapper">
          <div>Parent</div>
          <div className="box-wrapper">{message}</div>
        </div>
        <div className="wrapper">
          <Child setMessage={setMessage} />
        </div>
      </div>
      <div className="children">
        <Parent>
          <Child2 />
        </Parent>
      </div>
      <div className="sum">
        <h2>Adding Two Numbers</h2>
        <input
          placeholder="First Number"
          type="number"
          value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
        />
        <input
          placeholder="Second Number"
          type="number"
          value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
        />

        <button onClick={calculate}>Add Two Numbers</button>
        <p>Total:{total || ""}</p>
      </div>

      <div className="fetch">
        <h2>User Data</h2>
        <p>
          <strong>Name: </strong> {userData.name}
        </p>
        <p>
          <strong>Website: </strong>
          {userData.website}
        </p>
        <p>
          <strong>Email: </strong>
          {userData.email}
        </p>
        <p>
          <strong>Phone: </strong>
          {userData.phone}
        </p>
      </div>
    </div>
  );
}

export default App;
