import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function Header() {
  return (
    <Alert severity="info">
      <AlertTitle>Welcome!</AlertTitle>
      Select an item on a tree — <strong>Lets start!</strong>
    </Alert>
  );
}
