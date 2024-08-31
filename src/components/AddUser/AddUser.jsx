import React, { useState, useEffect } from 'react';
import { useUserContext } from '../../UserContext';
import Modal from '../Modal/Modal';
import styles from './AddUser.module.css';

const AddUser = ({ isAddingUser, setIsAddingUser }) => {
  const { addUser} = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(isAddingUser);

  useEffect(() => {
    setIsModalOpen(isAddingUser);
  }, [isAddingUser]);

  const handleSave = (formData) => {
    addUser(formData);
    setIsModalOpen(false);
    setIsAddingUser(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setIsAddingUser(false);
  };


  return (
    <div className={styles.addUserContainer}>
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        onSave={handleSave}
        mode="add"
      />
    </div>
  );
};

export default AddUser;
