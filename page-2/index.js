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
var itemConst = 0, iterOpen = 0, iterOpenBrend = 0;

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
var countrySpan = document.querySelectorAll('.countrySpan');
let brendSpan = document.querySelectorAll('.brendSpan');

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
      case 'Сбросить фильтры':
         sbros();
         break;
      default:
         break;
   }
   function sbros() {

      let itemAvtoAll = document.querySelectorAll('.itemAvto');
      for (let i = 0; i < itemAvtoAll.length; i++) {
         // itemConst[i].style.display = '';
         itemAvtoAll[i].remove();
         iterOpen = 0;
         iterOpenBrend = 0;
      }
      for (let ii = 0; ii < itemConst.length; ii++) {
         document.querySelector('.wraperAngar').append(itemConst[ii]);
      }
   }

   function expensive() {
      let wraperAngar = document.querySelector('.wraperAngar');
      let itemAvtoAll = document.querySelectorAll('.itemAvto');
      let ty = [];
      let praisSpan = document.querySelectorAll('.praisSpan');

      for (let ik = 0; ik <= avtoPrais.length; ik++) {
         ty[ik] = praisSpan[ik].textContent;
      }
      ty.sort(function (a, b) { return a - b });
      ty.reverse();

      for (let i = 0; i < ty.length; i++) {
         for (let ii = 0; ii < ty.length; ii++) {
            if (ty[i] == praisSpan[ii].textContent) {
               wraperAngar.append(itemAvtoAll[ii]);
            }
         }
      }

   }
   // ----------------------
   function cheap() {
      let wraperAngar = document.querySelector('.wraperAngar');
      let itemAvtoAll = document.querySelectorAll('.itemAvto');
      let ty = [];
      let praisSpan = document.querySelectorAll('.praisSpan');

      for (let ik = 0; ik <= avtoPrais.length; ik++) {
         ty[ik] = praisSpan[ik].textContent;
      }
      ty.sort(function (a, b) { return a - b });

      for (let i = 0; i < ty.length; i++) {
         for (let ii = 0; ii < ty.length; ii++) {
            if (ty[i] == praisSpan[ii].textContent) {
               wraperAngar.append(itemAvtoAll[ii]);
            }
         }
      }
   }
   // -----------------
   function country() {
      let itemAvtoAll = document.querySelectorAll('.itemAvto');
      // let countrySpan = document.querySelectorAll('.countrySpan');

      if (cauntryBl == document.querySelectorAll('.podBrend')[0].textContent) {
         sbros();
         return 0;
      }

      if (iterOpen == 0) {
         /* if (cauntryBl == document.querySelectorAll('.podBrend')[0].textContent) {
             sbros();
          } else {*/

         for (let i = 0; i < itemAvtoAll.length; i++) {
            for (let ii = 0; ii < itemAvtoAll.length; ii++) {
               if (cauntryBl == countrySpan[ii].textContent) {
                  //  itemAvtoAll[ii].style.display = '';

               } else {
                  itemAvtoAll[ii].remove();
                  // itemAvtoAll[ii].style.display = 'none';
               }
            }
         }
         //}
         iterOpen++;
      } else {

         for (let i = 0; i < itemConst.length; i++) {
            for (let ii = 0; ii < itemConst.length; ii++) {
               if (cauntryBl == countrySpan[ii].textContent) {
                  document.querySelector('.wraperAngar').append(itemConst[ii]);
               } else {

               }
            }
         }
      }
   }
}
// --------------------------
function brend() {
   let itemAvtoAll = document.querySelectorAll('.itemAvto');
   // let brendSpan = document.querySelectorAll('.brendSpan');

   if (cauntryBl == document.querySelectorAll('.podBrend')[0].textContent) {
      sbros();
      return 0;
   }

   /*if (cauntryBl == document.querySelectorAll('.podBrend')[0].textContent) {
      sbros();
   } else {*/
   if (iterOpenBrend == 0) {

      for (let i = 0; i < itemAvtoAll.length; i++) {
         for (let ii = 0; ii < itemAvtoAll.length; ii++) {
            if (cauntryBl == brendSpan[ii].textContent) {
               // itemAvtoAll[ii].style.display = '';
            } else {
               itemAvtoAll[ii].remove();
               // itemAvtoAll[ii].style.display = 'none';
            }
         }
      }
      iterOpenBrend++;
   } else {
      for (let i = 0; i < itemConst.length; i++) {
         for (let ii = 0; ii < itemConst.length; ii++) {
            if (cauntryBl == brendSpan[ii].textContent) {
               document.querySelector('.wraperAngar').append(itemConst[ii]);
            } else {

            }
         }
      }
   }
   //}

}
