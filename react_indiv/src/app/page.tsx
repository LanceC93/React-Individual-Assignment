"use client";
import { ChangeEvent, FormEventHandler, useState } from 'react';
import Users from './components/Users';
import Signup from './components/Signup'; // Adjust path as needed

type User = {
  id: number;
  name: string;
  username: string;
  imageUrl: string;
  email: string;
  password: string;
};

const USERS_INIT: User[] = [
  {
    id: 1,
    name: 'Buzz Lightyear',
    username: 'blightyear',
    email: 'buzz.lightyear@gmail.com',
    password: 'password',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/63/Buzz_Lightyear_%28Toy_Story_character%29.png',
  },
];

export default function Home() {
  const[users, setUsers] = useState<User[]>(USERS_INIT);
  let i  = 2;

  const addUser = (newUser:User) => {
    setUsers((users) => [...users, newUser]);
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-2 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Home Page</h1>
        <Users users={users}/>
      </div>
      <Signup addUser={addUser}/>
    </div>
  );
}
