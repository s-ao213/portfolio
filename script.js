var open = false;

function Drop(n) {
  var i;
  if (open == false) {
    for (i = n; i < 5; i++) {
      Drp(i)
    }
    open = true
  } else if (open == true) {
    for (i = n; i < 5; i++) {
      Cls(i)
    }
    open = false
  }
}

function Drp(n) {
  var elem = document.getElementsByClassName("menu-con")[n];
  var pos = -1 * window.innerHeight - n * 100;
  var id = setInterval(frame, 5);

  function frame() {
    if (pos >= -10) {
      clearInterval(id);
      elem.style.top = 0 + 'px';
    } else {
      pos += 10;
      elem.style.top = pos + 'px';
    }
  }
}

function Cls(n) {
  var elems = document.getElementsByClassName("menu-con")[n];
  var poss = 0;
  var ids = setInterval(frames, 5);

  function frames() {
    if (poss <= -1 * window.innerHeight) {
      clearInterval(ids);
      elems.style.top = -1 * window.innerHeight + 'px';
    } else {
      poss += -7 - n * 2;
      elems.style.top = poss + 'px';
    }
  }
}


// 生んだ－ラインを引くためのJS
let expantion = document.getElementsByClassName('underline-before');

let expantionswitch = ["off","off","off","off","off"];

window.onscroll = function(){
  for(let i = 0,len = expantion.length;i < len;i++){
    let ex_clientRect = expantion[i].getBoundingClientRect();
    let wh = window.innerHeight;
    if(wh > ex_clientRect.top + 200 && expantionswitch[i] === "off") {
      expantion[i].classList.add('underline-after');
      expantionswitch[i] = "on";
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // 各スライダーコンテナに対してスライダー機能を初期化
  document.querySelectorAll('.slider-container').forEach(container => {
      const wrapper = container.querySelector('.slider-wrapper');
      const images = wrapper.querySelectorAll('.slider-image');
      const prevButton = container.querySelector('.prev');
      const nextButton = container.querySelector('.next');
      const dotsContainer = container.querySelector('.slider-dots');
      
      let currentIndex = 0;

      // ドットを生成
      images.forEach((_, index) => {
          const dot = document.createElement('div');
          dot.classList.add('dot');
          if (index === 0) dot.classList.add('active');
          dot.addEventListener('click', () => goToSlide(index));
          dotsContainer.appendChild(dot);
      });

      const dots = dotsContainer.querySelectorAll('.dot');

      function updateDots() {
          dots.forEach((dot, index) => {
              dot.classList.toggle('active', index === currentIndex);
          });
      }

      function goToSlide(index) {
          currentIndex = index;
          wrapper.style.transform = `translateX(-${index * 100}%)`;
          updateDots();
      }

      prevButton.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          goToSlide(currentIndex);
      });

      nextButton.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % images.length;
          goToSlide(currentIndex);
      });
  });
});