import React from 'react';

const SideNav = ({ users = [], currentUser, setCurrentUser }) => {
  const handleClick = (user) => {
    setCurrentUser(user);
  };

  return (
    <aside>
      {users.map((user) => (
        <div
          className={`aside__item ${
            currentUser && currentUser.id === user.id && 'aside__item--active'
          }`}
          key={user.id}
          onClick={() => handleClick(user)}
        >
          {user.name}
        </div>
      ))}
    </aside>
  );
};

export default SideNav;
