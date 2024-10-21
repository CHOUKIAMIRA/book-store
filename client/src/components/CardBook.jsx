import React, { useEffect, useState } from 'react';
import './CardBook.css'; // Assurez-vous d'ajouter un fichier CSS pour le style
import { addtocart, getBooks } from '../redux/action/bookAction';
import { useDispatch, useSelector } from 'react-redux';


function CardBook() {
  const dispatch = useDispatch();
 
  
  // Charger les livres au montage du composant
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  // Récupérer les livres et l'utilisateur depuis le store Redux
  const books = useSelector((state) => state.allbooks.books);
 




 
  

  return (
    <div className="card-book-container">
      {books.map((e) => (
        <div key={e._id} className="card-book">
          {e.image ? <img src={e.image} alt={e.title || 'Untitled'} className="card-book-image" /> : <p>No Image Available</p>}
          <div className="card-book-content">
            <h3 className="card-book-title">{e.title || 'No Title'}</h3>
            <p className="card-book-description">{e.description || 'No Description'}</p>
            <div className="card-book-footer">
              <span className="card-book-price">{e.price ? `$${e.price}` : 'Price not available'}</span>
              <button  className="card-book-btn" onClick={()=>dispatch(addtocart(e))}>add to cart</button>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardBook;
