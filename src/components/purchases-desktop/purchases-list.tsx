import { useEffect, useState } from 'react';
import './purchases-list.scss';
import PurchasesTable from './purchases-table/purchases-table';
import axios from 'axios';
import { Purchases } from '../../models/purchases-model';

const PURCHASES_URL = 'https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json';

function PurchasesList() {
    const [purchases, setPurchases] = useState([]);

    // API call to fetch the purchases
    useEffect(() => {
        try {
            axios.get(PURCHASES_URL).then(res => {
                setPurchases(res.data);
            })
        } catch (error) {
            console.error('something went wrong when fetching purchases. Error: ', error)
        }
    }, []);

    /* Build config for rendering the table. Followed this approach to render table as this 
       will enable dynamic way of rendering table and makes it easy to maintain it by easly 
       adding or removing columns. 
    */
    const config = [
        {
            label: 'Name',
            render: (purchase: Purchases) => <b>{purchase.name}</b>
        },
        {
            label: 'Location',
            render: (purchase: Purchases) => <img className="purchase-location-image" src={purchase.location}></img>,
        },
        {
            label: 'Purchase Date',
            render: (purchase: Purchases) => new Date(purchase.purchaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        },
        {
            label: 'Category',
            render: (purchase: Purchases) => <div>{purchase.category}</div>
        },
        {
            label: 'Description',
            render: (purchase: Purchases) => purchase.description
        },
        {
            label: 'Price',
            render: (purchase: Purchases) => <b>{new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 2,
            }).format(purchase.price)}</b>
        },
        {
            label: '',
            render: () => <div className='context-menu'></div>
        },
    ];

    return (
        <div className='purchases-container'>
            <header className="purchases-header">Purchases</header>
            <PurchasesTable purchases={purchases} config={config} />
        </div>
    );
}

export default PurchasesList;