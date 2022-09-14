import React from "react";

export type AnimalType = {
  id: string;
  name: string;
  age: string;
  type: string;
};

export const Animal = ({age, id, name, type}: AnimalType) => {
  return <div className={"container"} key={id}>
    <strong>{name}</strong> {age} {type}
  </div>;
};

