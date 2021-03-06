import { Spinner } from '@blueprintjs/core';

export default ({ loading, button, didRun, answer }) => {
  return (
    <div className="error-card">
      <pre className="">
        { didRun && (
          <code className="animated fadeIn">
            { answer }
          </code>
        )}
      </pre>
      <style>
        {`
          .error-card {
            height: 100%;
            background-color: #0f224a;
            color: white;
            font-family: monospace;
          }
          .error-card pre {
            margin: 0;
            padding: 10px;
            background: none;
            height: 100%;
            border-radius: 0px;
            color: #7aff97;
          }

          .error-card code {
            display: block;
            text-align: left;
          }

          .pt-spinner .pt-spinner-track {
            stroke: rgb(113, 237, 144);
          }
        `}
      </style>
    </div>

  );
} 