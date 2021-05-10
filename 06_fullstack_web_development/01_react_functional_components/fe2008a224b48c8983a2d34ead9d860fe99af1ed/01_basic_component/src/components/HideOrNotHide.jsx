import React from "react";

export const HideOrNotHide = () => {
  // Code here
  const [text, setText] = React.useState(true);

  if (text === true) {
    return (
      <>
        <button onClick={() => setText()}>Hide content</button>
        <p>Hey you !</p>
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
