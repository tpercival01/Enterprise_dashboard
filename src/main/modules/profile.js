const Profile = (props) => {
  return (
    <div id='profile' onClick={props.onclick}>
      <img
        src='https://previews.123rf.com/images/anastasiatukaeva/anastasiatukaeva1702/anastasiatukaeva170200139/71898602-portrait-cartoon-of-a-bearded-man-in-a-barbershop-the-head-is-brutal-man-vector-illustration-isolate.jpg'
        alt='profile'
      />
    </div>
  );
};

export { Profile };
