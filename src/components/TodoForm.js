import React, { Component } from 'react';

class TodoForm extends Component {
	constructor(props) {
		super(props);
		// add the custom function to the react component
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		let todoInput = this.refs.todoInput;

		// figure out how to add the value to the state
		// of the todo list
		this.props.addItem(todoInput.value);

		// reset the form
		this.refs.itemForm.reset();

		// autofocus form
		todoInput.focus();

	}

	render() {
		return (
			<div>
				<form ref='itemForm' onSubmit={ this.handleSubmit }>
					<input ref='todoInput' type='text' placeholder='Get Milk' required />
					<input type='submit' />
				</form>
			</div>
		)
	}
}

export default TodoForm;