import React from "react";
import { Button } from "react-bootstrap";
import "./loaderButton-sty.css";

export default function LoaderButton({
  isLoading,
  className = "spinning glyphicon",
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${className} spinning glyphicon`}
      disabled={disabled || isLoading}
      {...props}
    >
      {props.children}
    </Button>
  );
}
