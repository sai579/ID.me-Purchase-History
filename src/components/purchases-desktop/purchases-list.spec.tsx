import { render, screen } from '@testing-library/react';
import PurchasesList from './purchases-list';
import React from 'react';

test('renders PurchasesList', () => {
    const { baseElement } = render(<PurchasesList />);
    expect(baseElement).toBeTruthy();
});

test('PurchasesList header', () => {
    render(<PurchasesList />);
    const linkElement = screen.getByText(/Purchases/i);
    expect(linkElement).toBeInTheDocument();
});