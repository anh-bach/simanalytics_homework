import React from 'react';

const SideNav = ({ users = [], currentUser, setCurrentUser }) => {
  const handleClick = (user) => {
    setCurrentUser(user);
  };

  return (
    <aside>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className={`aside__item ${
              currentUser && currentUser.id === user.id && 'aside__item--active'
            }`}
            onClick={() => handleClick(user)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideNav;
