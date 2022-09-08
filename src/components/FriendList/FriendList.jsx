import PropTypes from 'prop-types';
import { List, ListItem, Status, Avatar, FriedName } from 'components/FriendList/FriendList.sryled'
import { Box } from 'components/Box/Box';

export function FriendList({ friends }) {
    return (
        <Box pt={1} pb={1} as="section">
            <List>
                {friends.map(({ avatar, name, isOnline, id}) =>
                    <ListItem key={id}>
                        <Status isOnline={isOnline}></Status>
                        <Avatar src={avatar} alt="User avatar" width="48" />
                        <FriedName>{name}</FriedName>
                    </ListItem>
                )}
            </List>
        </Box>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
};