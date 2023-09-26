import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { RotatingLines } from "react-loader-spinner";
import PropTypes from "prop-types";
const Cards = ({ cardsSearchInput  }) => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setDonations(data);
        setLoading(false);
      });
  }, []);

  // Filter donations based on the search input
  const filteredDonations = donations.filter((donation) =>
    donation.category.toLowerCase().includes(cardsSearchInput.toLowerCase())
  );

  return (
    <div>
      {loading ? (
        <div className="flex flex-col justify-center items-center my-[10px] md:my-[50px]">
          <div>
            <RotatingLines
              strokeColor="blue"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              size={100}
            />
          </div>
          <h1 className="text-4xl mt-6 font-bold text-blue-500">Loading</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-[10px] md:mx-[30px] lg:mx-[100px] lg:mb-[100px] justify-center">
          {filteredDonations.length > 0 ? (
            filteredDonations.map((donation, idx) => (
              <Card key={idx} donation={donation} />
            ))
          ) : (
            <p>No matching results found.</p>
          )}
        </div>
      )}
    </div>
  );
};
Cards.propTypes = {
    cardsSearchInput: PropTypes.string,
  };
export default Cards;
