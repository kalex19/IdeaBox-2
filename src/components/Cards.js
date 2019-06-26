import React, { Component } from 'react';

const Cards = ({ title, descrition, id, deleteIdea }) => {
	return (
		<div>
			<h1> {title} </h1> <p> {descrition} </p>
			<button onClick={() => deleteIdea(id)}>🗑</button>
		</div>
	);
};

export default Cards;
