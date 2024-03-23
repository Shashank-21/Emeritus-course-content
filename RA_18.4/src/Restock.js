import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Restock = ({ setProducts }) => {
	const [restockLink, setRestockLink] = useState('');

	const handleRestockLinkChange = (event) => {
		setRestockLink(event.target.value);
	};

	const handleRestockSubmit = async (event) => {
		event.preventDefault();
		console.log('Restocking');
		// Todo:
		// Get the products data from the `restockLink` using `axios.get`. Since this is an asynchronous operation, use the `await` keyword in front of it. Save the result in the variable `productData`

		// Map over `productData.data.data`, select only the `Name`, `Country`,`Cost` and `inStock` properties from each item's `attributes` property, and return an object containing those 4 properties. Store the result in the `restockedProducts` variable

		// Set the state products using the function `setProducts` with the parameter `restockedProducts`.
	};

	return (
		<Form
			onSubmit={handleRestockSubmit}
			className="mt-3 d-flex flex-row items-center justify-center "
		>
			<Form.Control
				value={restockLink}
				onChange={handleRestockLinkChange}
				className="w-50"
			/>
			<Button type="submit" className="w-10 ms-3">
				Restock Items
			</Button>
		</Form>
	);
};

export default Restock;
