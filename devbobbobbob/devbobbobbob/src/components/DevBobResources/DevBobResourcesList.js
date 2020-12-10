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
    });
  };

  return (
    <div>
      DevBobResourcesList.js loaded
      <ul>
        {devBobResources &&
          devBobResources.map((resource) => (
            <li key={resource.id}>{resource.attributes.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default DevBobResourcesList;
