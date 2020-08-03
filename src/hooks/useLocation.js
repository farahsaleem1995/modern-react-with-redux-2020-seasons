import { useState, useEffect } from "react";

const useLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
      },
      (err) => {
        setError(err.message);
      }
    );
  }, []);

  return [latitude, error];
};

export default useLocation;
