import React from 'react';
import { Link } from 'react-router-dom';

const UserSideBar = () => {
  return (
    <div className="sidebar">
    <div className="d-flex flex-column">
        <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
              Gérer les commandes
            </div>
        </Link>
        <Link to="/user/productfavorite" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
               List Prefere
            </div>
        </Link>
        <Link to="/user/Adress" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
               Adresse
            </div>
        </Link>

        <Link to="/user/profile" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                Profile
            </div>
        </Link>

     

    </div>
</div>
  )
}

export default UserSideBar