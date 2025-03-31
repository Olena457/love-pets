import css from './OurFriendsList.module.css';
import { useSelector } from 'react-redux';
import { selectFriends } from '../../redux/friends/ourFriendsSelectors.js';
import OurFriendsCard from '../OurFriendsCard/OurFriendsCard.jsx';

const OurFriendsList = () => {
  const friends = useSelector(selectFriends);
  return (
    <div className={css.list}>
      {friends.map(friend => (
        <OurFriendsCard key={friend._id} friend={friend} />
      ))}
    </div>
  );
};

export default OurFriendsList;
