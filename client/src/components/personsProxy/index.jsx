import React, { useEffect, useState } from "react";
import { MainDiv } from "./style";

function PersonsProxy() {
  const [people, setPeople] = useState(() => {
    const savedPeople = localStorage.getItem("people");
    return savedPeople ? JSON.parse(savedPeople) : [];
  });
  const [load, setLoad] = useState(false);

  const fetchPeople = async () => {
    setLoad(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/api/people");
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados");
      }
      const data = await response.json();
      setPeople(data.map((person) => ({ ...person, checked: false })));
    } catch (error) {
      console.error("Erro na requisição:", error);
    } finally {
      setLoad(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log(`${text} - Copiado!`);
      },
      (err) => {
        console.error("Erro ao copiar: ", err);
      }
    );
  };

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [inputText, setInputText] = useState("");

  const handleGenerateList = () => {
    const newItems = inputText
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => ({ text: line, checked: false }));
    setItems(newItems);
    setInputText("");
  };

  const handleCheckboxChange = (index, array, set) => {
    const updatedItems = [...array];
    updatedItems[index].checked = !updatedItems[index].checked;
    set(updatedItems);
  };

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
    localStorage.setItem("items", JSON.stringify(items));
  }, [people, items]);

  return (
    <MainDiv>
      <section id="personList">
        <button onClick={fetchPeople} disabled={load}>
          {load ? "..." : "Buscar Pessoas"}
        </button>
        <ul>
          {people.map((person, index) => (
            <li key={index}>
              <label>
                <input
                  className="customCheckbox"
                  type="checkbox"
                  checked={person.checked}
                  onChange={() =>
                    handleCheckboxChange(index, people, setPeople)
                  }
                />
                <span class="customLabel"></span>
              </label>
              <div>
                <p>
                  <button onClick={() => copyToClipboard(person.nome)}>
                    Copiar
                  </button>
                  <strong>Nome:</strong> {person.nome} <br />
                </p>
                <p>
                  <button onClick={() => copyToClipboard(person.cpf)}>
                    Copiar
                  </button>
                  <strong>CPF:</strong> {person.cpf}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="proxyList">
        <h1>Lista de Proxy</h1>
        <div>
          <textarea
            rows="10"
            cols="50"
            placeholder="Insira os dados aqui..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleGenerateList}>Gerar Lista</button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <label>
                <input
                  className="customCheckbox"
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheckboxChange(index, items, setItems)}
                />
                <span class="customLabel"></span>
              </label>
              <button onClick={() => copyToClipboard(item.text)}>Copiar</button>
              {item.text}
            </li>
          ))}
        </ul>
      </section>
    </MainDiv>
  );
}

export default PersonsProxy;
