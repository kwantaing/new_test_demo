import React from "react"
import SingularComp from "./singularComp"

const coffeesComponent = () => {
  return (
    <div>
      <SingularComp name="Bistro"></SingularComp>
      <SingularComp name="Bistro"></SingularComp>

      <SingularComp name="Bistro"></SingularComp>

      <SingularComp name="Bistro"></SingularComp>
        <h1>new changes</h1>
      <SingularComp name="Bistro"></SingularComp>
    </div>
  )
}

export default coffeesComponent
