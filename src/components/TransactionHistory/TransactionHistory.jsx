import PropTypes from 'prop-types';
import {TransactionSection, Table, TableHead, TableBody, TableRow} from 'components/TransactionHistory/TransactionHistory.styled'

export function TransactionHistory({ items }) {
    return (
        <TransactionSection>
            <Table>
            <TableHead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </TableHead>

            <TableBody>
                {items.map(({id, type, amount, currency}) => 
                    <TableRow key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </TableRow>
                )}
            </TableBody>
            </Table>
        </TransactionSection>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.string.isRequired)
    ),
};