import { BsGlobeAmericas } from "react-icons/bs";
import { GiDominoTiles } from "react-icons/gi";
import { FaSackDollar } from "react-icons/fa6";
import { PiDevicesFill } from "react-icons/pi";

import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="features-sec">
      <div className="features-wrapper">
        <FeatureCard>
          <BsGlobeAmericas className="icon" />
          <h3>Works Worldwide</h3>
          <p>
            No other free streaming service delivers more content to and from
            more countries worldwide.
          </p>
        </FeatureCard>

        <FeatureCard>
          <GiDominoTiles className="icon" />
          <h3>Thousands of Titles</h3>
          <p>
            Choose from movies, shows, sports and music documentaries, AMC
            series, Live TV and more.
          </p>
        </FeatureCard>

        <FeatureCard>
          <FaSackDollar className="icon" />
          <h3>Always 100% Free</h3>
          <p>
            Welcome to instant gratification at its best. Watch now without any
            payment or subscription and end the search for free movie websites.
          </p>
        </FeatureCard>
        <FeatureCard>
          <PiDevicesFill  className="icon" />
          <h3>Device-Friendly</h3>
          <p>
            Stream the good stuff from your favorite devices including Apple,
            Android, Smart TVs and more.
          </p>
        </FeatureCard>
      </div>
    </section>
  );
}
