// src/controllers/galleryController.js
import prisma from '../prisma.js';

// Get all galleries
export const getGalleries = async (c) => {
  const galleries = await prisma.gallary.findMany();
  return c.json(galleries);
};

// Create a new gallery
export const createGallery = async (c) => {
  const data = await c.req.json();
  const { img, title } = data;

  const newGallery = await prisma.gallary.create({
    data: {
      img,
      title,
    },
  });
  return c.json(newGallery);
};

// Update a gallery
export const updateGallery = async (c) => {
  const id = parseInt(c.req.param('id'));
  const data = await c.req.json();

  const updatedGallery = await prisma.gallary.update({
    where: { id },
    data,
  });
  return c.json(updatedGallery);
};

// Delete a gallery
export const deleteGallery = async (c) => {
  const id = parseInt(c.req.param('id'));

  const deletedGallery = await prisma.gallary.delete({
    where: { id },
  });
  return c.json({ message: 'Gallery deleted', deletedGallery });
};
