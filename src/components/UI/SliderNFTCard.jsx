import React from "react";
import NFTCard from "./NFTCard";

const SliderNFTCard = ({
  nft,
  showCountdown = true,
  showShareButtons = true,
}) => {
  return (
    <div className="keen-slider__slide">
      <NFTCard
        nft={nft}
        showCountdown={showCountdown}
        showShareButtons={showShareButtons}
        isSlider={true}
      />
    </div>
  );
};

export default SliderNFTCard;
