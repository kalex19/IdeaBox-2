import React, { Component } from 'react';
import Card from './Cards';
import '../styles/Ideas.css';

const Ideas = ({ ideas, deleteIdea }) => {
	const ideasCard = ideas.map(idea => {
		return (
			<div className="cardContainer">
				<Card
					id={idea.id}
					title={idea.title}
					description={idea.description}
					key={idea.id}
					deleteIdea={deleteIdea}
				/>{' '}
			</div>
		);
	});

	return <div> {ideasCard} </div>;
};

export default Ideas;
