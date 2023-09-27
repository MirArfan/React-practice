import { useState } from "react";
import Place from "./components/place";
import generateRandomValue from "./utils/generateRandomValue";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="max-w-md mx-auto my-20 bg-blue-50 rounded-lg p-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Todo app</h1>
        <input
          type="text"
          className="border border-gray-300 rounded-md w-full h-10 px-3"
          placeholder="Enter todo title"
          required
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const newArr = [
              ...todos,
              { id: generateRandomValue(), title: inputValue, status: "INCOMPLETE" },
            ];

            setTodos(newArr);
            setInputValue(""); // Clear the input field after adding a todo
          }}
          className="bg-cyan-600 px-4 py-2.5 rounded-md text-white"
        >
          Submit
        </button>
      </div>
      <div className="mt-6 space-y-2">
        {todos.map((todo) => (
          <div key={todo.id} className="flex justify-between">
            <div className="flex gap-2">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setTodos(
                      todos.map((el) => {
                        if (el.id === todo.id) {
                          return {
                            ...el,
                            status: e.target.checked ? "COMPLETE" : "INCOMPLETE",
                          };
                        }
                        return el;
                      })
                    );
                  }}
                />
                <p className={todo.status === "COMPLETE" ? "line-through" : ""}>
                  {todo.title}
                </p>
            </div>
            <div>
              <button onClick={function(){
                setTodos(todos.filter((el)=> el.id !==todo.id));
              }} 
              className="bg-red-500 text-white px-3 py-1 rounded-md text-xs"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {todos.length>1 && (<div>
        <button
        className="bg-red-500 text-white px-3 py-2 rounded-md text-xs w-full mt-8"
        onClick={function(){
          setTodos([]);
        }}
        >
          Delete All
        </button>
      </div>
      )}
    </div>
  );
}

export default App;
