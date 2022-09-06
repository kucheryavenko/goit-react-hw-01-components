import Profile from './Profile';
import user from '../user.json';

export default function App() {
  return (
    <div>
      <Profile
        urlAvatar={user.avatar}  
        userName={user.username} 
        tag={user.tag} 
        location={user.location} 
        followers={user.stats.followers} 
        views={user.stats.views} 
        likes={user.stats.likes} 
      />
    </div>
  );
}