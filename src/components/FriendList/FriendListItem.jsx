import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import clsx from 'clsx';



export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
  <span
              className={clsx(css.status, {
                [css.online]: isOnline,
                [css.offline]: !isOnline,
              })}
            ></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
  );
};

FriendListItem.protoTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};