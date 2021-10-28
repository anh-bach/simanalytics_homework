import { render, screen } from '@testing-library/react';
import UserCard from '../UserCard';

describe('Test the SideNav component', () => {
  it('should render user information passed as user props', () => {
    const user = {
      id: '1',
      username: 'janefantastic',
      name: 'Jane Doe',
      email: 'jane@gmail.com',
      address: {
        street: 'Boulevard',
        suite: '2A',
        city: 'Los Angeles',
      },
      phone: '555-555-555',
      website: 'http://jane.com',
      company: {
        name: 'ABC Ltd',
      },
    };

    render(<UserCard user={user} />);
    const headingEl = screen.getByRole('heading');
    expect(headingEl).toBeInTheDocument();
    const name = screen.getByText('Jane Doe');
    const email = screen.getByText('jane@gmail.com');
    const address = screen.getByText('Boulevard, 2A, Los Angeles.');
    const website = screen.getByText('ABC Ltd');

    [name, email, address, website].forEach((item) =>
      expect(item).toBeInTheDocument()
    );
  });
});
