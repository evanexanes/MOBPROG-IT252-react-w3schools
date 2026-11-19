import { createRoot } from 'react-dom/client'

const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 },
  { id: 4, name: 'Evan Exanes', age: 19
   }
];

function UserList() {
  return (
    <ul>
      {users.map(user =>
        <li key={user.id}>
          {user.name} is {user.age} years old
        </li>
      )}
    </ul>
  );
}

createRoot(document.getElementById('root')).render(
  <UserList />
)