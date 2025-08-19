import React from "react";

const NFTCardSkeleton = () => {
  return (
    <div
      className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
      style={{ display: "block", backgroundSize: "cover" }}
    >
      <div className="nft__item">
        <div className="author_list_pp">
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#f0f0f0",
              backgroundImage:
                "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite",
            }}
          />
        </div>
        <div className="nft__item_wrap">
          <div
            style={{
              width: "100%",
              height: "250px",
              backgroundColor: "#f0f0f0",
              backgroundImage:
                "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
              backgroundSize: "200% 100%",
              borderRadius: "8px",
              animation: "shimmer 1.5s infinite",
            }}
          />
        </div>
        <div className="nft__item_info">
          <div
            style={{
              width: "70%",
              height: "20px",
              backgroundColor: "#f0f0f0",
              backgroundImage:
                "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
              backgroundSize: "200% 100%",
              borderRadius: "4px",
              marginBottom: "10px",
              animation: "shimmer 1.5s infinite",
            }}
          />
          <div
            style={{
              width: "50%",
              height: "16px",
              backgroundColor: "#f0f0f0",
              backgroundImage:
                "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
              backgroundSize: "200% 100%",
              borderRadius: "4px",
              animation: "shimmer 1.5s infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NFTCardSkeleton;
