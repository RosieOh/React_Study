import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange =  (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("Call the Api...")
  }, []);
  console.log("SEARCH FOR", keyword);
  return (
    <div>
      <input
       value={keyword}
       onChange={onChange} 
       type="text" 
       placeholder="Serch here..."/>
      
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;