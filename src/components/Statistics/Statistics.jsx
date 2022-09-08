import PropTypes from 'prop-types';
import {StatSection, StatContainer, Title, List, ListItem, ListItemLabel} from 'components/Statistics/Statistics.styled'

export function Statistics({ title, stats }) {
    return (
        <StatSection>
            <StatContainer>
            <Title class="title">{title}</Title>

            <List>
                {stats.map(({id, label, percentage}) => 
                    <ListItem key={id}>
                        <ListItemLabel>{label}</ListItemLabel>
                        <span>{percentage}%</span>
                    </ListItem>
                )}
            </List>
            </StatContainer>
        </StatSection>
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