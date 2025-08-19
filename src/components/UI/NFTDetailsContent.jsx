import React from "react";
import { Link } from "react-router-dom";
import EthImage from "../../images/ethereum.svg";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import CountdownTimer from "./CountdownTimer";

const NFTDetailsContent = ({ itemData, showFullLayout = true }) => {
  const containerClass = showFullLayout ? "container" : ""; 

  const rowClass = showFullLayout ? "row" : "d-flex flex-column flex-md-row";

  const imageColClass = showFullLayout
    ? "col-md-6 text-center"
    : "flex-md-50 text-center mb-4 mb-md-0";

  const infoColClass = showFullLayout ? "col-md-6" : "flex-md-50";

  const content = (
    <div className={containerClass}>
      <div className={rowClass}>
        <div className={imageColClass}>
          <img
            src={itemData.nftImage || nftImage}
            className="img-fluid img-rounded mb-sm-30"
            alt={itemData.title || "NFT"}
            style={
              showFullLayout ? {} : { maxHeight: "400px", objectFit: "cover" }
            }
          />
        </div>
        <div className={infoColClass}>
          <div className="item_info">
            <h2>{itemData.title || "Unnamed NFT"}</h2>

            <div className="item_info_counts">
              <div className="item_info_views">
                <i className="fa fa-eye"></i>
                {itemData.views || 0}
              </div>
              <div className="item_info_like">
                <i className="fa fa-heart"></i>
                {itemData.likes || 0}
              </div>
            </div>

            <p>
              {itemData.description || "No description available for this NFT."}
            </p>

            <div className="d-flex flex-row">
              <div className="mr40">
                <h6>Owner</h6>
                <div className="item_author">
                  <div className="author_list_pp">
                    <Link to={`/author/${itemData.ownerId}`}>
                      <img
                        className="img-fluid"
                        src={itemData.ownerImage || AuthorImage}
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="author_list_info">
                    <Link to={`/author/${itemData.ownerId}`}>
                      {itemData.ownerName || "Unknown Owner"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

              <div className="de_tab tab_simple">
              <div className="de_tab_content">
                <h6>Creator</h6>
                <div className="item_author">
                  <div className="author_list_pp">
                    <Link to={`/author/${itemData.creatorId}`}>
                      <img
                        className="img-fluid"
                        src={itemData.creatorImage || AuthorImage}
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="author_list_info">
                    <Link to={`/author/${itemData.creatorId}`}>
                      {itemData.creatorName || "Unknown Creator"}
                    </Link>
                  </div>
                </div>
              </div>              <div className="spacer-40"></div>

              {itemData.expiryDate && (
                <>
                  <h6>Auction Ends In</h6>
                  <div className="nft-item-countdown">
                    <CountdownTimer expiryDate={itemData.expiryDate} />
                  </div>
                  <div className="spacer-20"></div>
                </>
              )}

              <h6>Price</h6>
              <div className="nft-item-price">
                <img src={EthImage} alt="" />
                <span>{itemData.price || "0.00"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  
  if (showFullLayout) {
    return (
      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>
          <section aria-label="section" className="mt90 sm-mt-0">
            {content}
          </section>
        </div>
      </div>
    );
  }

  
  return content;
};

export default NFTDetailsContent;
