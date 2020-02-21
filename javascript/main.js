let aFirst = anime({
  targets: '.first',
  translateX: '250px',
  autoplay: false
})

let firstBtn = document.querySelector('.first')
firstBtn.onclick = aFirst.play

let morphing = anime({
  targets: '.second',
  translateX: {
    value: 250,
    duration: 800
  },
  rotate: {
    value: 360,
    duration: 1800,
    easing: 'easeInOutSine'
  },
  scale: {
    value: 2,
    duration: 1600,
    delay: 800,
    easing: 'easeInOutQuart'
  },
  delay: 250,
  autoplay: false
});

let morphingBtn = document.querySelector('.second')
morphingBtn.onclick = morphing.play
