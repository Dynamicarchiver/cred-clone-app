import React from "react";
import './heroSection.css'
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="flex absolute-center flex-col max-width hero-section">
        <div className="hero-heading">
          rewards for paying credit card bills.
        </div>
        <div className="hero-sub-heading">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText={`Download CRED`} />
      </div>
    </div>
  );
};

export default HeroSection;
