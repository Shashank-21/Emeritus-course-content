import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const Checkout = ({ total, cart, calculateCartTotal }) => {
	const handleCheckoutClick = () => {
		// Todo: calculate the cart total on checkout, by calling the `calculateCartTotal` function. Replace the next line
		console.log('Checking out');
	};
	return (
		<div>
			<Button variant="success" onClick={handleCheckoutClick}>
				Checkout $ {total}
			</Button>
			{cart.length > 0 && (
				<ListGroup className="mt-3">
					{cart.map((item, index) => (
						<ListGroup.Item key={index}>
							{item.Name} - ${item.Cost} from {item.Country}
						</ListGroup.Item>
					))}
				</ListGroup>
			)}
			<div className="mt-3">
				{total > 0 && <strong>Total: $ {total}</strong>}
			</div>
		</div>
	);
};

export default Checkout;
