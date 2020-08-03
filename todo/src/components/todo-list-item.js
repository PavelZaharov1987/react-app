import React from 'react';

import './todo-list-item.css';

const TodoListItem = (/*props*/ { label, important = false }) => {

    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'steelblue' : 'black',
    }

    return (
        <span className="todo-list-item">
            <span 
                className="todo-list-item-label"
                style={style}>
                { /*props.label*/ label }
            </span>

            <button type="button"
                    className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
            </button>

            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>
        </span>
    );
}

export default TodoListItem;