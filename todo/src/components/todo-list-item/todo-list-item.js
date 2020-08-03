import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

    // constructor() {
    //     super();

    //     this.onLabelClick = () => {
    //         console.log(`Done: ${this.props.label}`);
    //     }

    //     this.state = {
    //         done: false
    //     }
    // }

    // state = {
    //     done: false,
    //     important: false
    // } больше нам state не нужен

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        });
    }

    onMarkImportant = () => {
        this.setState((state) => { //можно деструктурировать, как в done!!!
            return {
                important: !state.important
            };
        });
    }

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;
        // const { done, important } = this.state; когда мы подняли их на уровень App, они стали приходить к нам из props

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

       if (important) {
           classNames += ' important';
       }
    
        return (
            <span className={ classNames }>
                <span 
                    className="todo-list-item-label"
                    onClick={ onToggleDone }>
                    { /*props.label*/ label }
                </span>
    
                <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={ onToggleImportant }>
                    <i className="fa fa-exclamation" />
                </button>
    
                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={onDeleted}>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}