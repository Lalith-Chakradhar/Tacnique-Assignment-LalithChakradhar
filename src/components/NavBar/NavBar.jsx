import React, { useState } from 'react';
import ViewUsers from '../ViewUsers/ViewUsers';
import AddUser from '../AddUser/AddUser';
import Welcome from '../Welcome/Welcome';
import styles from './NavBar.module.css';


function NavBar() {
  const [activeComponent, setActiveComponent] = useState('');
  const [isAddingUser, setIsAddingUser] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'view':
        return <ViewUsers />;
      case 'add':
        return <AddUser isAddingUser={isAddingUser} setIsAddingUser={setIsAddingUser}/>;
      case 'edit':
        return <ViewUsers editOrDeleteUser={true}/>;
      case 'delete':
        return <ViewUsers editOrDeleteUser={true}/>;
      default:
        return <Welcome/>;
    }
  };

  const handleAddUserClick = () => {
    setIsAddingUser(true);
    setActiveComponent('add');
  };


  return (
    <div>
        <div className={styles.navContainer}>
            <div className={styles.pageTitle} onClick={() => setActiveComponent('')}>User Management App</div>
            

            <div className={styles.navButtonsWrapper}>
                <button onClick={() => setActiveComponent('view')}>View Users</button>
                <button onClick={handleAddUserClick}>Add User</button>
                <button onClick={() => setActiveComponent('edit')}>Edit User</button>
                <button onClick={() => setActiveComponent('delete')}>Delete User</button>
            </div>
        </div>
        <div className={styles.componentContainer}>
          {renderComponent()}
        </div>
    </div>
  );
}

export default NavBar;
