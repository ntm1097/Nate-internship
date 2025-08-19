import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import SliderNFTCard from "../UI/SliderNFTCard";
import SliderNFTCardSkeleton from "../UI/SliderNFTCardSkeleton";
import "../../css/styles/KeenCarousel.css";

const NewItems = () => {
  const [nftData, setNftData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const sliderRef = React.useRef(null);
  const [slider, setSlider] = React.useState(null);

  React.useEffect(() => {
    const fetchNftData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
        );
        setNftData(response.data);
      } catch (error) {
        console.error("Error fetching NFT data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNftData();
  }, []);

  React.useEffect(() => {
    if (sliderRef.current && nftData.length > 0 && !loading) {
      const keenSlider = new KeenSlider(sliderRef.current, {
        loop: true,
        mode: "free",
        slides: {
          perView: 4,
          spacing: 15,
        },
        breakpoints: {
          "(max-width: 1200px)": {
            slides: { perView: 3, spacing: 15 },
          },
          "(max-width: 992px)": {
            slides: { perView: 2, spacing: 15 },
          },
          "(max-width: 768px)": {
            slides: { perView: 2, spacing: 12 },
          },
          "(max-width: 500px)": {
            slides: { perView: 1, spacing: 10 },
          },
        },
      });
      setSlider(keenSlider);

      return () => {
        keenSlider.destroy();
      };
    }
  }, [nftData, loading]);

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="slider-container">
              <div ref={sliderRef} className="keen-slider">
                {loading
                  ? 
                    Array.from({ length: 4 }).map((_, index) => (
                      <SliderNFTCardSkeleton key={`skeleton-${index}`} />
                    ))
                  : nftData.map((item) => (
                      <SliderNFTCard
                        key={item.id}
                        nft={item}
                        showCountdown={true}
                        showShareButtons={true}
                      />
                    ))}
              </div>

              {slider && !loading && (
                <>
                  <button
                    className="slider-arrow slider-arrow--left"
                    onClick={() => slider.prev()}
                  >
                    ‹
                  </button>
                  <button
                    className="slider-arrow slider-arrow--right"
                    onClick={() => slider.next()}
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
