document.querySelector('.wraperMenu').addEventListener('mouseover', goBackground);
var menuItemCol = document.querySelector('.wraperMenu').querySelectorAll('.menuItem');
var background = document.querySelector('.background');
var cordWraperTop = document.querySelector('.wraperMenu').getBoundingClientRect();

function goBackground(e) {
   var cordWraperTop = document.querySelector('.wraperMenu').getBoundingClientRect();
   for (let i = 0; i < menuItemCol.length; i++) {
      if (e.target == menuItemCol[i]) {
         let width = e.target.offsetWidth;
         let height = e.target.offsetHeight;
         let cord = menuItemCol[i].getBoundingClientRect();
         background.style.width = width + 'px';
         background.style.height = height + 'px';
         background.style.left = cord.left - cordWraperTop.left + 'px';
      }
   }
}

document.querySelector('.wraperTop').addEventListener('mouseout', noBackground);
function noBackground(e) {
   if (e.target.className == 'wraperMenu' || e.target.className == 'menuItem') {
      background.style.width = 50 + 'px';
      background.style.left = -50 + 'px';
   }
}

//------------------------------------------------------
//------------------------------------------------------
function openSlider() {
   var masFoto = [], foto, stopTimeout2, stopTimeout, prais = [];
   var iw = 0, oneLeft;
   // var quantityFofo = document.querySelector('.MainWraper').children.length;
   var quantityFofo = document.querySelectorAll('.foto').length;

   foto = document.querySelectorAll('.foto');
   for (let i = 0; i < foto.length; i++) {
      masFoto[i] = foto[i].src;
      prais[i] = foto[i].dataset.prais;
      foto[i].remove();
   }
   var priseSpan = document.querySelector('.priseSpan');
   var createPoints;
   function createPoint() {// создание точек
      for (let i = 0; i < foto.length; i++) {
         let div = document.createElement('div');
         div.classList.add('createPoints');
         document.querySelector('.points').append(div);
      }
      createPoints = document.querySelectorAll('.createPoints');
      createPoints[0].style.backgroundColor = 'aliceblue';
      priseSpan.innerHTML = prais[0];
   }
   createPoint();

   var MainWraperWidth = document.querySelector('.MainWraper').offsetWidth;
   var mainWraper = document.querySelector('.MainWraper');

   function go() { // создание масива с фото
      let img = document.createElement('img');
      img.src = masFoto[iw];
      img.classList.add('foto');
      mainWraper.appendChild(img);

      img.style.left = oneLeft * MainWraperWidth + 'px';
      if (iw + 1 == quantityFofo) {
         iw = 0;
      } else {
         iw++;
      }
      oneLeft = 1;
   }

   go(); go();

   var iterPoint = 1;
   var it = 0;
   function goLeftFoto() {

      let classFoto = document.querySelectorAll('.foto');
      for (let ii = 0; ii < classFoto.length; ii++) {
         classFoto[ii].style.left = (ii * MainWraperWidth) - MainWraperWidth + 'px';
      }
      // ---------------------------
      if (iterPoint === quantityFofo) {// точки становятся прозрачными
         iterPoint = 0;
      }
      for (let i = 0; i < quantityFofo; i++) {
         if (i == iterPoint) {
            priseSpan.innerHTML = prais[iterPoint];
            createPoints[iterPoint].style.backgroundColor = 'aliceblue';
         } else {
            createPoints[i].style.backgroundColor = 'transparent';
         }
      }
      iterPoint++;
      it++;
      // ---------------------------
      stopTimeout2 = setTimeout(() => {
         classFoto[0].remove();
         go();
      }, 500);
   }

   function goInterval() {
      stopTimeout = setTimeout(() => {
         goLeftFoto();
         goInterval();
      }, 3000);
   }
   goInterval();


   clickPoint.addEventListener("click", clickPointUser);
   function clickPointUser(e) {
      let lengthPoints = document.querySelectorAll('.createPoints');
      for (let i = 0; i < lengthPoints.length; i++) {
         if (e.target === lengthPoints[i]) {
            foto = document.querySelectorAll('.foto');
            clearTimeout(stopTimeout);
            clearTimeout(stopTimeout2);
            iw = i;
            iterPoint = i;
            foto[1].remove();
            go();
            goLeftFoto();
            goInterval();
            e.target.style.backgroundColor = 'aliceblue';
         }
      }
   }
}
openSlider();
// ----------------------------------
jQuery(function ($) {
   $("#telUser").mask("+380( 99 ) 999 99 99");
});
// -----------------------------------------------------------

document.querySelector('.form').addEventListener("click", function (e) {

   if (e.target.value === 'Имя* ' || e.target.value === 'Email* ' || e.target.value === 'Сообщение* ') {
      e.target.value = "";

      e.target.onblur = function (e) {

         if (e.target.value.trim() == "") {

            switch (e.target.name) {
               case 'name':
                  e.target.value = 'Имя* ';
                  break;
               case 'Email':
                  e.target.value = 'Email* ';
                  break;
               case 'commit':
                  e.target.value = 'Сообщение* ';
                  break;

               default:
                  alert('ERROR' + e.target.className);
                  break;
            }
         }
         e.target.style.boxShadow = 'none';
      }
      e.target.style.boxShadow = '0 0 20px rgba(165, 165, 165, 0.5)';
   }
   e.target.style.boxShadow = '0 0 20px rgba(165, 165, 165, 0.5)';
})

document.querySelector('.buttonForm').addEventListener('click', function (e) {

   let name = document.getElementById('name');
   if (name.value === 'Имя* ') {
      e.preventDefault();
      name.style.boxShadow = '0 0 20px rgba(248, 1, 1, 0.5)';
      setTimeout(() => name.style.boxShadow = 'none', 1500);

      let = error1 = document.createElement('div');
      error1.className = 'error';
      error1.textContent = 'Заполните поле!';
      name.after(error1);
      setTimeout(() => error1.remove(), 1500);
   }

   let commit = document.getElementById('commit');
   if (commit.value === 'Сообщение* ') {
      e.preventDefault();
      commit.style.boxShadow = '0 0 20px rgba(248, 1, 1, 0.5)';
      setTimeout(() => commit.style.boxShadow = 'none', 1500);

      let = error2 = document.createElement('div');
      error2.className = 'error';
      error2.textContent = 'Заполните поле!';
      commit.after(error2);
      setTimeout(() => error2.remove(), 1500);
   }

   let Email = document.getElementById('Email');
   if (Email.value === 'Email* ') {
      e.preventDefault();
      Email.style.boxShadow = '0 0 20px rgba(248, 1, 1, 0.5)';
      setTimeout(() => Email.style.boxShadow = 'none', 1500);

      let = error3 = document.createElement('div');
      error3.className = 'error';
      error3.textContent = 'Заполните поле!';
      Email.after(error3);
      setTimeout(() => error3.remove(), 1500);
   }

   const valid = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

   function isEmailValid(value) {
      return valid.test(value);
   }

   if (isEmailValid(Email.value)) {
   } else {
      if (Email.value != 'Email* ') {
         e.preventDefault();
         Email.style.boxShadow = '0 0 20px rgba(248, 1, 1, 0.5)';
         setTimeout(() => Email.style.boxShadow = 'none', 1500);

         let = error4 = document.createElement('div');
         error4.className = 'error';
         error4.textContent = 'Ошибка в Email !';
         Email.after(error4);
         setTimeout(() => error4.remove(), 1500);
      }
   }
})
// --------------------burger-----------------------------
var click = 0;
document.querySelector('.burgerSmallMenu').addEventListener('click', (e) => {

   if (click === 0) {
      document.querySelector('.topMenuClick').classList.add('hop');
      document.querySelector('.smallMenuLine').style.scale = 0;
      document.querySelector('.burgerSmallMenu').classList.add('rotate');

      click++;
   } else {
      document.querySelector('.topMenuClick').classList.remove('hop');
      document.querySelector('.smallMenuLine').style.scale = 1;
      document.querySelector('.burgerSmallMenu').classList.remove('rotate');
      click = 0;
   }
});
// ------------------------------------------
// window.onload = () => {// эфект замедлееного появления
const options = {
   root: null,
   rootMargin: '0px',
   threshold: 0.4
}

const observer = new IntersectionObserver((entries, observer) => {//при скроле оределяет где находится "class=wraperCentr-1" и добавляет "class=animationBlock"
   entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting == true) {
         const lazy = entry.target;
         lazy.classList.add('animationBlock');
         observer.unobserve(lazy);
      }
   })
}, options);
observer.observe(document.querySelector('.welcome'));

const observer1 = new IntersectionObserver((entries, observer) => {//при скроле оределяет где находится "class=wraperCentr-1" и добавляет "class=animationBlock"
   entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting == true) {
         const lazy1 = entry.target;
         lazy1.classList.add('animationBlock1');
         observer.unobserve(lazy1);
      }
   })
}, options);
observer1.observe(document.querySelector('.BlockCenterOneTextH2'));

const observer2 = new IntersectionObserver((entries, observer) => {//при скроле оределяет где находится "class=wraperCentr-1" и добавляет "class=animationBlock"
   entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting == true) {
         const lazy2 = entry.target;
         lazy2.classList.add('animationBlock2');
         observer.unobserve(lazy2);
      }
   })
}, options);
observer2.observe(document.querySelector('.BlockCenterOneTextP'));

const observer3 = new IntersectionObserver((entries, observer) => {//при скроле оределяет где находится "class=wraperCentr-1" и добавляет "class=animationBlock"
   entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting == true) {
         const lazy3 = entry.target;
         lazy3.classList.add('animationBlock3');
         observer.unobserve(lazy3);
      }
   })
}, options);
observer3.observe(document.querySelector('.button'));

const observer4 = new IntersectionObserver((entries, observer) => {//при скроле оределяет где находится "class=wraperCentr-1" и добавляет "class=animationBlock"
   entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting == true) {
         const lazy4 = entry.target;
         lazy4.classList.add('animationBlock4');
         observer.unobserve(lazy4);
      }
   })
}, options);
observer4.observe(document.querySelector('.wraperSlidreText'));

const observer5 = new IntersectionObserver((entries, observer) => {//при скроле оределяет где находится "class=wraperCentr-1" и добавляет "class=animationBlock"
   entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting == true) {
         const lazy5 = entry.target;
         lazy5.classList.add('animationBlock5');
         observer.unobserve(lazy5);
      }
   })
}, options);
observer5.observe(document.querySelector('.MainWraper'));

const observer6 = new IntersectionObserver((entries, observer) => {//при скроле оределяет где находится "class=wraperCentr-1" и добавляет "class=animationBlock"
   entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting == true) {
         const lazy6 = entry.target;
         lazy6.classList.add('animationBlock6');
         observer.unobserve(lazy6);
      }
   })
}, options);
observer6.observe(document.querySelector('.BlockTwoMainText'));

const observer7 = new IntersectionObserver((entries, observer) => {//при скроле оределяет где находится "class=wraperCentr-1" и добавляет "class=animationBlock"
   entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting == true) {
         const lazy7 = entry.target;
         lazy7.classList.add('animationBlock7');
         observer.unobserve(lazy7);
      }
   })
}, options);
observer7.observe(document.querySelector('.fucus'));

const observer8 = new IntersectionObserver((entries, observer) => {//при скроле оределяет где находится "class=wraperCentr-1" и добавляет "class=animationBlock"
   entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting == true) {
         const lazy8 = entry.target;
         lazy8.classList.add('animationBlock8');
         observer.unobserve(lazy8);
      }
   })
}, options);
observer8.observe(document.querySelector('.fucus1'));

const observer9 = new IntersectionObserver((entries, observer) => {//при скроле оределяет где находится "class=wraperCentr-1" и добавляет "class=animationBlock"
   entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting == true) {
         const lazy9 = entry.target;
         lazy9.classList.add('animationBlock9');
         observer.unobserve(lazy9);
      }
   })
}, options);
observer9.observe(document.querySelector('.fucus2'));

const observer10 = new IntersectionObserver((entries, observer) => {//при скроле оределяет где находится "class=wraperCentr-1" и добавляет "class=animationBlock"
   entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting == true) {
         const lazy10 = entry.target;
         lazy10.classList.add('animationBlock10');
         observer.unobserve(lazy10);
      }
   })
}, options);
observer10.observe(document.querySelector('.telSeti'));

const observer11 = new IntersectionObserver((entries, observer) => {//при скроле оределяет где находится "class=wraperCentr-1" и добавляет "class=animationBlock"
   entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting == true) {
         const lazy11 = entry.target;
         lazy11.classList.add('animationBlock11');
         observer.unobserve(lazy11);
      }
   })
}, options);
observer11.observe(document.querySelector('.contactForma'));

const observer12 = new IntersectionObserver((entries, observer) => {//при скроле оределяет где находится "class=wraperCentr-1" и добавляет "class=animationBlock"
   entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting == true) {
         const lazy12 = entry.target;
         lazy12.classList.add('animationBlock12');
         observer.unobserve(lazy12);
      }
   })
}, options);
observer12.observe(document.querySelector('.address'));
// }