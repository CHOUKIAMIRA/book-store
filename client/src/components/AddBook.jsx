import React, { useState } from 'react';
import NavBar from './NavBar';
import './addbook.css';
import { addBook } from '../redux/action/bookAction';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handelSubmit = async (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "ml_default");

    try {
      let imageUrl = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"; // Image par défaut

      if (image) {  // Vérifie si une image est sélectionnée
        const res = await axios.post("https://api.cloudinary.com/v1_1/djpsbuswk/upload", formData);
        imageUrl = res.data.url;  // Utilise l'URL de Cloudinary si l'image est téléchargée
      }

      dispatch(addBook({ title, image: imageUrl, price, description }));

      // Réinitialiser le formulaire
      setTitle("");
      setImage(null);
      setDescription("");
      setPrice(0);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <form onSubmit={handelSubmit}>
          <h1>Add New Book</h1>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="picture">Book Picture</label>
            <input
              type="file"
              id="picture"
              className="form-control"
              onChange={(e) => setImage(e.target.files[0])}  // On récupère le premier fichier sélectionné
              required
            />
          </div>

          <br />
          <button type="submit" className="btn btn-primary">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
