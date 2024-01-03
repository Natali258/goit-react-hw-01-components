import { FriendListItem } from 'components/friendListItem/FriendListItem';
import s from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(elements => (
        <FriendListItem key={elements.id} {...elements} />
      ))}
    </ul>
  );
};
