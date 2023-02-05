const Form = (props) => {
  return (
    <div id='link-form-div'>
      <span>New website link</span>
      <form id='link-form' onSubmit={props.hs}>
        <input
          type='text'
          name='name'
          id='name-inp'
          placeholder='Add a name for the website'
          onChange={props.hc}
        />
        <input
          type='text'
          name='link'
          id='link-inp'
          placeholder='The Link to the website'
          onChange={props.hc}
        />
        <button id='link-butt'>Add new website</button>
      </form>
    </div>
  );
};

export { Form };
