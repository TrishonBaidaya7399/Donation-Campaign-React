// import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const DonationCard = ({appliedDonation}) => {
    const {id,textColor,bgColor, btnColor,category, coverImg, title,price}=appliedDonation;
    // Define styles for dynamic colors
  const cardStyle = {
    backgroundColor: bgColor,
  };

  const buttonStyle = {
    color: textColor,
    backgroundColor: btnColor,
  };
  const viewBtnStyle = {
    backgroundColor: textColor,
  };
  const titleStyle = {
    color: textColor,
  };

    
    return (
        <div className="flex rounded-xl" style={cardStyle}>
            <div><img className="max-w-[200px] h-[100%] md:max-w-[250px] md:h-[100%] rounded-l-lg rounded-r-none" src={coverImg} alt="" /></div>
            <div className="p-3 md:p-6">
                <button className="text-[14px] font-semibold rounded-[5px] px-[5px] md:px-[10px] py-1 mb-1 md:mb-3" style={buttonStyle}>{category}</button>
                <h1 className="text-[18px] md:text-[24px] font-bold mb-0 md:mb-2">{title}</h1>
                <p style={titleStyle} className="mb-2 md:mb-4 text-[12px] md:text-[16px] font-bold">${price}</p>
                <NavLink to={`/donation/${id}`}><button className="text-[12px] md:text-[18px] text-white px-2 md:px-4 py-1 md:py-2 rounded-lg" style={viewBtnStyle}>View Details</button></NavLink>
            </div>
            
        </div>
    );
};

DonationCard.propTypes = {
    appliedDonation: PropTypes.object,
    
};

export default DonationCard;