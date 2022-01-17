import React from "react";

const GenericError: React.FC<{ message: string }> = ({ message }) => (
  <>
    <p>Oops ! An unexpected error occured, please try again later...</p>
    <p>{message}</p>
  </>
);

export default GenericError;
