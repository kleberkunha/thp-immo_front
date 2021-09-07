import React from 'react';
import ApartmentCard from 'components/CardsApComponent/ApartmentCard';
import './_housingList.scss';

const Housinglist = () => {
  return (
    <div className="container main-card-list">
      <ApartmentCard/>
      <ApartmentCard/>
      <ApartmentCard/>
      <ApartmentCard/>
      <ApartmentCard/>
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