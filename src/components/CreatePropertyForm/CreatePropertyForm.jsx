import React from 'react';

const CreatePropertyForm = () => {
  return (
    <form className='create-property-form' onSubmit="/">
      <input type="text" name="title" placeholder="Titre" />
      <input type="text" name="photo" placeholder="Image URL" />
      <select type="selection" name="location" placeholder="Ville">
        <option>-- Ville --</option>
        <option value="1">Paris</option>
      </select>
      <select type="selection" name="category">
        <option>-- Catégorie --</option>
        <option value="1">Maison</option>
      </select>
      <input
        type="number"
        name="price"
        placeholder="Prix/mois"
        min="100"
        max="2000"
      />
      <textarea type="text" name="description" placeholder="Description" />
      <input type="submit" value="Créer" name="submit-btn" />
    </form>
  );
};

export default CreatePropertyForm;