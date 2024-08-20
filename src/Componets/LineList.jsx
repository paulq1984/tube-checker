const LineList = ({ lines }) => {
  return (
    <>
      {lines.map((line) => (
        <div
          key={line.id}
          className="card lg:card-side bg-base-100 shadow-xl collapse"
        >
          <input type="radio" name="my-accordion-1" />
          <div className="card-body collapse-title">
            <h2 className={`card-title ${line.id}`}>{line.name}</h2>
            <div className="card-actions justify-end">
              <p>{line.lineStatuses[0].statusSeverityDescription}</p>
              {line.lineStatuses[0].statusSeverity == 10 ? (
                <span className="badge badge-success gap-2">
                  <i className="fa-solid fa-circle-check"></i>
                </span>
              ) : (
                <span
                  className="badge badge-warning gap-2"
                  id={line.id}
                >
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </span>
              )}
            </div>
          </div>
          {line.lineStatuses[0].reason && (
            <div className="collapse-content">
              {line.lineStatuses[0].reason}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default LineList;
