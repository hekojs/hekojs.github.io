```js
class Platform extends Heko.EntityBuilder {
  create (entity, { number }) {
    entity.addComponent(HekoPhysics.Components.Physics, {
      body: HekoPhysics.Matter.Bodies.rectangle(
        number * 100,
        HekoHelpers.Number.random(400, 550, true),
        HekoHelpers.Number.random(20, 100, true),
        20,
        { isStatic: true }
      )
    })
  }
}
```