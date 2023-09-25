import { useLoaderData, useParams } from "react-router-dom";
import donetedIcon from "../../assets/images/verified icon.gif"
import { useState } from "react";
const DonationDetails = () => {
  const donationDetails = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donationDetail = donationDetails.find(
    (donationDetail) => donationDetail.id === idInt
  );

  // Define a dynamic background image URL
  const backgroundImage = `url(${donationDetail.coverImg})`;
  const [isDonatedModalOpen, setIsDonatedModalOpen] = useState(true);
  const [donateCount, setDonateCount] = useState(0);
  const handleDonateClick = () => {
    if (donateCount === 1) {
      // Show the "Already donated" modal
      setIsDonatedModalOpen(false);
      document.getElementById('my_modal_2').showModal();
    } else {
        // Increment the donate count
        // setIsDonatedModalOpen(true);
      setDonateCount(donateCount + 1);
      // Show the regular modal
      document.getElementById('my_modal_2').showModal();
    }
  };

  // Define styles for the overlay and button container
  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust opacity as needed
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "20%", // Adjust the height of the overlay as needed
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  };

  // Define styles for the button container
  const buttonContainerStyle = {
    position: "absolute",
    left: 0,
    margin: "37px",
  };
  
  const textStyle={
    color: donationDetail.textColor
  }
  const borderStyle={
    border: '3px solid',
    borderColor: donationDetail.textColor
  }
  // Define styles for the button
  const buttonStyle = {
    backgroundColor: donationDetail.textColor,
    color: "white",
    padding: "10px 20px", // Adjust padding as needed
    border: "none"
  };

  // Define styles for the background image
  const backgroundImageStyle = {
    height: "80%", // Set the background image's height to 80%
    backgroundImage: backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="mx-[10px] md:mx-[50px] lg:mx-[100px] my-[20px] md:my-[50px]">
        {/* Banner part */}
      <div className="hero min-h-screen relative h-[80%] bg-cover rounded-xl" style={backgroundImageStyle}>
        <div style={overlayStyle}>
          <div style={buttonContainerStyle}>
            <button onClick={()=>handleDonateClick()} className="btn btn-primary text-[20px] font-semibold" style={buttonStyle}>Donate ${donationDetail.price}</button>
          </div>
        </div>

        <div className="hero-content text-center text-neutral-content">
          <div className="bottom-0 h-1/4"></div>
        </div>
      </div>
      {/* Details part */}
      <div>
        <h1 className="text-[40px] font-bold mt-[46px] mb-7">{donationDetail.title}</h1>
        <p className="text-xl text-gray-500">{donationDetail.description}</p>
        <button className="btn btn-primary text-[20px] font-semibold mt-[30px]" style={buttonStyle} onClick={()=>history.back()}>Back to donation</button>
      </div>
      {/* Open the modal */}
      {isDonatedModalOpen=== false && (
        <dialog id="my_modal_2" className="modal">
        <div className={`modal-box flex flex-col items-center`} style={borderStyle}>
         <img src={donetedIcon} alt="" className="w-[100px]"/>
          <h1 style={textStyle} className="text-4xl font-bold my-4">You have alreday donated</h1>
          <h1 className="text-3xl mb-2 font-bold" style={textStyle}>{`$${donationDetail.price}`} </h1>
          <h1 className="text-2xl font-bold mb-2" style={textStyle}>{`For \n"${donationDetail.title}"`} </h1>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      )}
      
      {isDonatedModalOpen === true &&(
        <dialog id="my_modal_2" className="modal">
  <div className={`modal-box flex flex-col items-center`} style={borderStyle}>
   <img src={donetedIcon} alt="" className="w-[100px]"/>
    <h1 style={textStyle} className="text-4xl font-bold my-4">Congratulation!</h1>
    <h1 className="text-xl mb-2" style={textStyle}>{`You have successfully donated `} </h1>
    <h1 className="text-3xl mb-2 font-bold" style={textStyle}>{`$${donationDetail.price}`} </h1>
    <h1 className="text-2xl font-bold mb-2" style={textStyle}>{`For \n"${donationDetail.title}"`} </h1>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
      )}

    </div>
  );
};

export default DonationDetails;
