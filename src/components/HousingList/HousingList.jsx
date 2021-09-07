import React from 'react';
// import HousingCard from 'components/HousingCard/HousingCard';
import ApartmentCard from 'components/CardsApComponent/ApartmentCard';

const Housinglist = () => {
  return (
    <div className="m-5">
     <ul className="d-flex justify-content-around align-items-center flex-wrap m-5">
     {/* <ul className="d-flex flex-wrap m-5"> */}
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
     </ul>
    </div>
  );
};

export default Housinglist;

// BELOW IS THE CODE FOR ALL THE HOUSING WHEN DATA TO MAP WILL BE AVAILABLE

{/* <div class="row d-flex justify-content-around">
  {housingList.map((housingData) => (
    <HousingCard data={housingData} key={housingData.id} />
  ))}
</div> */}


// HERE IS SOMETHING TO KEEP FOR NOW, MAY BE DELETED LATER
{/* <div className="row d-flex justify-content-around">
  <HousingCard />
  <HousingCard />
  <HousingCard />
  <HousingCard />
  <HousingCard />
  <HousingCard />
</div> */}