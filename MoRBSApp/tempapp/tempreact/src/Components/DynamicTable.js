import React from 'react';
import "../CSS/DynamicTable.css";

function DynamicTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Hash Key</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.hashkey}>
            <td>{item.hashkey}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DynamicTable;