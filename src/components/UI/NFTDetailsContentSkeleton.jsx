import React from "react";
import Skeleton from "./Skeleton";

const NFTDetailsContentSkeleton = ({ showFullLayout = true }) => {
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
          <Skeleton
            width="100%"
            height={showFullLayout ? "400px" : "300px"}
            borderRadius="12px"
          />
        </div>
        <div className={infoColClass}>
          <div className="item_info">
            {/* Title */}
            <Skeleton width="60%" height="36px" borderRadius="6px" />

            <div className="spacer-20"></div>

            {/* Views and Likes */}
            <div className="d-flex gap-3 mb-3">
              <Skeleton width="80px" height="24px" borderRadius="4px" />
              <Skeleton width="80px" height="24px" borderRadius="4px" />
            </div>

            {/* Description */}
            <div className="mb-4">
              <Skeleton width="100%" height="20px" borderRadius="4px" />
              <div className="spacer-10"></div>
              <Skeleton width="85%" height="20px" borderRadius="4px" />
              <div className="spacer-10"></div>
              <Skeleton width="70%" height="20px" borderRadius="4px" />
            </div>

            {/* Owner Section */}
            <div className="mb-4">
              <Skeleton width="60px" height="20px" borderRadius="4px" />
              <div className="spacer-10"></div>
              <div className="d-flex align-items-center">
                <Skeleton width="40px" height="40px" borderRadius="50%" />
                <div className="ml-3">
                  <Skeleton width="120px" height="18px" borderRadius="4px" />
                </div>
              </div>
            </div>

            {/* Creator Section */}
            <div className="mb-4">
              <Skeleton width="70px" height="20px" borderRadius="4px" />
              <div className="spacer-10"></div>
              <div className="d-flex align-items-center">
                <Skeleton width="40px" height="40px" borderRadius="50%" />
                <div className="ml-3">
                  <Skeleton width="140px" height="18px" borderRadius="4px" />
                </div>
              </div>
            </div>

            {/* Countdown */}
            <div className="mb-4">
              <Skeleton width="120px" height="20px" borderRadius="4px" />
              <div className="spacer-10"></div>
              <Skeleton width="150px" height="32px" borderRadius="6px" />
            </div>

            {/* Price */}
            <div>
              <Skeleton width="50px" height="20px" borderRadius="4px" />
              <div className="spacer-10"></div>
              <div className="d-flex align-items-center">
                <Skeleton width="24px" height="24px" borderRadius="50%" />
                <div className="ml-2">
                  <Skeleton width="100px" height="28px" borderRadius="4px" />
                </div>
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

export default NFTDetailsContentSkeleton;
