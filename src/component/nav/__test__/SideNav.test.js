import { render, screen, fireEvent } from '@testing-library/react';
import SideNav from '../SideNav';

const mockedSetCurrentUser = jest.fn();

describe('Test the SideNav component', () => {
  it('should render the name of the user passed to users props - only one user', () => {
    const users = [
      {
        id: '1',
        name: 'Jane Doe',
      },
    ];

    render(<SideNav users={users} />);
    const userList = screen.getByText('Jane Doe');
    expect(userList).toBeInTheDocument();
  });

  it('should render the names of the users passed to users props - many users', () => {
    const users = [
      {
        id: '1',
        name: 'Jane Doe',
      },
      {
        id: '2',
        name: 'Jon Doe',
      },
    ];

    render(<SideNav users={users} />);
    const userOne = screen.getByText('Jane Doe');
    const userTwo = screen.getByText('Jon Doe');
    expect(userOne).toBeInTheDocument();
    expect(userTwo).toBeInTheDocument();
  });

  it('should not render if no user passed to users props', () => {
    const users = [];

    render(<SideNav users={users} />);
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('test the handleClick event as user name gets click', () => {
    const users = [
      {
        id: '1',
        name: 'Jane Doe',
      },
      {
        id: '2',
        name: 'Jon Doe',
      },
    ];

    const currentUser = {
      id: '1',
      name: 'Jane Doe',
    };

    render(
      <SideNav
        users={users}
        currentUser={currentUser}
        setCurrentUser={mockedSetCurrentUser}
      />
    );
    const userOne = screen.getByText('Jane Doe');
    const userTwo = screen.getByText('Jon Doe');
    [(userOne, userTwo)].forEach((item) => expect(item).toBeInTheDocument());

    //click event
    fireEvent.click(userOne, {
      setCurrentUser: mockedSetCurrentUser(userOne),
    });
    fireEvent.click(userTwo, {
      setCurrentUser: mockedSetCurrentUser(userTwo),
    });
  });
});
