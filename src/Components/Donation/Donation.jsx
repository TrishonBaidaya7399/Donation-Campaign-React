import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationApplication } from "../../utility/localstorage";
import DonationCard from "../DonationCard/DonationCard";
import donationGIF from "../../assets/images/donation.gif";

const Donation = () => {
  const donations = useLoaderData();
  const [appliedDonations, setAppliedDonations] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to track whether to show all donations
  useEffect(() => {
    const storedDonationIds = getStoredDonationApplication();
    if (donations.length > 0) {
      const donationsApplied = donations.filter(donation =>
        storedDonationIds.includes(donation.id)
      );
      console.log('applied: ',donationsApplied,'Donations: ', donations,'Id: ', storedDonationIds);
      setAppliedDonations(donationsApplied);
    }
  }, []);

  // Function to toggle between showing all donations and showing only 4 donations
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Determine the number of donations to display
  const displayedDonations = showAll
    ? appliedDonations
    : appliedDonations.slice(0, 4);

  return (
    <div>
      {displayedDonations.length > 0 && (
        <div className="py-[50px] flex flex-col items-center px-[10px] md:px-[50px] lg:px-[100px] ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            {displayedDonations.map((appliedDonation) => (
              <DonationCard key={appliedDonation.id} appliedDonation={appliedDonation} />
            ))}
          </div>
          {!showAll && appliedDonations.length > 4 && (
            <button
              className="btn bg-green-600 text-[18px] font-semibold text-white mt-[40px] py-3 w-[150px] hover:text-green-600 hover:font-bold hover:bg-white hover:border-2 hover:border-green-600"
              onClick={toggleShowAll}
            >
              See All
            </button>
          )}
        </div>
      )}
      {displayedDonations.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <img src={donationGIF} alt="" />
          <h1 className="text-4xl font-bold text-[#FF444A]">
            {`You haven't made any donations yet`}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Donation;
