import axios from "axios";
import { useEffect, useState } from "react";
import PurchasesCards from "./purchases-cards/purchases-cards";
import './purchases-mobile.scss';

const PURCHASES_URL = 'https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json';

function PurchasesListMobile() {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        try {
            axios.get(PURCHASES_URL).then(res => {
                setPurchases(res.data);
            })
        } catch (error) {
            console.error('something went wrong when fetching purchases. Error: ', error)
        }
    }, []);

    return (
        <div className='purchases-mobile-container'>
            <header className='purchases-mobile-header'>Purchases</header>
            <PurchasesCards purchases={purchases} />
        </div>
    );
}

export default PurchasesListMobile;