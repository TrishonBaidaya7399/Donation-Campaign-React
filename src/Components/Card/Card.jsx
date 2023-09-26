import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom'; // Import NavLink

import 'react-toastify/dist/ReactToastify.css';


const Card = ({ donation }) => {
  const { id, category, coverImg, title, textColor, bgColor, btnColor } = donation;

  // Define styles for dynamic colors
  const cardStyle = {
    backgroundColor: bgColor,
  };

  const buttonStyle = {
    color: textColor,
    backgroundColor: btnColor,
  };
  const titleStyle = {
    color: textColor,
  };

  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    // Check if the item is added 
    const isItemAdded = localStorage.getItem(`addedItem_${id}`);
    setIsAdded(!!isItemAdded);
  }, [id]);

  const handleClick = () => {
    if (isAdded) {
      // toast.warn(`Item "${title}" is already added.`, {
      //   theme: "dark"
      // });
    } else {
  
      // Mark the item as added in localStorage
      localStorage.setItem(`addedItem_${id}`, 'true'); 
      // toast.success(`Congratulations! Your donation item is added for:\n "${title}" `, {
      //   theme: "colored"
      // });
      setIsAdded(true); // Mark the item as added in component state
    }
  };

  return (
    <NavLink to={`/donation/${id}`} onClick={handleClick}> {/* Use NavLink with to prop */}
      <div className="card rounded-lg" style={cardStyle}>
        <figure>
          <img className="w-full" src={coverImg} alt={category} />
        </figure>
        <div className="card-body p-4">
          <div className="card-actions">
            <button className="btn" style={buttonStyle}>
              {category}
            </button>
          </div>
          <h2 className="card-title" style={titleStyle}>{title}</h2>
        </div>
      </div>
      {/* <ToastContainer></ToastContainer> */}
    </NavLink>
  );
};

Card.propTypes = {
  donation: PropTypes.object,
};

export default Card;
