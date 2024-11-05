"use client";
import { ChangeEvent, FormEventHandler, useState } from 'react';
import Card from './Card'; 
import Button from './Button';
import styles from './Signup.module.css'; 
import { useRouter } from 'next/navigation';

type User = {
  id: number;
  name: string;
  username: string;
  imageUrl: string;
  email: string;
  password: string;
};

interface SignUpProps {
  addUser: (newUser: User) => void;
}


export default function Signup({addUser}: SignUpProps) {
  const[name, setName] = useState('');
  const[username, setUsername] = useState('');
  const[image, setImage] = useState('');
  const[email, setEmail] = useState('');
  const[pass, setPass] = useState('');
  let i = 1; //index for id

  const handleSubmit:FormEventHandler = (event) => {
    i++;
    let newUser: User = {
      id: i,
      name: name,
      username: username,
      imageUrl: image,
      email: email,
      password: pass
    }
    addUser(newUser);
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-3">
    <Card className={`${styles.input} w-full max-w-lg p-3 bg-white shadow-md rounded-md`}>
      <h1 className="text-4xl font-bold mb-6 text-center">Signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
          id="name"
          type="text"
          placeholder="Enter your name"
          onChange={(e)=>setName(e.target.value)}
        />
        <label htmlFor="username">Username</label>
        <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
          id="username"
          type="text"
          placeholder="Enter your username"
          onChange={(e)=>setUsername(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
          id="email"
          type="email"
          placeholder="Enter your email"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
          id="password"
          type="password"
          placeholder="Enter your password"
          onChange={(e)=>setPass(e.target.value)}
        />
        <label htmlFor="imageLink">Image Link</label>
        <input className="border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
          id="imageLink"
          type="url"
          placeholder="Enter image URL"
          onChange={(e)=>setImage(e.target.value)}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </Card>
    </div>
  );
}
  