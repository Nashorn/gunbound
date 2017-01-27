class Tank {
  constructor(game,id) {
    this.game = game
    this.id = id
    this.tank = document.getElementById(`tank-${this.id}`)
    this.left = parseInt(this.tank.style.left, 10)
    this.appendGun()
    this.gun = new Gun(this, id)
    this.tankCommand = this.tankCommand.bind(this)
  }

  findEnemyTank() {
    if (this.id === 1) {
      this.enemyTank=this.game.tanks[1]
    } else if (this.id === 2) {
      this.enemyTank=this.game.tanks[0]
    }
  }

  appendGun() {
      $(`#tank-${this.id}`).append(`<div class='gun' id= 'gun-${this.id}' style="left: 14px;" </div>`)
  }

  tankCommand(e) {
    if (e.which === 32) {
      if (this.id === 1) {
        $(document).off("keydown", this.tankCommand)
        $('p.status').html('Aim Your Gun')

      } else if (this.id === 2) {
        $(document).off("keydown", this.tankCommand)
        $('p.status').html('Aim Your Gun')
      }
      $(document).on("keydown", this.gun.moveGun)
    } else if (e.which === 37) {
        this.moveTankLeft()
    } else if (e.which === 39) {
        this.moveTankRight()
    }
  }

  moveTankLeft() {
    this.left -= 1
    this.tank.style.left =`${this.left}px`
  }

  moveTankRight() {
    this.left += 1
    this.tank.style.left =`${this.left}px`
  }

}
