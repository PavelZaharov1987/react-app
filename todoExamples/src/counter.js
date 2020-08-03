import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0
        // name: 'Valera'
    }

    handleClick() {
        // this.setState({count: this.state.count + 1});
        this.setState((state) => ({ ...state, count: state.count + 1}));
    }

    render() {
        // const { name, count } = this.state;
        const { count } = this.state;
        const { name, increaseCount, countByUser } = this.props;
    // return this.props.emptyArray.length && <div>counter</div>
    // return <div>counter</div>
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <div>Name: {this.state.name}</div>
                <div>Count: {count}</div>
                <div>Name: {name}</div>
                <div>Count by user: {countByUser}</div>
                <button onClick={this.handleClick.bind(this)}>Increment</button>
                <button onClick={() => this.handleClick()}>Increment</button>
                <button onClick={() => increaseCount(50)}>Increment by 50</button>
            </div>
        )
    }
}

export default Counter;