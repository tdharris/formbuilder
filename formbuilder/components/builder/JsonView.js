import React from "react";

var omitDeep = require('omit-deep');

export default function JSONView(props) {

return (
  <div>
    <div>
      <h3>JSONSchema</h3>
      <div className="form-group">
        <textarea
          className="form-control"
          readOnly=""
          rows="20"
          style={{fontFamily: "monospace"}}
          value={JSON.stringify(props.schema, null, 2)}
          onChange={() => {}} />
      </div>
    </div> 
    <div>
      <h3>uiSchema</h3>
      <div className="form-group">
        <textarea
          className="form-control"
          readOnly=""
          rows="20"
          style={{fontFamily: "monospace"}}
          value={JSON.stringify(omitDeep(props.uiSchema, ['editSchema']), null, 2)}
          onChange={() => {}} />
      </div>
    </div>
  </div>
);
}
