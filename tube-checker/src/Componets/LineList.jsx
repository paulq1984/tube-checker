const LineList = ({ lines }) => {
  return (
    <div>
      {lines.map((line) => (
        <h2 key={line.id} className={line.id}>
          {line.name}
        </h2>
      ))}
    </div>
  );
};

export default LineList;
