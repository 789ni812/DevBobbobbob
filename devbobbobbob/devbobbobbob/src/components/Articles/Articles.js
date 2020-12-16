import React, { useEffect, useState } from "react";
import ArticlesService from "../../services/ArticlesService";

import Moment from "moment";
//material-ui
// Grids and cards layout
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import imageForTesting from "../../assets/images/The-Mightly-Spud-Logo-WEB.jpg";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);

  useEffect(() => {
    retrieveArticles();
  }, []);

  const retrieveArticles = () => {
    ArticlesService.getAll().then((response) => {
      setArticles(response.data.data);
    });
  };

  const setActiveArticle = (article) => {
    setCurrentArticle(article);
  };

  /**
   * Create a Div tag and then renders the HTML included in the string
   * ref: https://reactjs.org/docs/dom-elements.html
   * //TODO Move this helper function to a utility file and include it.
   * @param {string } htmlToRender
   * @returns {string} rendered HTML wrapped in <div></div>
   */
  const dangourslySetInnerHTMLHelper = (htmlToRender) => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: htmlToRender,
        }}
      ></div>
    );
  };

  /**
   * dateLongHelper reformats the datetime format into a user readable long date format e.g. 1st december 2020 18:13
   * //TODO Move to a Utility file
   * @param {string} dateToParse the dateTime string
   */
  const dateLongHelper = (dateToParse) => {
    return <span>{Moment(dateToParse).format("do MMMM YYYY, kk:mm")}</span>;
  };

  return (
    <div>
      {currentArticle ? (
        <div>
          <Button
            size="small"
            color="primary"
            onClick={() => setCurrentArticle(null)}
          >
            ...Back to Article List
          </Button>
          <h2>{currentArticle.attributes.title}</h2>
          <p>Created on: {dateLongHelper(currentArticle.attributes.created)}</p>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={imageForTesting}
            title="Contemplative Reptile"
          />

          {currentArticle.attributes.body ? (
            dangourslySetInnerHTMLHelper(currentArticle.attributes.body.value)
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div style={{ marginTop: 20, padding: 30 }}>
          <Grid container spacing={4} justify="center">
            {articles.map((resource) => (
              <Grid item key={resource.id}>
                <Card>
                  <CardActionArea onClick={() => setActiveArticle(resource)}>
                    {/* 
                  //FIXME CORS problem loading image
                      // REF: https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/fetching-resources-get#s-basic-get-example
                      // Above ref has example that work when bringing back image data 
                      // Looks like will need to make a seperate call to the image using the article and the image query string info
                      // REF Query string info: ?include=field_image&fields[file--file]=uri,url
                      // See Postman example that works here: https://dark-meadow-490350.postman.co/workspace/drupal-9~1da9e49b-4657-43d6-87e2-36fbd854bf53/request/11142804-494f3aef-40b6-44bf-a8f0-b13918b25d4a
                 */}
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={imageForTesting}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {resource.attributes.title}
                      </Typography>
                      <Typography component="p">
                        {resource.attributes.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => setActiveArticle(resource)}
                    >
                      Read
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Articles;
