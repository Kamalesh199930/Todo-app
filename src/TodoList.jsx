import React, { useState } from "react";

import "./TodoList.css";
function TodoList() {
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState([]);
    const [editItemId, setEditItemId] = useState(null);

    const addItem = () => {
        if (inputValue.trim() !== "") {
            const newItem = {
                id: Date.now(),
                text: inputValue,
            };

            if (editItemId !== null) {
                setItems(
                    items.map((item) =>
                        item.id === editItemId ? newItem : item
                    )
                );
                setEditItemId(null);
            } else {
                setItems([...items, newItem]);
            }
            setInputValue("");
        }
    };

    const editItem = (id) => {
        const itemToEdit = items.find((item) => item.id === id);
        if (itemToEdit) {
            setInputValue(itemToEdit.text);
            setEditItemId(id);
        }
    };

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };
    return (
        <div className="todo-full">
            <div className="todo-list">
                <h1>CRUD EXAMPLE</h1>
            </div>
            <div className="todo-body">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter item text"
                    lass="form-control-plaintext"
                />
                <button onClick={addItem} class="btn btn-success">
                    {editItemId !== null ? "Update" : "Add"}
                </button>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.text}
                            <button
                                onClick={() => editItem(item.id)}
                                className="btn btn-danger"
                            >
                                Edit
                            </button>
                            &nbsp;
                            <button
                                onClick={() => deleteItem(item.id)}
                                class="btn btn-danger"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default TodoList;
