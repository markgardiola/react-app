const ListGroup = () => {
  const items = [
    "Sto. Tomas City",
    "Tanauan City",
    "Calamba City",
    "Lipa City",
  ];

  return (
    <div>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
