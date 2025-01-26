import React, { useEffect, useState } from "react";
import { MainDiv } from "./style";

function Prices() {
  const [rows, setRows] = useState(() => {
    const savedRows = localStorage.getItem("priceRows");
    return savedRows ? JSON.parse(savedRows) : [{ a: 0, b: 0, c: 0 }];
  });

  const handleInputChange = (index, column, value) => {
    const updatedRows = rows.map((row, rowIndex) => {
      if (rowIndex === index) {
        const newRow = { ...row, [column]: Number(value) };
        newRow.c = newRow.a - newRow.b;
        return newRow;
      }
      return row;
    });
    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([...rows, { a: null, b: null, c: 0 }]);
  };
  const deleteRow = (index) => {
    setRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("priceRows", JSON.stringify(rows));
  }, [rows]);

  const profitTotal = rows.reduce((sum, row) => sum + row.c, 0);

  return (
    <MainDiv>
      <div id="sheet">
        <h3>Lucro total: R$ {profitTotal}</h3>
        <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th></th>
              <th>Ganho</th>
              <th>Gasto</th>
              <th>Lucro</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <button onClick={() => deleteRow(index)}>🗑</button>
                </td>
                <td>
                  <input
                    className="gain"
                    type="number"
                    value={row.a}
                    onChange={(e) =>
                      handleInputChange(index, "a", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    className="spent"
                    type="number"
                    value={row.b}
                    onChange={(e) =>
                      handleInputChange(index, "b", e.target.value)
                    }
                  />
                </td>
                <td>R$ {row.c}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={addRow} style={{ marginTop: "10px" }}>
          Adicionar +
        </button>
      </div>
    </MainDiv>
  );
}

export default Prices;
