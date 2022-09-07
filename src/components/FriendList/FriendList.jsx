import PropTypes from 'prop-types';

export function FriendList({ friends }) {
    return (
        <ul class="friend-list">
            {friends.map(({ avatar, name, isOnline, id}) =>
                <li class="item" key={id}>
                    <span class="status">{isOnline}</span>
                    <img class="avatar" src={avatar} alt="User avatar" width="48" />
                    <p class="name">{name}</p>
                </li>
            )}
        </ul>
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