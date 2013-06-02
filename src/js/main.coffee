$ ->
  init()

init = ->
  window.canvas = $('#gameCanvas')
  window.canvas[0].width = $("#main").width()
  window.canvas[0].height = $("#main").height()

  window.game = new Game()
  window.context = window.canvas[0].getContext('2d')

  @canvas.click('mouseclick', (e) ->
    window.game.addPoint(e.offsetX - 25, e.offsetY - 25)
    window.game.doDraw(window.context)
  , false)

class Game
  constructor: ->
    @points = []

  addPoint: (x, y) ->
    @points.push([x, y])

  doDraw: (ctx) ->
    console.log("@points: ", @points)
    ctx.fillStyle = "#FF0000"
    for point in @points
      ctx.fillRect point[0], point[1], 50, 50