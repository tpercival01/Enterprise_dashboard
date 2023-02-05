const Site = (props) => {
  return (
    <a href={props.link} target='_blank' id='site'>
      <div>
        <img
          src='https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_960_720.png'
          alt=''
        />
      </div>
      <p id='site-title'>{props.name}</p>
    </a>
  );
};

export { Site };
