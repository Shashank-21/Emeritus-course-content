import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { UserContext } from '../src/context';
import Withdraw from '../src/withdraw';

describe('Withdraw Component', () => {
	const mockUpdateUserBalance = jest.fn();

	beforeEach(() => {
		render(
			<UserContext.Provider
				value={{
					user: { name: 'John Doe', balance: 100 },
					updateUserBalance: mockUpdateUserBalance,
				}}
			>
				<Withdraw />
			</UserContext.Provider>
		);
		mockUpdateUserBalance.mockClear();
	});

	test('calls updateUserBalance with the correct amount', () => {
		const depositInput = screen.getByLabelText(/amount:/i);
		fireEvent.change(depositInput, { target: { value: '50' } });
		fireEvent.click(screen.getByRole('button', { name: /deposit/i }));

		expect(mockUpdateUserBalance).toHaveBeenCalledWith(50);
	});

	test('does not update balance for invalid withdraw amount', () => {
		const depositInput = screen.getByLabelText(/amount:/i);
		fireEvent.change(depositInput, { target: { value: '-50' } });
		fireEvent.click(screen.getByRole('button', { name: /deposit/i }));

		expect(mockUpdateUserBalance).not.toHaveBeenCalled();
	});
});
