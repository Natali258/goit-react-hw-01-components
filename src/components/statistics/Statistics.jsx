import s from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(elements => (
          <li className={s.items} key={elements.id}>
            <span className={s.label}>{elements.label}</span>
            <span className={s.percentage}>{elements.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
