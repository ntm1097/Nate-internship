import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import CountdownTimer from "./CountdownTimer";

const NFTCard = ({
  nft,
  showCountdown = true,
  showShareButtons = true,
  isSlider = false,
}) => {
  // Always use nftId for consistency
  const linkToItemDetails = `/item-details/${nft.nftId}`;

  return (
    <div
      className={isSlider ? "" : "d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"}
      style={isSlider ? {} : { display: "block", backgroundSize: "cover" }}
    >
      <div className="nft__item">
        <div className="author_list_pp">
          <Link
            to={`/author/${nft.authorId}`}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={isSlider ? `Creator: ${nft.authorName}` : undefined}
          >
            <img
              className="img-fluid"
              src={nft.authorImage || AuthorImage}
              alt={nft.authorName || "Author"}
            />
            <i className="fa fa-check"></i>
          </Link>
        </div>

        {showCountdown && nft.expiryDate && (
          <div className="de_countdown">
            <CountdownTimer expiryDate={nft.expiryDate} />
          </div>
        )}

        <div className="nft__item_wrap">
          {showShareButtons && (
            <div className="nft__item_extra">
              <div className="nft__item_buttons">
                <button>Buy Now</button>
                <div className="nft__item_share">
                  <h4>Share</h4>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fa fa-facebook fa-lg"></i>
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fa fa-twitter fa-lg"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-envelope fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          )}
          <Link to={linkToItemDetails}>
            <img
              src={nft.nftImage || nftImage}
              className="img-fluid nft__item_preview"
              alt={nft.title || "NFT"}
            />
          </Link>
        </div>
        <div className="nft__item_info">
          <Link to={linkToItemDetails}>
            <h4>{nft.title || "NFT Title"}</h4>
          </Link>
          <div className="nft__item_price">{nft.price || "0"} ETH</div>
          <div className="nft__item_like">
            <i className="fa fa-heart"></i>
            <span>{nft.likes || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
