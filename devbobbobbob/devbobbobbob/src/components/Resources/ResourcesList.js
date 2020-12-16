import React, { useEffect, useState } from "react";
import resourcesService from "../../services/resourcesService";

// Material-ui
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
  console.log("currentResource", currentResource);
  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={4} justify="center">
        {resources.map((resource) => (
          <Grid item key={resource.id}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {resource.attributes.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setActiveResource(resource)}
                >
                  Read
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {currentResource ? (
        <div>
          <p>{currentResource.attributes.title}</p>
          <p>{currentResource.attributes.field_notes}</p>
        </div>
      ) : (
        <div>
          <p>Wot no resource selected.</p>
        </div>
      )}
    </div>
  );
};

export default Resources;

{
  /* <ul>
              {resources.map((resource) => (
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
                    href={
                      
                    }
                  >
                    {currentResource.attributes.field_external_reference.uri}
                  </a>
                </p>
              </div>
            ) : (
              <div>Click a resource for more info...</div>
            )} */
}
