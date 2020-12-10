import React, { useEffect, useState } from "react";
import DevBobResourcesService from "../../services/DevBobResourcesService";

const DevBobResourcesList = () => {
  const [devBobResources, setDevBobResources] = useState(null);

  useEffect(() => {
    retrieveResources();
  }, []);

  const retrieveResources = () => {
    DevBobResourcesService.getAll().then((response) => {
      console.log("response: ", response);
      setDevBobResources(response.data.data);
      console.log("DevBobResources: ", devBobResources);
    });
  };

  return (
    <div>
      DevBobResourcesList.js loaded
      <ul>
        {devBobResources &&
          devBobResources.map((resource, index) => (
            <li>{resource.attributes.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default DevBobResourcesList;
