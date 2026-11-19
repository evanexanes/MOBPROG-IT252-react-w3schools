/*
Program name: main.jsx
Description: Entry point of the app. Mounts the App component into the #root element of
   index.html inside React StrictMode, which adds extra development checks.
Author: Exanes, Evan Prens
Date Compiled: 11/05/2026
======================================================================
Date           Description                      Programmer name
======================================================================
11/05/2026     Initial Implementation           EPPE
11/09/2026     Added header and comments        EPPE
======================================================================
*/

import { createRoot } from 'react-dom/client'

const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
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
