import React from 'react';

const Jumbotron = () => {
  return (
    <div className="home-header jumbotron bg-cover d-flex align-items-center justify-content-center">
      <section className="hero jumbotron-content d-flex row justify-content-center">
        <div className="">
          <h1 className="py-3 d-flex justify-content-center">Le meilleur site pour toutes vos annonces immobilières</h1>
          <h3 className="py-3 d-flex justify-content-center">C'est gratuit, et c'est facile</h3>
        </div>
        <div className=" py-3 my-5 d-flex justify-content-center search-container">
          <form className="">
            <input type="text" className="search-input d-flex justify-content-center" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Jumbotron;