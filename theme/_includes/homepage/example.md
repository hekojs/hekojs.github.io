```js
import Heko from '@hekojs/core'
import HekoRenderer from '@hekojs/2d-renderer'
import HekoPhysics from '@hekojs/2d-physics'
import HekoHelpers from '@hekojs/helpers'
import HekoControls from '@hekojs/controls'

// Hover the entities for class definition
Heko.registerEntities([Player, Platform])

const world = new Heko.World()

world.plugins.add(HekoPhysics.Plugin)
world.plugins.add(HekoControls.Plugin)
const renderer = world.plugins.add(HekoRenderer.Plugin, {
  target: 'example-container',
  drawPhysicsShapes: true
})

world.start()

const player = world.entities.add(Player)
renderer.camera.follow = () => {
  return player.getComponent(HekoPhysics.Components.Physics).position
}

for (let i = 1; i <= 50; i++) {
  world.entities.add(Platform, { number: i })
}

world.ticker.add(() => {
  const physics = player.getComponent(HekoPhysics.Components.Physics)
  if (physics.position.y > 600) {
    physics.setPosition({ x: 100, y: 100 })
    physics.setVelocity({ x: 0, y: 0, angle: 0 })
  }
})
```