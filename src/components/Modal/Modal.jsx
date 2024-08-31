import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, onSave, user, mode }) => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.name.split(' ')[0],
        lastName: user.name.split(' ')[1] || '',
        email: user.email,
        department: user.company.name
      });
    }
  }, [user]);

  if (!isOpen) return null; // Render nothing if the modal is closed

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    // Pass the updated data back to the EditUser component
    onSave(formData);
    onClose(); // Close the modal after saving
  };

  return (
    <div className= {styles.modalOverlay}>
      <div className= {styles.modalContent}>
        <span className={styles.modalClose} onClick={onClose}>&times;</span>
        <h2 className={styles.modalHeading}>{mode === 'edit' ? 'Edit User' : 'Add User'}</h2>
        <form className={styles.modalForm}>
            <label>
                First Name:
                <br/>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName || (user ? user.name.split(' ')[0] : '')}
                  onChange={handleChange} 
                  required={mode === 'add'} />
            </label>
            <label>
                Last Name:
                <br/>
                <input 
                  type="text"
                  name="lastName"
                  value={formData.lastName || (user ? user.name.split(' ')[1] : '')}
                  onChange={handleChange} 
                  required={mode === 'add'} />
            </label>
            <label>
                Email:
                <br/>
                <input 
                  type="email"
                  name="email"
                  value={formData.email || (user ? user.email : '')}
                  onChange={handleChange}
                  required={mode === 'add'} />
            </label>
            <label>
                Department:
                <br/>
                <input 
                  type="text"
                  name="department"
                  value={formData.department || (user ? user.company.name : '')}
                  onChange={handleChange}
                  required={mode === 'add'} />
            </label>
            <div className={styles.buttonContainer}>
            <button type="button" onClick={handleSave}>Save</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
