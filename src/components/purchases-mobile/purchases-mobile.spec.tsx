import { render, screen } from '@testing-library/react';
import PurchasesListMobile from './purchases-mobile';
import React from 'react';

test('renders PurchasesListMobile', () => {
    const { baseElement } = render(<PurchasesListMobile />);
    expect(baseElement).toBeTruthy();
});

test('PurchasesListMobile header', () => {
    render(<PurchasesListMobile />);
    const linkElement = screen.getByText(/Purchases/i);
    expect(linkElement).toBeInTheDocument();
});