import React, {useState} from 'react';
import { useUserContext } from '../../UserContext';
import styles from './DeleteUser.module.css';

const DeleteUser = ({userToBeDeleted, setUserToBeDeleted}) => {
  const { deletingUserId, deleteUser, setDeletingUserId } = useUserContext();

  const [isDeleteWindowOpen, setIsDeleteWindowOpen] = useState(true);


  const handleDelete = () => {
    deleteUser(deletingUserId);
    setUserToBeDeleted('');
    setIsDeleteWindowOpen(false);
  };

 
  return (
    // we should create a dialogue box here
    <div className={styles.deleteUserContainer}>
            <div className={isDeleteWindowOpen ? styles.deleteUserDialogueBoxOverlay : styles.deleteUserDialogueBoxVanish}>
                <div className={styles.deleteUserDialogueBox}>
                    <h2>Delete User</h2>
                    <p>Are you sure you want to delete user :</p>
                    <p style={{margin:'0rem', fontSize:'1.4rem'}}>{userToBeDeleted}?</p>
                    <div className={styles.buttonContainer}>
                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={() => 
                          {
                            setUserToBeDeleted('');
                            setDeletingUserId(null);
                            setIsDeleteWindowOpen(false);
                          }}>Cancel</button>
                      </div>
                </div>
            </div>
    </div>
  );
};

export default DeleteUser;
