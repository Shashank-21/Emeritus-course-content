import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Restock = ({ setProducts }) => {
	const [restockLink, setRestockLink] = useState('');

	const handleRestockLinkChange = (event) => {
		setRestockLink(event.target.value);
	};

	const handleRestockSubmit = async (event) => {
		console.log('Restocking');
		event.preventDefault();
		const productData = await axios.get(restockLink);
		console.log(productData.data.data);

		const restockedProducts = productData.data.data.map((item) => {
			const { Name, Country, Cost, inStock } = item.attributes;
			return { Name, Country, Cost, inStock };
		});
		setProducts(restockedProducts);
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
