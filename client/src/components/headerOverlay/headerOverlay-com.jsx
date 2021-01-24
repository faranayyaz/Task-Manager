import React from "react";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";

const HeaderOverlay = ({ items, imgData }) => {
  let overlayToogle = 0;

  return (
    <div>
      <Button
        type="button"
        label=" "
        style={{
          backgroundImage: `url(${imgData})`,
          borderRadius: "50%",
          height: "50px",
          width: "50px",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        // onClick={(e) => overlayToogle.toggle(e)}
        onClick={(event) => overlayToogle.toggle(event)}
      />
      <Menu model={items} popup ref={(el) => (overlayToogle = el)} />
      {/* <OverlayPanel ref={(el) => (overlayToogle = el)}></OverlayPanel> */}
    </div>
  );
};

export default HeaderOverlay;
