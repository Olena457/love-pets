import { useSelector } from 'react-redux';
import { selectFriends } from '../../redux/friends/ourFriendsSelectors.js';
import OurFriendsCard from '../OurFriendsCard/OurFriendsCard.jsx';
import css from './OurFriendsList.module.css';

const OurFriendsList = () => {
  const friends = useSelector(selectFriends);
  return (
    <div className={css.containerFriend}>
      <div className={css.list}>
        {friends.map(friend => (
          <OurFriendsCard key={friend._id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default OurFriendsList;
