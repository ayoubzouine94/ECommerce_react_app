import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
  return (
    <div className="sidebar">
    <div className="d-flex flex-column">
        <Link to="/admin/allorders" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
              Gérer les commandes
            </div>
        </Link>
        <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            Gestion des produits
            </div>
        </Link>
        <Link to="/admin/addbrand" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
               Ajouter Marque
            </div>
        </Link>

        <Link to="/admin/addcategory" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                Ajouter Categorie
            </div>
        </Link>

        <Link to="/admin/addsubcategory" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
               Ajouter une sous-catégorie
            </div>
        </Link>
        <Link to="/admin/addproduct" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                Ajouter Produits 
            </div>
        </Link>

    </div>
</div>
  )
}

export default AdminSideBar