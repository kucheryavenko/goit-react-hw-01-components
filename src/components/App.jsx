import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from 'components/Profile/user';
import data from 'components/Statistics/data';
import friends from 'components/FriendList/friends';
import transactions from 'components/TransactionHistory/transactions';

export function App() {
  return (
    <div>
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
    </div>
  );
}