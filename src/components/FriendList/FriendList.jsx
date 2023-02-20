import PropTypes from 'prop-types';
import React from 'react';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div>
      <h2>Friends</h2>
      <ul className={styles.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={styles.item}>
            <span className={friend.isOnline ? styles.online : styles.offline}>
              {friend.isOnline ? 'online' : 'offline'}
            </span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
