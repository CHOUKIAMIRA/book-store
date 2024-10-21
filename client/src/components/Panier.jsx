import React from 'react';
import './Panier.css'; // Assure-toi d'importer le fichier CSS
import NavBar from './NavBar';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { removefromcart } from '../redux/action/bookAction';

const Panier = () => {
    const panier = useSelector(state => state.allbooks.panier);
    const dispatch = useDispatch();

    // Calcul du total du panier
    const total = panier.reduce((acc, item) => acc + item.book.price, 0);

    const handleCheckout = async () => {
        try {
            const res = await axios.post("http://localhost:5000/book/create-checkout-session", { panier });
            if (res.status === 200) {
                window.location.href = res.data.url; // Redirige l'utilisateur vers la page de paiement Stripe
            }
        } catch (error) {
            console.error("Erreur lors de la création de la session de checkout :", error);
        }
    };

    return (
        <div>
            <NavBar />
            <br /><br />
            <div className="panier-container">
                <h2>Votre Panier</h2>
                <div className="panier-content">
                    <div className="panier-products">
                        {panier.length === 0 ? (
                            <p>Votre panier est vide.</p>
                        ) : (
                            <ul className="panier-list">
                                {panier.map((e) => (
                                    <li key={e.book._id} className="panier-item">
                                        <img src={e.book.image} alt={e.book.title} className="panier-image" />
                                        <div className="panier-details">
                                            <h3>Title: {e.book.title}</h3>
                                            <h3>Price: {e.book.price} $</h3>
                                        </div>
                                        <button className="remove-button" onClick={() => dispatch(removefromcart(e.book._id))}>
                                            Retirer
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="panier-summary">
                        <h3>Total: {total} TND</h3>
                        <button className="checkout-button" onClick={handleCheckout}>Passer à la caisse</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panier;
