import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import Snackbar from './components/SnackBar/SnackBar';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [deletingUserId, setDeletingUserId] = useState(null);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('success');

  const showSnackbar = (message,  type = 'success') => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setSnackbarVisible(true);
    setTimeout(() => setSnackbarVisible(false), 6000); // Auto-close after 6000ms
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
      showSnackbar('Users fetched successfully!','success');
    } catch (error) {
      console.error('Error fetching users:', error);
      showSnackbar('Failed to fetch users','error');
    }
  };

  const addUser = async (newUser) => {
    try {
       
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
        ...newUser,
        
        name: `${newUser.firstName} ${newUser.lastName}`,
        email: newUser.email,
        company: { name: newUser.department },
      });
      setUsers([...users, response.data]);
      showSnackbar('User added successfully! Check the View Users section','success');
    } catch (error) {
      console.error('Error adding user:', error);
      showSnackbar('Failed to add user','error');
    }
  };

  const updateUser = async (userId, updatedData) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        ...updatedData,
        name: `${updatedData.firstName} ${updatedData.lastName}`,
        company: { name: updatedData.department },
      });
      setUsers(users.map(user => (user.id === userId ? { ...user, ...updatedData } : user)));
      setEditingUserId(null); // Close edit modal after update
      showSnackbar('User updated successfully! Check the View Users section', 'success');
    } catch (error) {
      console.error('Error updating user:', error);
      showSnackbar('Failed to update user', 'error');
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
      setDeletingUserId(null);
      showSnackbar('User deleted successfully! Check the View Users section' , 'success');
    } catch (error) {
      console.error('Error deleting user:', error);
      showSnackbar('Failed to delete user' , 'error');
    }
  };

  return (
    <UserContext.Provider value={{
      users,
      fetchUsers,
      editingUserId,
      setEditingUserId,
      deletingUserId,
      setDeletingUserId,
      addUser,
      updateUser,
      deleteUser
    }}>
      {children}
      {snackbarVisible && <Snackbar message={snackbarMessage} type={snackbarType}/>}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
