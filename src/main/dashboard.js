import { Site } from "./modules/sites";
import * as React from "react";
import { Form } from "./modules/form";
import { Button } from "./modules/button";

const test = [
  { name: "Stackoverflow", link: "" },
  { name: "JIRA", link: "" },
];

function Dashboard() {
  const [visible, setVisible] = React.useState(false);
  const [links, setLinks] = React.useState(test);
  const [webpage, setWebpage] = React.useState({
    name: "",
    link: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setWebpage({ ...webpage, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(JSON.stringify(links));
    setLinks([...links, webpage]);
    console.log(JSON.stringify(links));
    setVisible(false);
  };

  return (
    <div id='dashboard'>
      {links.map((item, i) => (
        <Site name={item.name} link={item.link} key={i} />
      ))}
      <Button
        id='add-link'
        text='+'
        onclick={() => {
          setVisible(true);
        }}
      />
      {visible && <Form hs={handleSubmit} hc={handleChange} />}
    </div>
  );
}

export { Dashboard };
