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
var brendSpan = document.querySelectorAll('.brendSpan');
var masChoiceUserBrend = [], masChoiceUserCountry = [];
var maimMasCar = [];
function Gosort(e) {

   switch (e.target.innerHTML) {
      case 'США':
      case 'АНГЛИЯ':
      case 'ФРАНЦИЯ':
      case 'ГЕРМАНИЯ':
      case 'ПОЛЬША':
      case 'ЯПОНИЯ':
      case 'ИСПАНИЯ':
         cauntryBl = e.target.innerHTML;
         if (masChoiceUserCountry.includes(cauntryBl)) {
            e.target.classList.toggle("createBackgroundColor");
            deleteCountry();
         } else {
            masChoiceUserCountry.push(cauntryBl);
            e.target.classList.toggle("createBackgroundColor");
            createCountry();
         }
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
      case 'Maserati':
      case 'Honda':
      case 'Toyota':
      case 'Tesla':
      case 'Corvette':
         cauntryBl = e.target.innerHTML;
         if (masChoiceUserBrend.includes(cauntryBl)) {
            e.target.classList.toggle("createBackgroundColor");
            deleteBrend();
         } else {
            masChoiceUserBrend.push(cauntryBl);
            e.target.classList.toggle("createBackgroundColor");
            createBrend();
         }
         break;
      case 'Сбросить фильтры':
      case 'Сбросить':
         sbros();
         break;
      default:
         break;
   }
   function sbros() {

      let itemAvtoAll = document.querySelectorAll('.itemAvto');
      for (let i = 0; i < itemAvtoAll.length; i++) {
         itemAvtoAll[i].remove();
      }
      for (let ii = 0; ii < itemConst.length; ii++) {
         document.querySelector('.wraperAngar').append(itemConst[ii]);
      }

      let podBrend = document.querySelectorAll('.podBrend');
      for (let it = 0; it < podBrend.length; it++) {
         if (podBrend[it].classList.contains("createBackgroundColor")) {
            podBrend[it].classList.remove("createBackgroundColor");
         }
      }
      masChoiceUserBrend.splice(0, masChoiceUserBrend.length);//проблема
      masChoiceUserCountry.splice(0, masChoiceUserCountry.length);
   };

   function expensive() {
      let wraperAngar = document.querySelector('.wraperAngar');
      let itemAvtoAll = document.querySelectorAll('.itemAvto');
      let ty = [];
      let praisSpan = document.querySelectorAll('.praisSpan');

      for (let ik = 0; ik < praisSpan.length; ik++) {
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

      for (let ik = 0; ik < praisSpan.length; ik++) {
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

   function createCountry() {
      let itemAvtoAll = document.querySelectorAll('.itemAvto');
      for (let i = 0; i < itemAvtoAll.length; i++) {
         itemAvtoAll[i].remove();
      }

      for (let ii = 0; ii < masChoiceUserCountry.length; ii++) {
         for (let it = 0; it < itemAvtoAll.length; it++) {
            if (masChoiceUserCountry[ii] == itemAvtoAll[it].querySelector('.countrySpan').textContent) {
               document.querySelector('.wraperAngar').append(itemAvtoAll[it]);
            }
         }
      }
   };

   function deleteCountry() {
      let itemAvtoAll = document.querySelectorAll('.itemAvto');

      for (let it = 0; it < itemAvtoAll.length; it++) {
         if (cauntryBl == itemAvtoAll[it].querySelector('.countrySpan').textContent) {
            itemAvtoAll[it].remove();
            tuti();
         }
      }

      for (let ir = 0; ir < masChoiceUserCountry.length; ir++) {
         if (masChoiceUserCountry[ir] == cauntryBl) {
            masChoiceUserCountry.splice(ir, 1); // проблема
         }
      }

      function tuti() {
         let itemAvtoAll = document.querySelectorAll('.itemAvto');
         if (itemAvtoAll.length == 0) {
            for (let ii = 0; ii < itemConst.length; ii++) {
               document.querySelector('.wraperAngar').append(itemConst[ii]);
            }

            let podBrend = document.querySelectorAll('.podBrend');
            for (let it = 0; it < podBrend.length; it++) {
               if (podBrend[it].classList.contains("createBackgroundColor")) {
                  podBrend[it].classList.remove("createBackgroundColor");
               }
            }

            masChoiceUserCountry.splice(0, masChoiceUserBrend.length);//проблема
         }

      }
   };



   /* function country() {
       let itemAvtoAll = document.querySelectorAll('.itemAvto');
       // let countrySpan = document.querySelectorAll('.countrySpan');
 
       if (cauntryBl == document.querySelectorAll('.podBrend')[0].textContent) {
          sbros();
          return 0;
       }
 
       if (iterOpen == 0) {
          // if (cauntryBl == document.querySelectorAll('.podBrend')[0].textContent) {
            //  sbros();
           //} else {
 
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
 }*/
   // --------------------------

   function createBrend() {
      let itemAvtoAll = document.querySelectorAll('.itemAvto');
      for (let i = 0; i < itemAvtoAll.length; i++) {
         itemAvtoAll[i].remove();
      }

      for (let ii = 0; ii < masChoiceUserBrend.length; ii++) {
         for (let it = 0; it < itemAvtoAll.length; it++) {
            if (masChoiceUserBrend[ii] == itemAvtoAll[it].querySelector('.brendSpan').textContent) {
               document.querySelector('.wraperAngar').append(itemAvtoAll[it]);
            }
         }
      }
   };

   function deleteBrend() {
      let itemAvtoAll = document.querySelectorAll('.itemAvto');

      for (let it = 0; it < itemAvtoAll.length; it++) {
         if (cauntryBl == itemAvtoAll[it].querySelector('.brendSpan').textContent) {
            itemAvtoAll[it].remove();
            kuki();
         }
      }

      for (let ir = 0; ir < masChoiceUserBrend.length; ir++) {
         if (masChoiceUserBrend[ir] == cauntryBl) {
            masChoiceUserBrend.splice(ir, 1);// проблема
         }
      }

      function kuki() {
         let itemAvtoAll = document.querySelectorAll('.itemAvto');
         if (itemAvtoAll.length == 0) {
            for (let ii = 0; ii < itemConst.length; ii++) {
               document.querySelector('.wraperAngar').append(itemConst[ii]);
            }

            let podBrend = document.querySelectorAll('.podBrend');
            for (let it = 0; it < podBrend.length; it++) {
               if (podBrend[it].classList.contains("createBackgroundColor")) {
                  podBrend[it].classList.remove("createBackgroundColor");
               }
            }

            masChoiceUserCountry.splice(0, masChoiceUserCountry.length); // проблема
         }

      }
   };

   function brend() {

      // ### ### #### #### #####

      /*let itemAvtoAll = document.querySelectorAll('.itemAvto');
      // let brendSpan = document.querySelectorAll('.brendSpan');
   
      if (cauntryBl == document.querySelectorAll('.podBrend')[0].textContent) {
         sbros();
         return 0;
      }
   
      //if (cauntryBl == document.querySelectorAll('.podBrend')[0].textContent) {
       //  sbros();
      //} else {
      if (iterOpenBrend == 0) {
   
         for (let i = 0; i < itemAvtoAll.length; i++) {
            for (let ii = 0; ii < itemAvtoAll.length; ii++) {
               if ( == brendSpan[ii].textContent) {
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
      }*/
   }
   iterOpenBrend++;
}
