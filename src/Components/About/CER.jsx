import React from "react";
import BE from "../../Assets/BE Certificate.pdf";
import JSP from "../../Assets/Mern stack.png";

function CER() {
  return (
    <div>
      <div className="cer">
        <a href={BE} download className="btn btn-primary">
          BE Certificate
        </a>
        <a href={JSP} download className="btn ">
          MernStack Certificate
        </a>
      </div>
    </div>
  );
}

export default CER;
