import React from 'react';
import HousingCard from 'components/HousingCard/HousingCard';

const Housinglist = () => {
  return (
    <div className="row d-flex justify-content-around">
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
        <HousingCard />
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