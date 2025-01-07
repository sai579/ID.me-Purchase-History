import './purchase-table.scss';
import { Purchases, TableConfig } from '../../../models/purchases-model';

interface PurchaseListProps {
    purchases: Purchases[];
    config: TableConfig[];
}

// Component to render the purchases table for Desktop view
function PurchasesTable(props: PurchaseListProps) {
    const { purchases, config } = props;

    return <table className='table-container'>
        <thead>
            <tr className="row-header">
                {config && config.map(column => {
                    return <th key={column.label}>{column.label}</th>;
                })}
            </tr>
        </thead>
        <tbody>
            {purchases && purchases.map(rowdata => {
                return (
                    <tr className="" key={rowdata.id}>
                        {config && config.map(column => {
                            return (
                                <td className={column.label === 'Category' ? rowdata.category.toLowerCase() : 'row-data'} key={column.label}>{column.render(rowdata)}</td>
                            )
                        })}
                    </tr>
                )
            })}
        </tbody>
    </table>
}

export default PurchasesTable;