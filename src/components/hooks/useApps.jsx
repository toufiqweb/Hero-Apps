import React, { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      // ...
      setApps(data);
    };


    
    fetchData();
  }, []);

    //   console.log(apps);
  return { apps };
};

export default useApps;
