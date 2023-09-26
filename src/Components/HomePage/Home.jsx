import { useState } from "react";
import backgroundImg from "../../assets/images/Clothing.png";
import Cards from "../Cards/Cards";

const Home = () => {
  const [cardsSearchInput, setCardsSearchInput] = useState(""); // State to store search input for Cards

  const handleSearchClick = () => {
    // Define searchInput and setSearchInput within the handleSearchClick function
    const searchInput = document.getElementById("searchInput").value;
    setCardsSearchInput(searchInput);
  };

  return (
    <div className="flex flex-col mb-[30px] md:mb-[50px]">
      <div className="hero min-h-[600px] mt-[-130px] mb-[30px] md:mb-[100px]" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="hero-overlay bg-white bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-[30px] md:text-[40px] lg:text-[48px] text-black font-bold pb-[40px]">I Grow By Helping People In Need</h1>
            <div className="flex items-center justify-center">
              <input
                id="searchInput" // Add an id to the input field
                className="rounded-l-lg py-[15px] pl-[16px] w-[50%] border-2 border-gray-400 text-gray-700"
                type="text"
                placeholder="Search here...."
              />
              <button className="bg-[#FF444A] rounded-r-lg px-[28px] py-[15px] text-white text-xl" onClick={handleSearchClick}>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Cards cardsSearchInput={cardsSearchInput} />
      </div>
    </div>
  );
};

export default Home;
