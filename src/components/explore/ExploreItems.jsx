import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import NFTCard from "../UI/NFTCard";
import NFTCardSkeleton from "../UI/NFTCardSkeleton";
import SortFilter from "../UI/SortFilter";

const ExploreItems = () => {
  const [nftData, setNftData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(8);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentSort, setCurrentSort] = useState("");

  useEffect(() => {
    const fetchNftData = async () => {
      try {
        setLoading(true);
        // Build API URL with filter parameter
        const baseUrl =
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore";
        const apiUrl = currentSort
          ? `${baseUrl}?filter=${currentSort}`
          : baseUrl;

        const response = await axios.get(apiUrl);
        setNftData(response.data);
        setVisibleItems(8);
      } catch (error) {
        console.error("Error fetching NFT data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNftData();
  }, [currentSort]); 

  useEffect(() => {
    if (nftData.length > 0) {
      const preloadImages = async () => {
        const imagesToPreload = nftData.slice(0, 8);

        const imagePromises = imagesToPreload.map((nft) => {
          return new Promise((resolve, reject) => {
            if (nft.nftImage) {
              const img = new Image();
              img.onload = () => resolve(`NFT image loaded: ${nft.title}`);
              img.onerror = () =>
                reject(`Failed to load NFT image: ${nft.title}`);
              img.src = nft.nftImage;
            }
            if (nft.authorImage) {
              const authorImg = new Image();
              authorImg.onload = () =>
                resolve(`Author image loaded: ${nft.authorName}`);
              authorImg.onerror = () =>
                reject(`Failed to load author image: ${nft.authorName}`);
              authorImg.src = nft.authorImage;
            }

            if (!nft.nftImage && !nft.authorImage) {
              resolve("No images to preload");
            }
          });
        });

        try {
          await Promise.allSettled(imagePromises);
        } catch (error) {
          console.log("Some images failed to preload:", error);
        }
      };

      preloadImages();
    }
  }, [nftData]);

  useEffect(() => {
    if (visibleItems > 8 && nftData.length > 0) {
      const preloadAdditionalImages = async () => {
        const startIndex = visibleItems - 4;
        const newImages = nftData.slice(startIndex, visibleItems);

        const imagePromises = newImages.map((nft) => {
          return new Promise((resolve) => {
            if (nft.nftImage) {
              const img = new Image();
              img.onload = () =>
                resolve(`Additional NFT image loaded: ${nft.title}`);
              img.onerror = () =>
                resolve(`Failed to load additional NFT image: ${nft.title}`);
              img.src = nft.nftImage;
            }

            if (nft.authorImage) {
              const authorImg = new Image();
              authorImg.onload = () =>
                resolve(`Additional author image loaded: ${nft.authorName}`);
              authorImg.onerror = () =>
                resolve(
                  `Failed to load additional author image: ${nft.authorName}`
                );
              authorImg.src = nft.authorImage;
            }

            if (!nft.nftImage && !nft.authorImage) {
              resolve("No additional images to preload");
            }
          });
        });

        try {
          await Promise.allSettled(imagePromises);
        } catch (error) {
          console.log("Some additional images failed to preload:", error);
        }
      };

      preloadAdditionalImages();
    }
  }, [visibleItems, nftData]);

  const handleSortChange = (newSort) => {
    setCurrentSort(newSort);
  };

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleItems((prev) => prev + 4);
      setLoadingMore(false);
    }, 500);
  };

  const hasMoreItems = visibleItems < nftData.length;

  return (
    <>
      <SortFilter onSortChange={handleSortChange} currentSort={currentSort} />
      {loading
        ? new Array(8)
            .fill(0)
            .map((_, index) => <NFTCardSkeleton key={`skeleton-${index}`} />)
        : nftData
            .slice(0, visibleItems)
            .map((nft) => (
              <NFTCard
                key={nft.id}
                nft={nft}
                showCountdown={true}
                showShareButtons={true}
              />
            ))}

      {!loading && hasMoreItems && (
        <div className="col-md-12 text-center">
          <button
            onClick={handleLoadMore}
            disabled={loadingMore}
            className="btn-main lead"
            style={{
              opacity: loadingMore ? 0.6 : 1,
              cursor: loadingMore ? "not-allowed" : "pointer",
            }}
          >
            {loadingMore ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </>
  );
};

export default ExploreItems;
