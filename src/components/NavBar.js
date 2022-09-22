import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const list = links.map(link => {
    return (<a key={link} href={"#" + link}>{link}</a>)
  });

  console.log(list)

  return <nav>{list}</nav>;
}

export default NavBar;
