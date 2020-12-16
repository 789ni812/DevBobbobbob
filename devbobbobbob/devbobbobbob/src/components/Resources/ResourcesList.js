import React, { useEffect, useState } from "react";
import resourcesService from "../../services/resourcesService";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [currentResource, setCurrentResource] = useState(null);

  useEffect(() => {
    retrieveResources();
  }, []);

  const retrieveResources = () => {
    resourcesService.getAll().then((response) => {
      setResources(response.data.data);
    });
  };

  const setActiveResource = (resource) => {
    setCurrentResource(resource);
  };

  return (
    <div>
      resourcesList.js loaded
      <ul>
        {resources &&
          resources.map((resource) => (
            <li
              className="hyperlink"
              key={resource.id}
              onClick={() => setActiveResource(resource)}
            >
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
        </div>
      ) : (
        <div>Click a resource for more info...</div>
      )}
    </div>
  );
};

export default Resources;
