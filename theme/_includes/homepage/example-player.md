```js
class Player extends Heko.EntityBuilder {
  create (entity) {
    entity
      .addComponent(HekoPhysics.Components.Physics, { 
        body: HekoPhysics.Matter.Bodies.circle(100, 400, 10)
      })
      .addComponent(HekoControls.Components.SideWalkJumpControl, {
        keyboard: new HekoControls.Inputs.Keyboard(world)
      })
  }
}
```