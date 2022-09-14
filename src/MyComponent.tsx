import React from "react";
import {useApi} from "./UseApi";
import {Animal, AnimalType} from "./Animal";


export function MyComponent({q}: {q: string}) {
  const {data, error, isLoading} = useApi(`http://localhost:3000/animals?${new URLSearchParams({q})}`);


  if (isLoading) {
    return <div>Loading....</div>
  }

  if (error) {
    return <div>Sorry, we had a problem!</div>
  }

  return <>
    {
      data.length === 0 ?
        <div>No results found</div> :
        data.map(({id, name, age, type}: AnimalType) =>
          <Animal key={id} id={id} name={name} age={age} type={type}/>
    )}
  </>
}
