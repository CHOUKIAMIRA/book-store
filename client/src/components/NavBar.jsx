import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaPlus, FaSignOutAlt } from 'react-icons/fa'; // Importation des icônes
import {  logoutUser } from '../redux/action/userAction';

function NavBar() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  // Pour obtenir l'utilisateur actuel
 
  const user = useSelector((state) => state.users.user);
  console.log(user)
  const navigate = useNavigate();
  const premier = user && user.email ? user.email.charAt(0).toUpperCase() : "A";
  const [isMenuOpen, setMenuOpen] = useState(false); // État pour ouvrir/fermer le menu

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(logoutUser());
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div style={styles.navbar}>
      <div style={styles.logo}><Link to="/home">Book Store</Link></div>

      <div style={styles.searchContainer}>
        <input
          type="search"
          placeholder='Search book'
          style={styles.searchInput}
        />
        <FaSearch style={styles.searchIcon} />
      </div>
<Link to='/panier'>
<div style={styles.cartContainer}>
        <FaShoppingCart size={30} color="white" />
        <span style={styles.cartText}>Panier</span>
      </div>
</Link>
      

      <div style={styles.userContainer} onClick={toggleMenu}>
        <div style={styles.userCircle}>{premier}</div>
        {isMenuOpen && (
          <div style={styles.dropdownMenu}>
            <div style={styles.menuItem} onClick={() => navigate('/add-book')}>
              <FaPlus style={styles.menuIcon} />
              <span>Add Book</span>
            </div>
            <div style={styles.menuItem} onClick={handleLogout}>
              <FaSignOutAlt style={styles.menuIcon} />
              <span>Logout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Styles utilisés dans le composant
const styles = {
  navbar: {
    maxWidth: '100vw',
    height: '100px',
    backgroundColor: 'lightblue',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  logo: {
    cursor:"pointer",
    fontSize: '36px',
    fontWeight: 'bold',
    color: 'yellow',
    fontFamily: 'cursive',
  },
  searchContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    width: '300px',
    height: '40px',
    borderRadius: '20px',
    padding: '0 15px',
    fontSize: '16px',
    border: 'none',
    outline: 'none',
  },
  searchIcon: {
    position: 'absolute',
    right: '10px',
    color: '#aaa',
  },
  cartContainer: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    cursor: 'pointer',
  },
  cartText: {
    marginLeft: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  userContainer: {
    position: 'relative',
    cursor: 'pointer',
  },
  userCircle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#007BFF',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  dropdownMenu: {
    width:"150px",
    position: 'absolute',
    top: '60px',
    right: '0',
    backgroundColor: 'white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    zIndex: '1',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    cursor: 'pointer',
    borderBottom: '1px solid #eee',
    transition: 'background-color 0.2s',
  },
  menuItemHover: {
    backgroundColor: '#f7f7f7',
  },
  menuIcon: {
    marginRight: '10px',
  },
};

export default NavBar;
