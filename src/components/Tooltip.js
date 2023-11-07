import React from 'react';


function Tooltip(props) {
  const { text, children } = props;
  return (
    <div className="tooltip">
      {children}
      <span className="tooltiptext">{text}</span>
    </div>
  );
}

export default Tooltip;