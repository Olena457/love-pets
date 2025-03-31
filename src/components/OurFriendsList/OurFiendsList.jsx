import css from './OurFriendsList.module.css';
import { useSelector } from 'react-redux';
import { selectFriends } from '../../redux/friends/ourFriendsSelectors.js';
import OurFriendsCard from '../OurFriendsCard/OurFriendsCard.jsx';
import Container from '../Container/Container.jsx';

const OurFriendsList = () => {
  const friends = useSelector(selectFriends);
  return (
    <Container>
      <div className={css.list}>
        {friends.map(friend => (
          <OurFriendsCard key={friend._id} friend={friend} />
        ))}
      </div>
    </Container>
  );
};

export default OurFriendsList;
