import './purchase-cards.scss';
import { Purchases } from "../../../models/purchases-model";

interface PurchaseListProps {
    purchases: Purchases[];
}

// Component to display purchase as cards in mobile view
function PurchasesCards(props: PurchaseListProps) {
    const { purchases } = props;

    return (
        <>
            {purchases.map(purchase => {
                return (
                    <div className='purchase-card-container' key={purchase.id}>
                        <div className='purchase-card-row1'>
                            <img className='purchase-location-image' src={purchase.location}></img>
                            <div><b>{purchase.name}</b></div>
                            <div>
                                {
                                    <b className='purchase-price'>{new Intl.NumberFormat('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                        maximumFractionDigits: 2,
                                    }).format(purchase.price)}
                                    </b>
                                }
                            </div>

                        </div>

                        <div className='purchase-card-row2'>{purchase.description}</div>
                        <div className='purchase-card-row2'>
                            <div className='purchase-date-label'>Purchase Date</div>
                            <div className='purchase-date'>
                                {new Date(purchase.purchaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default PurchasesCards;