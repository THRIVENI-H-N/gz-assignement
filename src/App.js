import React, { useEffect, useState } from 'react';
import UserList1 from './components/UserList1'; 

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            <p>{user.first_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <UserList />
    </div>
  );
}

export default App;
