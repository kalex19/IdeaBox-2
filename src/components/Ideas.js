import React, { Component } from 'react';
import Card from './Cards';

const Ideas = ({ ideas }) => {
	const ideasCard = ideas.map(idea => {
		return (
			<div>
				<Card
					id={idea.id}
					title={idea.title}
					description={idea.description}
					key={idea.id}
					deleteIdea={idea.deleteIdea}
				/>
			</div>
		);
	});

	return <div>{ideasCard}</div>;
};

export default Ideas;
