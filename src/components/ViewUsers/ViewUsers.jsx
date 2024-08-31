import React, { useEffect,useState } from 'react';
import { useUserContext } from '../../UserContext';
import UserCard from '../UserCard/UserCard';
import EditUser from '../EditUser/EditUser';
import DeleteUser from '../DeleteUser/DeleteUser';
import { Pagination } from '../Pagination/Pagination';
import styles from './ViewUsers.module.css';

const ViewUsers = ({ editOrDeleteUser = false }) => {
  const { users, fetchUsers, setEditingUserId, setDeletingUserId} = useUserContext();
  const [currentMode, setCurrentMode] = useState('');
  const [userToBeDeleted, setUserToBeDeleted] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(3);

  const handleEditClick = (userId) => {
    setCurrentMode('edit');
    setEditingUserId(userId);
  };

  const handleDeleteClick = (userId) => {
    setCurrentMode('delete');
    setDeletingUserId(userId);
    const userDetails = users.find(user => user.id === userId); // Use userId directly
    if (userDetails) {
      setUserToBeDeleted(userDetails.name);
    }
  };
  
  useEffect(() => {
    if (users.length === 0) {
      fetchUsers();
    }
  }, [users, fetchUsers]);

  // Ensure that the component resets editing mode when switching views
  useEffect(() => {
    if (!editOrDeleteUser) {
      setCurrentMode(''); 
    }
  }, [editOrDeleteUser]);


  useEffect(() => {
    const updateUsersPerPage = () => {
      if (window.innerWidth <= 800) {
        setUsersPerPage(1); // Set users per page for mobile
      }
      else if(window.innerWidth <= 1140) {
        setUsersPerPage(2); // Set users per page for mobile
      }
      else {
        setUsersPerPage(3); // Default users per page for larger screens
      }
    };
    updateUsersPerPage(); // Check on mount
    window.addEventListener('resize', updateUsersPerPage); // Listen for resize
    return () => window.removeEventListener('resize', updateUsersPerPage); // Cleanup
  }, []);
 

  
  const totalUsers= users.length; //length of total users data objects


  //Logic to get current page user data:-

  //Math.min is used for last page purpose because when total users = 10
  //and currentPage*usersPerPage = 12, we should extract till 
  //10 only in slice operation not 12 and there are only 10 users.
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentPageUsers = users.slice(indexOfFirstUser, Math.min(indexOfLastUser, totalUsers));

  //Change Page
  const paginateNext = () => {

    //ensures the next button works till last page only
    if(currentPage<Math.ceil(totalUsers/usersPerPage))
    {
      setCurrentPage(currentPage+1);
    }
  };

  const paginatePrev = () => {

    //ensures the previous button works till first page only
    if(currentPage>1)
    {
      setCurrentPage(currentPage-1);
    }
  };

  return (
    <div className={styles.usersContainer}>
          {currentMode === 'edit' && <EditUser />}
          {currentMode === 'delete' && 
          <DeleteUser 
          userToBeDeleted={userToBeDeleted} 
          setUserToBeDeleted={setUserToBeDeleted}/>}
          
          {currentMode === '' && (
            <div>
                <div className={styles.usersWrapper}>
                  {currentPageUsers.map(user => (
                    <UserCard 
                      key={user.id} 
                      user={user} 
                      editOrDeleteUser={editOrDeleteUser} 
                      onEditClick={handleEditClick} 
                      onDeleteClick={handleDeleteClick} 
                    />
                  ))}
                  </div>
                  <Pagination
                    currentPage={currentPage}
                    paginateNext={paginateNext}
                    paginatePrev={paginatePrev}
                  />
            </div>
          )}
    </div>
  );
};

export default ViewUsers;
