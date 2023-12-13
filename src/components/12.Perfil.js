import '../Styles/StylesComponents/11.Perfil.css'
import React from 'react';

const UserPage = ({ user }) => {
  return (
    <div className="container mt-5">
      <div className="card text-center">
        <img src={user.photo} className="card-img-top" alt="User" />
        <div className="card-body">
          <h1 className="card-title">{user.name}</h1>
          <p className="card-text">{user.email}</p>
          <p className="card-text">{user.phone}</p>
          <p className="card-text">{user.address}</p>
          <a href="#!" className="btn btn-primary">Mis compras</a>
        </div>
      </div>
    </div>
  );
};

export default UserPage;