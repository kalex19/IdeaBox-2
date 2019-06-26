import React, { Component } from 'react';
import '../styles/Form.css';

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
			...this.state,
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
				<form className="appForm">
					<input type="text" placeholder="title" name="title" value={this.state.title} onChange={this.handleChange} /> {' '}
					<input
						type="text"
						placeholder="description"
						name="description"
						value={this.state.description}
						onChange={e => this.handleChange(e)}
					/>{' '}
					{' '}
					<button className="submitBtn" onSubmit={e => this.submitNewIdea(e)}>
						{' '}
						Submit {' '}
					</button>{' '}
					{' '}
				</form>{' '}
				{' '}
			</div>
		);
	}
}

export default Form;
