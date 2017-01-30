class Tank {
  constructor(game,id) {
    this.game = game
    this.id = id
    this.tank = document.getElementById(`tank-${this.id}`)
    this.absLeft = parseInt(this.tank.style.left, 10)
    this.absRight = this.absLeft + 40
    this.appendGun()
    this.gun = new Gun(this, id)
    this.hp = 3
    this.rims = $(`div#tank-${this.id} .rim-1`)
    this.rimsAngle = 0
  }

  findEnemyTank() {
    if (this.id === 1) {
      this.enemyTank = this.game.tanks[1]
    } else if (this.id === 2) {
      this.enemyTank = this.game.tanks[0]
    }
  }

  appendGun() {
    $(`#tank-${this.id}`).append(`<div class='gun' id= 'gun-${this.id}' style="left: 14px;"><div class='gun-cap'></div></div>`)
  }

  moveTankLeft() {
    this.absLeft -= 1
    this.absRight -= 1
    this.gun.absLeft -= 1
    this.rimsAngle -= 10
    this.rotateRim()
    this.tank.style.left =`${this.absLeft}px`
  }

  moveTankRight() {
    this.absLeft += 1
    this.absRight +=1
    this.gun.absLeft += 1
    this.rimsAngle += 10
    this.rotateRim()
    this.tank.style.left =`${this.absLeft}px`
  }

  rotateRim() {
    this.rims.css({transform: `rotate(${this.rimsAngle}deg)`})
  }
}
