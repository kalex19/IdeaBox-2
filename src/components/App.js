import React, { Component } from 'react';
import '../styles/App.css';
import Ideas from './Ideas';
import Form from './Form';

class App extends Component {
	constructor() {
		super();
		this.state = {
			ideas: [
				{
					id: 1,
					title: 'Beautiful Bedroom',
					description:
						'Distillery vegan typewriter fixie hashtag cloud bread fam organic food truck street art umami kale chips. Banjo selvage tote bag, ramps flannel enamel pin small batch kogi meggings normcore hashtag. Hell of pabst wayfarers ramps portland. Wolf tofu mustache jean shorts craft beer subway tile.',
					completed: false
				},
				{
					id: 2,
					title: 'Kozy Kitchen',
					description:
						'Mixtape enamel pin narwhal wayfarers. Beard meh vexillologist glossier cardigan iceland blue bottle ennui quinoa. Tumblr humblebrag kombucha salvia DIY lomo blue bottle portland migas microdosing marfa XOXO hoodie. Crucifix lo-fi kale chips cronut blog jean shorts swag church-key raclette hoodie twee.',
					completed: false
				},
				{
					id: 3,
					title: 'Modern MudRoom',
					description:
						'Bitters hell of stumptown blog, keytar 90s tumblr normcore. Wayfarers pour-over selfies, lomo trust fund hammock actually. Woke mixtape forage literally vape. 8-bit XOXO activated charcoal fanny pack mlkshk, pug kinfolk thundercats godard af. Roof party YOLO dreamcatcher semiotics try-hard pickled palo santo. Thundercats art party cronut, cornhole retro photo booth artisan.',
					completed: false
				}
			]
		};
	}

	addIdea = newIdea => {
		this.setState({
			ideas: [ ...this.state.ideas, newIdea ]
		});
	};

	deleteIdea = id => {
		const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);
		this.setState({
			ideas: filteredIdeas
		});
	};
	render() {
		return (
			<div className="App">
				<h1>My Design Ideas</h1>
				<Form addIdea={this.addIdea} />
				<Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
			</div>
		);
	}
}

export default App;
