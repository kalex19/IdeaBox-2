import React, { Component } from 'react';
import '../styles/Card.css';

const Cards = ({ title, description, id, deleteIdea }) => {
	return (
		<div>
			<h1 className="cardTitle"> {title} </h1> <p className="cardDes"> {description} </p>
			<button className="cardBtn" onClick={() => deleteIdea(id)}>
				🗑
			</button>
		</div>
	);
};

export default Cards;
