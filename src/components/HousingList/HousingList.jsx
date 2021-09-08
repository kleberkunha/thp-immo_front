import React from 'react';
import ApartmentCard from 'components/CardsApComponent/ApartmentCard';
import './_housingList.scss';

const Housinglist = ({data}) => {
  return (

    <div className='container main-card-list m-5 align-item-center'>{
      data.map((listing) => {
        return <ApartmentCard listing={listing} key={listing.id} />
      })}
    </div>
  );
};
export default Housinglist;