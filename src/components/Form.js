import React, { Component } from 'react';

export class Form extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			description: ''
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.value]: e.target.name
		});
	};

	submitForm = e => {
		e.preventDefault();
		const newIdea = {
			id: Date.now(),
			completed: false
		};
		this.props.addIdea(newIdea);
		this.clearInputs();
	};

	clearInputs = () => {
		this.setState({
			title: '',
			description: ''
		});
	};

	render() {
		return (
			<div>
				<form action="submit">
					<input
						type="text"
						placeholder="title"
						name="title"
						value={this.state.title}
						onChange={e => this.handleChange(e)}
					/>
					<input
						type="text"
						placeholder="description"
						name="description"
						value={this.state.description}
						onChange={e => this.handleChange(e)}
					/>
					<button onSubmit={e => this.submitNewIdea(e)}>Submit</button>
				</form>
			</div>
		);
	}
}

export default Form;
