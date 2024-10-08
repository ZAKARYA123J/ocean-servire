// src/controllers/userController.js
import prisma from '../prisma.js';

// Get all users
export const getUsers = async (c) => {
  const users = await prisma.user.findMany();
  return c.json(users);
};

// Create a new user
export const createUser = async (c) => {
  const data = await c.req.json();
  const { email, password, name } = data;

  const newUser = await prisma.user.create({
    data: {
      email,
      password,
      name,
    },
  });
  return c.json(newUser);
};

// Update a user
export const updateUser = async (c) => {
  const id = parseInt(c.req.param('id'));
  const data = await c.req.json();
  
  const updatedUser = await prisma.user.update({
    where: { id },
    data,
  });
  return c.json(updatedUser);
};

// Delete a user
export const deleteUser = async (c) => {
  const id = parseInt(c.req.param('id'));

  const deletedUser = await prisma.user.delete({
    where: { id },
  });
  return c.json({ message: 'User deleted', deletedUser });
};
