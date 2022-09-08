import PropTypes from 'prop-types';
import { Table, TableHead, TableBody, TableRow} from 'components/TransactionHistory/TransactionHistory.styled'
import { Box } from 'components/Box/Box';

export function TransactionHistory({ items }) {
    return (
        <Box pt={1} pb={1} as="section">
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
        </Box>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.string.isRequired)
    ),
};