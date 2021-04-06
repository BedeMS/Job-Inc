import React from "react";
import classes from "./CompanyDescription.module.css";

function CompanyDescription(props) {
  return ( 
    <div className={classes.CompanyDescription}>
      <p className={classes.CompanyDescription__label}>About Us</p>
      <p className={classes.CompanyDescription__desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ratione
        tempora facere asperiores adipisci tempore perspiciatis consequuntur.
        Minus doloremque eum quibusdam laudantium quasi! Est qui minima eum
        maxime! Dignissimos, libero officiis! Suscipit voluptatibus id, at ipsam
        itaque, harum aut optio quia quae corporis fuga dolor explicabo
        voluptate natus inventore perferendis?
      </p>
    </div>
  );
}

export default CompanyDescription;
