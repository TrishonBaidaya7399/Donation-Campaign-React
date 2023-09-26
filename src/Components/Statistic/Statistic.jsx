import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { getStoredDonationApplication } from "../../utility/localstorage";
import { useLoaderData } from "react-router-dom";
import donationGIF from "../../assets/images/donation.gif"

const Statistic = () => {
  const donations = useLoaderData();
  const [yourDonations, setYourDonations] = useState(0);
  const [totalDonations, setTotalDonations] = useState(0);

  useEffect(() => {
    const storedDonationIds = getStoredDonationApplication();
    const totalDonationCount = donations.length;
    const yourDonationCount = storedDonationIds.length;

    setTotalDonations(totalDonationCount);
    setYourDonations(yourDonationCount);

   

    console.log(yourDonationCount, "and", totalDonationCount);
  }, [donations]);

  const totalDonationPercentage = (totalDonations / (yourDonations + totalDonations)) * 100;
  const yourDonationPercentage = 100 - totalDonationPercentage;

  const data = [
    { name: "Your Donations", value: yourDonationPercentage },
    { name: "Total Donations", value: totalDonationPercentage },
  ];

  const COLORS = ["#00C49F","#FF444A"]; // Your custom colors

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "center"} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  console.log(yourDonationPercentage);
  return (
    <div className="flex flex-col items-center justify-center py-[50px]">
      {
        yourDonationPercentage === 0 ?(
          <div className="flex flex-col items-center justify-center">
          <img src={donationGIF} alt="" />
          <h1 className="text-4xl font-bold text-[#FF444A]">
            {`You haven't made any donations yet`}
          </h1>
        </div>
        )
        :
        (
    <div>
      <div style={{ display: "flex", alignItems: "center", height: "60vh" , color:"white", fontWeight:"700", fontSize:"24px"}}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="40%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={110}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="flex flex-col md:flex-row gap-4 lg:gap-[56px] mt-[0px] lg:mt-[-50px] px-[auto]">
      <div className="flex gap-4 items-center justify-center text-[20px] font-semibold">Your Donation: {yourDonations} <div className="w-[80px] h-[10px] bg-[#00C49F] "></div></div>
      <div className="flex gap-4 items-center justify-center text-[20px] font-semibold">Total Donation: {totalDonations} <div className="w-[80px] h-[10px] bg-[#FF444A] "></div></div>
    </div>
          </div>
          
        )
      }
    
    </div>
  );
};

export default Statistic;
