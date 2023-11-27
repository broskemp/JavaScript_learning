let trigger = document.getElementById('trigger')
let image = document.getElementById('target')

trigger.addEventListener('mouseover', function(){
  image.src = 'img/picB.jpg'
})

trigger.addEventListener('mouseout', function(){
  image.src = 'img/picA.jpg'
})
