import { AppContainer } from 'components/App/App.styled'
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from 'dataJson/user';
import data from 'dataJson/data';
import friends from 'dataJson/friends';
import transactions from 'dataJson/transactions';

export function App() {
  return (
    <AppContainer>
      <Profile
        avatarUrl={user.avatar}  
        userName={user.username} 
        tag={user.tag} 
        location={user.location} 
        followers={user.stats.followers} 
        views={user.stats.views} 
        likes={user.stats.likes} 
      />
      <Statistics 
        title="Upload stats"
        stats={data}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </AppContainer>
  );
}