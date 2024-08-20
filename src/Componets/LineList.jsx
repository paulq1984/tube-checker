const LineList = ({ lines }) => {
  return (
    <>
      {lines.map((line) => (
        <div
          key={line.id}
          className="card lg:card-side bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">{line.name}</h2>
            <div className="card-actions justify-end">
              <p>{line.lineStatuses[0].statusSeverityDescription}</p>
              {line.lineStatuses[0].statusSeverity == 10 ? (
                <span className="badge badge-success gap-2">
                  <i className="fa-solid fa-circle-check"></i>
                </span>
              ) : (
                <span className="badge badge-warning gap-2">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </span>
              )}
            </div>
          </div>
          {/* <p>
            {line.lineStatuses[0].reason &&
              line.lineStatuses[0].reason}
          </p> */}
        </div>
      ))}
    </>
  );
};

export default LineList;
