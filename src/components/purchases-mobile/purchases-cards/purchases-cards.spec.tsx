import { render } from '@testing-library/react';
import PurchasesCards from './purchases-cards';
import React from 'react';

test('renders PurchasesCards', () => {
    const { baseElement } = render(<PurchasesCards purchases={[]} />);
    expect(baseElement).toBeTruthy();
});