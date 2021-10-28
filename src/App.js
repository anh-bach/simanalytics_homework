import React, { useState, useEffect, Fragment } from 'react';
import { getUsers } from './actions/users';
import UserCard from './component/card/UserCard';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import SideNav from './component/nav/SideNav';
import Spinner from './assets/images/spinner.svg';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const res = await getUsers();
      setUsers(res.data);
      setCurrentUser(res.data[0]);
      setLoading(false);
    } catch (error) {
      console.log('From loading users', error);
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Header />

      {loading ? (
        <div className='container'>
          <img className='spinner' src={Spinner} alt='spinner' />
        </div>
      ) : (
        <div className='container'>
          <SideNav
            currentUser={currentUser}
            users={users}
            setCurrentUser={setCurrentUser}
          />
          <div className='main__content'>
            <UserCard user={currentUser} />
          </div>
        </div>
      )}

      <Footer />
    </Fragment>
  );
};

export default App;
