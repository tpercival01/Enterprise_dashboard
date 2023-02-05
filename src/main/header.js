import { Profile } from "./modules/profile";
import { Socials } from "./modules/socials";
import { ProfileMenu } from "./modules/profilemenu";
import * as React from "react";

const Header = () => {
  const socials = [];
  const name = "Thomas";
  const [visible, setVisible] = React.useState(false);

  function handleClick() {
    document.getElementById("profilemenu").className = "animate";
    document.getElementById("profile").className = "animate-profile";
    document.getElementById("welcome-name").style.display = "none";
    if (visible) {
      setVisible(false);
      document.getElementById("profilemenu").className = "animate-out";
      document.getElementById("welcome-name").style.display = "block";
      document.getElementById("profile").className = "animate-profile-out";
    } else {
      setVisible(true);
    }
  }

  return (
    <div id='header'>
      <Profile onclick={handleClick} />
      <h3 id='welcome-name'>Welcome, {name}!</h3>
      <ProfileMenu />
      {socials.map((item, i) => (
        <Socials key={i} item={item} />
      ))}
    </div>
  );
};

export { Header };
