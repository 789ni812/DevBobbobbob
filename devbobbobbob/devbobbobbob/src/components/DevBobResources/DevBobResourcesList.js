import React, { useEffect, useState } from "react";
import DevBobResourcesService from "../../services/DevBobResourcesService";

const DevBobResourcesList = () => {
  const [devBobResources, setDevBobResources] = useState([]);
  const [currentResource, setCurrentResource] = useState(null);

  useEffect(() => {
    retrieveResources();
  }, []);

  const retrieveResources = () => {
    DevBobResourcesService.getAll().then((response) => {
      console.log("response: ", response);
      setDevBobResources(response.data.data);
    });
  };

  const setActiveResource = (resource) => {
    console.log("setActiveResource");
    setCurrentResource(resource);
  };

  return (
    <div>
      DevBobResourcesList.js loaded
      <ul>
        {devBobResources &&
          devBobResources.map((resource) => (
            <li key={resource.id} onClick={() => setActiveResource(resource)}>
              {resource.attributes.title}
            </li>
          ))}
      </ul>
      {currentResource ? (
        <div>
          Current resource selected
          <h2>Title: {currentResource.attributes.title}</h2>
          <p>{currentResource.attributes.field_notes}</p>
          <p>
            <a
              rel="noreferrer"
              target="_blank"
              href={currentResource.attributes.field_external_reference.uri}
            >
              {currentResource.attributes.field_external_reference.uri}
            </a>
          </p>
          {console.log("CurrentResource: ", currentResource)}
        </div>
      ) : (
        <div>Click a resource for more info...</div>
      )}
    </div>
  );
};

export default DevBobResourcesList;
