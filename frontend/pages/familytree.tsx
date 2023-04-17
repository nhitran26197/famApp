import React, { useState } from "react";

function Person({ name, birthdate, children, onAddChild }) {
  const [newChildName, setNewChildName] = useState("");
  const [newChildBirthdate, setNewChildBirthdate] = useState("");

  function handleAddChild(event) {
    event.preventDefault();
    if (newChildName && newChildBirthdate) {
      onAddChild({ name: newChildName, birthdate: newChildBirthdate });
      setNewChildName("");
      setNewChildBirthdate("");
    }
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>Born: {birthdate}</p>
      {children.length > 0 && (
        <div style={{ marginLeft: "50px" }}>
          {children.map((child) => (
            <Person
              key={child.name}
              name={child.name}
              birthdate={child.birthdate}
              children={child.children}
              onAddChild={(newChild) => onAddChild(newChild, name)}
            />
          ))}
        </div>
      )}
      <form onSubmit={handleAddChild}>
        <label>
          Name:
          <input
            type="text"
            value={newChildName}
            onChange={(event) => setNewChildName(event.target.value)}
          />
        </label>
        <label>
          Birthdate:
          <input
            type="text"
            value={newChildBirthdate}
            onChange={(event) => setNewChildBirthdate(event.target.value)}
          />
        </label>
        <button type="submit">Add Child</button>
      </form>
    </div>
  );
}

export default function FamilyTree() {
  const [family, setFamily] = useState([
    {
      name: "John",
      birthdate: "January 1, 1970",
      children: [
        {
          name: "Jane",
          birthdate: "February 1, 1990",
          children: [],
        },
        {
          name: "Bob",
          birthdate: "March 1, 1992",
          children: [],
        },
      ],
    },
  ]);

  function addChild(newChild, parentName) {
    const newFamily = [...family];
    const parent = findPerson(newFamily, parentName);
    parent.children.push(newChild);
    setFamily(newFamily);
  }

  function findPerson(family, name) {
    for (const person of family) {
      if (person.name === name) {
        return person;
      }
      const childMatch = findPerson(person.children, name);
      if (childMatch) {
        return childMatch;
      }
    }
    return null;
  }

  return (
    <div>
      <h2>Family Tree</h2>
      {family.map((person) => (
        <Person
          key={person.name}
          name={person.name}
          birthdate={person.birthdate}
          children={person.children}
          onAddChild={(newChild) => addChild(newChild, person.name)}
        />
      ))}
    </div>
  );
}
