function Table({ object }) {
  const columns = Object.keys(object[0]);

  function formatTitles(title) {
    const result = title.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
  }

  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th className="titles" key={index}>{formatTitles(column)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {object.map((row, index) => (
            <tr key={index}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
