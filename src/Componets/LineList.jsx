const LineList = ({ lines }) => {
  return (
    <div className="container list-group">
      {lines.map((line) => (
        <div className="row" id={line.id} key={line.id}>
          <div className="col-11">
            <h2>{line.name}</h2>
          </div>
          <div className="col-1">
            {line.lineStatuses[0].statusSeverity == 10 ? (
              <span className="badge text-bg-success">
                <i className="fa-solid fa-circle-check"></i>
              </span>
            ) : (
              <span className="badge text-bg-warning">
                <i className="fa-solid fa-triangle-exclamation"></i>
              </span>
            )}
          </div>
          <p className="reason">
            {line.lineStatuses[0].reason &&
              line.lineStatuses[0].reason}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LineList;
