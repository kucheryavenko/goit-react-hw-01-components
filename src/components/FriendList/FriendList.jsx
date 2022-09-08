import PropTypes from 'prop-types';
import { FriedSection, List, ListItem, Status, Avatar, FriedName } from 'components/FriendList/FriendList.sryled'

export function FriendList({ friends }) {
    return (
        <FriedSection>
            <List>
                {friends.map(({ avatar, name, isOnline, id}) =>
                    <ListItem key={id}>
                        <Status isOnline={isOnline}></Status>
                        <Avatar src={avatar} alt="User avatar" width="48" />
                        <FriedName>{name}</FriedName>
                    </ListItem>
                )}
            </List>
        </FriedSection>
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