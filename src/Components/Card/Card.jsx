import PropTypes from 'prop-types';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
  import { saveDonationApplication } from '../../utility/localstorage';
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
 
  // State to track whether the item is added
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    if (isAdded) {
      toast.warn(`Item "${title}" is already added.`, {
        theme: "dark"
      });
    } else {
      saveDonationApplication(id);
      toast.success(`Congratulations! Your donation item is added for:\n "${title}" `,{
        theme: "colored"
      });
      setIsAdded(true); // Mark the item as added
    }
  };
  return (
    <div onClick={()=>handleClick()}>
      <div className="card rounded-lg" style={cardStyle}>
        <figure >
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
      <ToastContainer />
    </div>
  );
};
Card.propTypes = {
  donation: PropTypes.object,
};
export default Card;
