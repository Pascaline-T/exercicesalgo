import React from "react";

const CardBody = (props) => {
  const [text, setText] = React.useState(true);

  if (text === true) {
    return (
      <>
        <button onClick={() => setText()}>Hide content</button>
        {props.screenshots.map((screen, url) => {
          return (
            <div>
              <img src={screen.url} alt="" />
            </div>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        <button onClick={() => setText(!text)}>Reveal content</button>
      </>
    );
  }
};

export default CardBody;
