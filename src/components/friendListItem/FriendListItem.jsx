import s from './FriendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.friendLi}>
      <p
        className={clsx(s.status, isOnline === true ? s.onlineGreen : s.status)}
      >
        {isOnline}
      </p>
      <img src={avatar} alt={name} className={s.avatar} />
      <p className={s.textName}>{name}</p>
    </li>
  );
};
