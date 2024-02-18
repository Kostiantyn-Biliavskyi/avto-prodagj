// -----------------------Menu---------------------------
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
// -----------------------------------------------------------------------------
// --------------------burger---------------------------------------------------
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
// --------------------------- Sort----items--------------------------------------------
var avtoSrc = ['../css/foto.css/fonwall.black-supercar-wallpaper-maserati-cars.jpeg', '../css/foto.css/fonwall.bmw-m5-f90-restyling-gray-car-matte-machine.jpg', '../css/foto.css/fonwall.black-supercar-wallpaper-maserati-cars.jpeg', '../css/foto.css/fonwall.ford-mustang-cars-2018-cars-dtkb.jpeg', '../css/foto.css/fonwall.ford-mustang-cars-2018-cars-dtkb.jpeg', '../css/foto.css/fonwall.ford-mustang-wheelbarrow.jpg', '../css/foto.css/fonwall.ford-mustang-cars-2018-cars-dtkb.jpeg', '../css/foto.css/fonwall.ford-mustang-cars-2018-cars-dtkb.jpeg', '../css/foto.css/fonwall.bmw-m5-f90-restyling-gray-car-matte-machine.jpg'];
var avtoPrais = [65000, 70000, 78000, 35000, 40000, 48000, 35000, 40000, 50000];
var country = ['США', 'АНГЛИЯ', 'ФРАНЦИЯ', 'ГЕРМАНИЯ', 'США', 'ПОЛЬША', 'ГЕРМАНИЯ', 'США', 'ФРАНЦИЯ'];
var avtoBrend = ['Audi', 'Porsche', 'Mersedes', 'Reno', 'Honda', 'Toyota', 'Audi', 'Mersedes', 'Mersedes'];
var itemAvto = document.querySelector('.itemAvto');
var itemConst = 0;
function createItem() {
   let cloneItem;
   for (let i = 0; i < avtoPrais.length; i++) {

      cloneItem = itemAvto.cloneNode(true);

      cloneItem.querySelector('.fotoavto').src = avtoSrc[i];
      cloneItem.querySelector('.countrySpan').innerHTML = country[i];
      cloneItem.querySelector('.brendSpan').innerHTML = avtoBrend[i];
      cloneItem.querySelector('.praisSpan').innerHTML = avtoPrais[i];
      document.querySelector('.wraperAngar').prepend(cloneItem);
   }
   itemConst = document.querySelectorAll('.itemAvto');
}
createItem();

// - - - -  - - -  - - - - - - - - -- - -  - 

document.querySelector('.wraperSortIten').addEventListener('click', Gosort);
var cauntryBl;
function Gosort(e) {

   switch (e.target.innerHTML) {
      case 'США':
      case 'АНГЛИЯ':
      case 'ФРАНЦИЯ':
      case 'ГЕРМАНИЯ':
      case 'ПОЛЬША':
      case 'ЯПОНИЯ':
      case 'ИСПАНИЯ':
      case 'Сбросить':
         cauntryBl = e.target.innerHTML;
         country();
         break;
      case 'Сначала дорогие':
         expensive();
         break;
      case 'Сначала дешёвые':
         cheap();
         break;
      case 'Audi':
      case 'Porsche':
      case 'Mersedes':
      case 'Reno':
      case 'Honda':
      case 'Toyota':
      case 'Tesla':
      case 'Corvette':
      case 'Сбросить':
         cauntryBl = e.target.innerHTML;
         brend();
         break;
      case 'Сбросить':
         sbros();
         break;
      default:
         break;
   }
   function sbros() {
      let itemAvtoAll = document.querySelectorAll('.itemAvto');
      for (let i = 0; i < itemAvtoAll.length; i++) {
         itemAvtoAll[i].style.display = '';
      }
   }

   function expensive() {
      let wraperAngar = document.querySelector('.wraperAngar');
      let itemAvtoAll = document.querySelectorAll('.itemAvto');
      let bufer = [], ty = [];
      let praisSpan = document.querySelectorAll('.praisSpan');

      for (let i = 0; i <= avtoPrais.length; i++) {
         ty[i] = praisSpan[i].innerHTML;
      }
      ty.sort(function (a, b) { return a - b });
      ty.reverse();

      for (let i = 0; i < ty.length; i++) {
         for (let ii = 0; ii < ty.length; ii++) {
            if (ty[i] == praisSpan[ii].innerHTML) {
               bufer[i] = itemAvtoAll[ii].cloneNode(true);
               itemAvtoAll[ii].remove();
            }
         }
      }
      for (let i = 0; i < ty.length; i++) {
         wraperAngar.append(bufer[i]);
      }
   }
   // ----------------------
   function cheap() {
      let wraperAngar = document.querySelector('.wraperAngar');
      let itemAvtoAll = document.querySelectorAll('.itemAvto');
      let bufer = [], ty = [];
      let praisSpan = document.querySelectorAll('.praisSpan');
      for (let i = 0; i <= avtoPrais.length; i++) {
         ty[i] = praisSpan[i].innerHTML;
      }
      ty.sort(function (a, b) { return a - b });

      for (let i = 0; i < ty.length; i++) {
         for (let ii = 0; ii < ty.length; ii++) {
            if (ty[i] == praisSpan[ii].innerHTML) {
               bufer[i] = itemAvtoAll[ii].cloneNode(true);
               itemAvtoAll[ii].remove();
            }
         }
      }
      for (let i = 0; i < ty.length; i++) {
         wraperAngar.append(bufer[i]);
      }
   }
   // -----------------
   function country() {
      let wraperAngar = document.querySelector('.wraperAngar');
      let itemAvtoAll = document.querySelectorAll('.itemAvto');
      let bufer = [], ty = [];
      let countrySpan = document.querySelectorAll('.countrySpan');

      if (cauntryBl == document.querySelectorAll('.podBrend')[0].innerHTML) {
         for (let i = 0; i < itemAvtoAll.length; i++) {
            itemAvtoAll[i].style.display = '';
         }
      } else {

         for (let i = 0; i < itemAvtoAll.length; i++) {
            for (let ii = 0; ii < itemAvtoAll.length; ii++) {
               if (cauntryBl == countrySpan[ii].innerHTML) {
                  itemAvtoAll[ii].style.display = '';
               } else {
                  itemAvtoAll[ii].style.display = 'none';
               }
            }
         }
         for (let i = 0; i < ty.length; i++) {
            wraperAngar.append(bufer[i]);
         }
      }
   }
}
// --------------------------
function brend() {

   let wraperAngar = document.querySelector('.wraperAngar');
   let itemAvtoAll = document.querySelectorAll('.itemAvto');
   let bufer = [];
   let brendSpan = document.querySelectorAll('.brendSpan');

   if (cauntryBl == document.querySelectorAll('.podBrend')[0].innerHTML) {
      for (let i = 0; i < itemAvtoAll.length; i++) {
         itemAvtoAll[i].style.display = '';
      }
   } else {

      for (let i = 0; i < itemAvtoAll.length; i++) {
         for (let ii = 0; ii < itemAvtoAll.length; ii++) {
            if (cauntryBl == brendSpan[ii].innerHTML) {
               itemAvtoAll[ii].style.display = '';
            } else {
               itemAvtoAll[ii].style.display = 'none';
            }
         }
      }
      for (let i = 0; i < ty.length; i++) {
         wraperAngar.append(bufer[i]);
      }
   }

}
