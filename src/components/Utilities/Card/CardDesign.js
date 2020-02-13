import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 300,
      marginTop: '30px',
      marginLeft: '30px',
      marginRight: '30px',
      marginBottom: '30px'
    },
    media: {
      height: 6,
      paddingTop: "56.25%", // 16:9
      margin: '20%'
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    }
  }));


  export default useStyles;
