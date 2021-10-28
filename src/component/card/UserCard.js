import React, { Fragment } from 'react';
import Earth from '../../assets/images/earth.jpg';

const UserCard = ({ user = {} }) => {
  const rowCol = (title, content) => (
    <div className='row'>
      <div className='col col--4'>{title}:</div>
      <div className='col col--6'>{content}</div>
    </div>
  );

  const cardContent = (user) => {
    const { street, suite, city } = user.address;

    return (
      <Fragment>
        <h3 className='card__title--user'>{user.name}</h3>
        {rowCol('Username', user.username)}
        {rowCol('Email', user.email)}
        {rowCol('Address', `${street}, ${suite}, ${city}.`)}
        {rowCol('Phone', user.phone)}
        {rowCol('Website', user.website)}
        {rowCol('Company', user.company.name)}
      </Fragment>
    );
  };

  return (
    <div className='card__wrapper--user'>
      <div className='card__image--user'>
        <img src={Earth} alt='user avatar' />
      </div>
      <div className='card__content--user'>{user && cardContent(user)}</div>
    </div>
  );
};

export default UserCard;
