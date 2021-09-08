import React from 'react';

const PropertyPresentation = ({description}) => {
  return (
    <div className="property-presentation">
      <div className="property-data">
        <h2 className="title-properties-responsive">Property</h2>
        <div className="properties properties-responsive">
          <div className="prop-1">
            <div>Useful area (m²): 315 m²</div>
            <div>Enterprise: no</div>
            <div>Bathrooms: 4 or more</div>
          </div>
        </div>
        <hr />
      </div>
      <div className="apartment-description-section">
        <section className="section-responsive">
          <h2>Description</h2>
          <div>
            <div>
              <p></p>
              {description}
            </div>
          </div>
        </section>
        <hr />
      </div>
    </div>
  );
};

export default PropertyPresentation;