import React from 'react';
import styles from './UserCard.module.css';

const UserCard =  React.memo(({user, editOrDeleteUser, onEditClick, onDeleteClick}) => {
    

    const [firstName, lastName] = user.name.split(' ');

  return (
    <div className={editOrDeleteUser ? styles.cardContainerModifyMode : styles.cardContainer}>
      <div className={styles.cardWrapper}>
          <h3>{firstName} {lastName}</h3>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>First Name:</strong> {firstName}</p>
          <p><strong>Last Name:</strong> {lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Department:</strong> {user.company.name}</p>
          {/* Using company name as department, because department is not mentioned explicitly */}

          {editOrDeleteUser && (
            <div className={styles.userModifyButtonWrapper}>
              <button onClick={() => onEditClick(user.id)}>Edit</button>
              <button onClick={() => onDeleteClick(user.id)}>Delete</button>
            </div>
          )}
      </div>
    </div>
  )
});

export default UserCard;