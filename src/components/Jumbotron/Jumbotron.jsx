import React from 'react';

const Jumbotron = () => {
  return (
    <div className="home-header jumbotron bg-cover">
      <section className="hero jumbotron-catchphrase py-5">
        <div className="vertical-center row">
          <h1 className="py-3 d-flex justify-content-center">Le meilleur site pour toutes vos annonces immobilières</h1>
          <h3 className="py-3 d-flex justify-content-center">C'est gratuit, et c'est facile</h3>
        </div>
      </section>
    </div>
  );
};

export default Jumbotron;