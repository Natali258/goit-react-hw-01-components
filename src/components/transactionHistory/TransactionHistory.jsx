import { TransactionList } from 'components/transactionList/TransactionList';
import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.tabList}>
        <tr className={s.tabLi}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.transactionList}>
        {items.map(el => (
          <TransactionList key={el.id} {...el} />
        ))}
      </tbody>
    </table>
  );
};
