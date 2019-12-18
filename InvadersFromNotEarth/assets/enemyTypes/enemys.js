// Travis Ahern
// Dec. 3, 2018

function setEnemyTypes() {
  // Boss
  enemyTypes.boss = {
    sprite: img.bossEnemySprite,
    size: spriteSize.enemy*3,
    bulletSize: spriteSize.enemy*1.5,
    dxMultiplier: 0.5,
    dyMultiplier: 0.1,
    attackMultiplier: 2,
    hp: 20,
    scoreGained: 6,
    min: 1,
    max: 1,
    timer: 1250
  };

  // Common
  enemyTypes.common = {
    sprite: img.commonEnemySprite,
    size: spriteSize.enemy,
    bulletSize: spriteSize.enemy,
    dxMultiplier: 1,
    dyMultiplier: 1,
    attackMultiplier: 10,
    hp: 1,
    scoreGained: 1,
    min: 1,
    max: 25,
    timer: 1000
  };

  // Fast
  enemyTypes.fast = {
    sprite: img.fastEnemySprite,
    size: spriteSize.enemy,
    bulletSize: spriteSize.enemy,
    dxMultiplier: 3,
    dyMultiplier: 1,
    attackMultiplier: 7,
    hp: 1,
    scoreGained: 2,
    min: 3,
    max: 15,
    timer: 750
  };

  // Strong
  enemyTypes.strong = {
    sprite: img.strongEnemySprite,
    size: spriteSize.enemy*1.25,
    bulletSize: spriteSize.enemy*1.2,
    dxMultiplier: 0.5,
    dyMultiplier: 0.5,
    attackMultiplier: 10,
    hp: 3,
    scoreGained: 3,
    min: 2,
    max: 12,
    timer: 1250
  };

  // Super Strong
  enemyTypes.superStrong = {
    sprite: img.superStrongEnemySprite,
    size: spriteSize.enemy*2,
    bulletSize: spriteSize.enemy*1.5,
    dxMultiplier: 1.5,
    dyMultiplier: 0.3,
    attackMultiplier: 9,
    hp: 5,
    scoreGained: 4,
    min: 2,
    max: 5,
    timer: 1500
  };

  // Slow
  enemyTypes.slow = {
    sprite: img.slowEnemySprite,
    size: spriteSize.enemy*0.5,
    bulletSize: spriteSize.enemy*0.5,
    dxMultiplier: 4,
    dyMultiplier: 0.001,
    attackMultiplier: 5,
    hp: 1,
    scoreGained: 2,
    min: 5,
    max: 15,
    timer: 3500
  };

  // Crazy Attacking
  enemyTypes.crazyAttack = {
    sprite: img.crazyAttackEnemySprite,
    size: spriteSize.enemy*1.75,
    bulletSize: spriteSize.enemy*0.75,
    dxMultiplier: 0.1,
    dyMultiplier: 0.001,
    attackMultiplier: 7.5,
    hp: 2,
    scoreGained: 3,
    min: 2,
    max: 5,
    timer: 250
  };
}
