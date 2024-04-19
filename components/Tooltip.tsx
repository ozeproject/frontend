import React from 'react';

interface TooltipProps {
  text: string[]; 
}

const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  return (
    <div className="tooltip">
      {text.map((line, index) => (
        <React.Fragment key={index}>
          <span className="tooltip-text">{line}</span>
          {index < text.length - 1 && <br />} {/* Render <br /> if not the last line */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Tooltip;
