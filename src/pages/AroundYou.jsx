import axios from "axios";

import { Error, Loader, SongCard } from "../components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  useEffect(() => {
    axios
      .get(
        "https://geo.ipify.org/api/v2/country?apiKey=at_cytPwx7OHeSuayFIynVpG3cfF8INO"
      )
      .then((res) => setCountry(res?.data?.location?.country));
  }, [country]);
  return <div className="w"></div>;
};

export default AroundYou;
