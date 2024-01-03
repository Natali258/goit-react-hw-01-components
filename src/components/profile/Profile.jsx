import s from './Profile.module.css';

export const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.text}>{tag}</p>
        <p className={s.text}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsLi}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.statsLi}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.statsLi}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
