import PropTypes from 'prop-types';
import { StatContainer, Title, List, ListItem, ListItemLabel} from 'components/Statistics/Statistics.styled'
import { Box } from 'components/Box/Box';

export function Statistics({ title, stats }) {
    return (
        <Box pt={1} pb={1} as="section">
            <StatContainer>
            <Title>{title}</Title>

            <List>
                {stats.map(({id, label, percentage}) => 
                    <ListItem key={id}>
                        <ListItemLabel>{label}</ListItemLabel>
                        <span>{percentage}%</span>
                    </ListItem>
                )}
            </List>
            </StatContainer>
        </Box>
    );
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};