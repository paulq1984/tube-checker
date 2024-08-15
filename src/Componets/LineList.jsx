const LineList = ({ lines }) => {
  return (
    <div>
      {lines.map((line) => (
        <div className={line.id} key={line.id}>
          <h2>{line.name} </h2>
          <h4> {line.lineStatuses[0].statusSeverityDescription}</h4>
          <p>
            {line.lineStatuses[0].reason &&
              line.lineStatuses[0].reason}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LineList;
