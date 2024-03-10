import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { UserContext } from '../src/context';
import Deposit from '../src/deposit';

describe('Deposit Component', () => {
	const mockUpdateUserBalance = jest.fn();

	beforeEach(() => {
		render(
			<UserContext.Provider
				value={{
					user: { name: 'John Doe', balance: 100 },
					updateUserBalance: mockUpdateUserBalance,
				}}
			>
				<Deposit />
			</UserContext.Provider>
		);
		mockUpdateUserBalance.mockClear();
	});

	test('calls updateUserBalance with the correct amount', () => {
		const depositInput = screen.getByLabelText(/amount:/i);
		fireEvent.change(depositInput, { target: { value: '50' } });
		fireEvent.click(screen.getByRole('button', { name: /deposit/i }));

		expect(mockUpdateUserBalance).toHaveBeenCalledWith(150);
	});

	test('does not update balance for invalid deposit amount', () => {
		const depositInput = screen.getByLabelText(/amount:/i);
		fireEvent.change(depositInput, { target: { value: '-50' } });
		fireEvent.click(screen.getByRole('button', { name: /deposit/i }));

		expect(mockUpdateUserBalance).not.toHaveBeenCalled();
	});

	test('resets depositAmount and shows success message upon successful deposit', async () => {
		const depositInput = screen.getByLabelText(/amount:/i);
		fireEvent.change(depositInput, { target: { value: '50' } });
		fireEvent.click(screen.getByRole('button', { name: /deposit/i }));
		expect(
			screen.getByText(/You have deposited successfully!/i)
		).toBeInTheDocument();
		fireEvent.click(screen.getByRole('button', { name: /deposit again/i }));
		const newDepositInput = screen.getByLabelText(/amount:/i);
		expect(newDepositInput.value).toBe('');
	});
});
