import { render } from '@testing-library/react';
import PurchasesTable from './purchases-table';
import React from 'react';

test('renders PurchasesTable', () => {
    const { baseElement } = render(<PurchasesTable purchases={[]} config={[]} />);
    expect(baseElement).toBeTruthy();
});