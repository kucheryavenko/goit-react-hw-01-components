import PropTypes from 'prop-types';
import defaultAvatar from 'images/defaultAvatar.jpeg';
import { ProfileSection, 
  ProfileContainer, 
  DescriptionContainer, 
  Image,
  DescriptionTxt,
  DescriptionTxtName, 
  List, 
  ListItem, 
  ListItemLabel,
  ListItemQuantity} 
from './Profile.styled';

export function Profile({
  avatarUrl = defaultAvatar, 
  userName = 'User Name', 
  tag = 'usertag', 
  location = 'User location', 
  followers = '--', 
  views = '--', 
  likes = '--'
}) {

  return (
    <ProfileSection>
    <ProfileContainer>
      <DescriptionContainer>
        <Image
          src={avatarUrl}
          alt="User avatar"
        />
        <DescriptionTxtName>{userName}</DescriptionTxtName>
        <DescriptionTxt>@{tag}</DescriptionTxt>
        <DescriptionTxt>{location}</DescriptionTxt>
      </DescriptionContainer>

      <List>
        <ListItem>
          <ListItemLabel>Followers</ListItemLabel>
          <ListItemQuantity>{followers}</ListItemQuantity>
        </ListItem>
        <ListItem>
          <ListItemLabel>Views</ListItemLabel>
          <ListItemQuantity>{views}</ListItemQuantity>
        </ListItem>
        <ListItem>
          <ListItemLabel>Likes</ListItemLabel>
          <ListItemQuantity>{likes}</ListItemQuantity>
        </ListItem>
      </List>
    </ProfileContainer>
    </ProfileSection>
  );
}

Profile.propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};