import React, {Component} from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ListTodo() {
    const [todo, setTodo] = useState([])
    const getTodos = async()=>
    {
        const todo = await axios.get('https://5d36d86c86300e0014b647c7.mockapi.io/todos')
        console.log(todo.data)
        setTodo(todo.data)
    }
    useEffect(() => {getTodos()}, [])
    const removeTodo = async(id) =>
    {
        const todo = await axios.delete(`https://5d36d86c86300e0014b647c7.mockapi.io/todos/${id}`)
        getTodos();
    }
    const editTodo = async(id) =>
    {
        const todo = await axios.put(`https://5d36d86c86300e0014b647c7.mockapi.io/todos/${id}`)
        getTodos();
    }
    const renderFlower = () => {
        return todo.map(todos => (
            <div>
            <div className="ant-list-items">
        <div className="ant-list-item">
          <div className="ant-list-item-meta">
            <div className="ant-list-item-meta-avatar">
            </div>
            <div className="ant-list-item-meta-content">
              <h4 className="ant-list-item-meta-title">
                <a>{todos['name']}</a>
              </h4>
              <div className="ant-list-item-meta-description">
                {todos['content']}
              </div>
            </div>
            <ul className="ant-list-item-action">
              <li>
                <a>Edit</a>
              </li>
              <li>
                <a onClick={() => {removeTodo(todos['id'])}}>Remove</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        </div>
        ))
    }
    return (
        <div>

            {renderFlower()}
        </div>
    );
}

export default ListTodo;