// import React from 'react';
import PropTypes from 'prop-types';
const DonationCard = ({appliedDonation}) => {
    const {textColor,bgColor, btnColor,category, coverImg, title,price}=appliedDonation;
    // Define styles for dynamic colors
  const cardStyle = {
    backgroundColor: bgColor,
  };

  const buttonStyle = {
    color: textColor,
    backgroundColor: btnColor,
  };
  const viewButnStyle = {
    backgroundColor: textColor,
  };
  const titleStyle = {
    color: textColor,
  };

    
    return (
        <div className="flex rounded-xl" style={cardStyle}>
            <div><img className="max-w-[230px] h-[100%] rounded-l-lg rounded-r-none" src={coverImg} alt="" /></div>
            <div className="p-6">
                <button className="text-[14px] rounded-sm px-[10px] py-1 mb-3" style={buttonStyle}>{category}</button>
                <h1 className="text-[24px] font-bold mb-2">{title}</h1>
                <p style={titleStyle} className="mb-4 text-[16px] font-bold">${price}</p>
                <button className="text-[18px] text-white px-4 py-2 rounded-lg" style={viewButnStyle}>View Details</button>
            </div>
            
        </div>
    );
};

DonationCard.propTypes = {
    appliedDonation: PropTypes.object,
    
};

export default DonationCard;