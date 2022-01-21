import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import ListTodo from "../ListTodo";

function AddTodoForm()
{
    const [name, setName] = useState("");
    const [content, setContent] = useState("");

    const addTodoForm = async()=>
    {
        const todoList = await axios.post('https://5d36d86c86300e0014b647c7.mockapi.io/todos', { name: name, content: content})
        window.location.reload();
        return false;
    }
    return <div>
        <div className="field-input-group">
            <input placeholder="Name" type="text" className="ant-input"
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="field-input-group">
            <input placeholder="Description" type="text" className="ant-input"
                onChange={(e) => setContent(e.target.value)}
            />
        </div>
        <div className="modal-new-user-footer">
            <button onClick={() => {addTodoForm()}} className="ant-btn ant-btn-primary">
                Save
            </button>
            <button className="ant-btn" style={{marginLeft: 10}} >
                Cancel
            </button>
        </div>
    </div>


}
export default AddTodoForm;