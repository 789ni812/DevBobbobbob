import React, { useEffect } from "react";
import DevBobResourcesService from "../../services/DevBobResourcesService";

const DevBobResourcesList = () => {
  useEffect(() => {
    retrieveResources();
  }, []);

  const retrieveResources = () => {
    DevBobResourcesService.getAll().then((response) => {
      console.log("response: ", response);
    });
  };

  return <div>DevBobResourcesList.js loaded</div>;
};

export default DevBobResourcesList;
