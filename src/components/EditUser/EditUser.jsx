import React, { useState, useEffect } from 'react';
import { useUserContext } from '../../UserContext';
import Modal from '../Modal/Modal';
import styles from './EditUser.module.css';

const EditUser = () => {
  const { editingUserId, updateUser, setEditingUserId, users } = useUserContext();
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true); // Open modal by default

  useEffect(() => {
    const fetchedUser = users.find(user => user.id === editingUserId);
    setUser(fetchedUser);
    setIsModalOpen(true);
  }, [editingUserId, users]);

  const handleSave = (updatedData) => {
    const updatedUser = {
      id: editingUserId,
      name: `${updatedData.firstName} ${updatedData.lastName}`, // Combine firstName and lastName
      email: updatedData.email,
      company: {
        ...user.company,
        name: updatedData.department // Update company name
      }
    };

    updateUser(editingUserId, updatedUser);
    setIsModalOpen(false);
    setEditingUserId(null);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setEditingUserId(null);
  };


  return (
    <div className={styles.editUserContainer}>
      <Modal
        isOpen={isModalOpen && editingUserId !== null}
        onClose={handleClose}
        onSave={handleSave}
        user={user}
        mode="edit"
      />
    </div>
  );
};

export default EditUser;
