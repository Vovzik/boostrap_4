const header_contentBefore = document.getElementsByClassName('header_contentBefore')[0];
const header_contentInput = document.getElementsByClassName('header_contentInput')[0];
const header_contentSvg = document.getElementsByClassName('header_contentSvg')[0];
const header_contentTxtInput1 = document.getElementsByClassName('header_contentTxtInputMedia')[0];

header_contentSvg.addEventListener('click', function () {
  header_contentTxtInput1.classList.toggle('opend')
})

const header_menuBurger = document.getElementsByClassName('header_menuBurger')[0];
const header_menuBox = document.getElementsByClassName('header_menu-box')[0];
const header_menuBurgerItems = document.getElementsByClassName('header_menuBurgerItems');

header_contentBefore.addEventListener('click', function () {
  header_contentInput.classList.toggle('append');
});

header_menuBurger.addEventListener('click', function () {
  header_menuBox.classList.toggle('opend');

  header_menuBox.style.height = '216px';

  for (let i = 0; i < header_menuBurgerItems.length; i++) {
    header_menuBurgerItems[0].classList.toggle('burger_1');
    header_menuBurgerItems[1].classList.toggle('burger_2');
    header_menuBurgerItems[2].classList.toggle('burger_3');
  }
});

const body = document.querySelector('body');
const podarok_menuLink = document.getElementsByClassName('podarok_menu-link');
const podarok_categori = document.getElementsByClassName('podarok_categori')[0];

const catalog_blockItems3 = document.getElementsByClassName('catalog_block-items3');
const catalog_opend = document.getElementsByClassName('catalog_opend');

const header_menuBoxClick = document.getElementsByClassName('header_menu-boxClick')[0];
const header_menuboxActive = document.getElementsByClassName('header_menu-boxActive')[0];
const podarok_menu1 = document.getElementsByClassName('podarok_menu-1')[0];
const span_clearAdd =  document.querySelector('#span_clear-add');

if (body.offsetWidth <= 991) {
  body.classList.add('touch');
  for (let i = 0; i < podarok_menuLink.length; i++) {
    podarok_menuLink[i].addEventListener('click', function () {
      podarok_categori.classList.add('opend');
      podarok_menu1.style.left = '-102%'

      header_menuBox.style.height = '900px';
    });
  };

  for (let i = 0; i < catalog_blockItems3.length; i++) {
    catalog_blockItems3[i].addEventListener('click', function () {
      catalog_opend[i].classList.toggle('opend');
    });
  };

  header_menuBoxClick.addEventListener('click', function () {
    header_menuboxActive.classList.remove('active');
    podarok_menu1.style.display = 'block';

    header_menuBox.style.height = '537px';
  });


  console.log('true')

} else {
  body.classList.add('mouse');
  console.log('false')
}

//slider

$('.podarok_images-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
});

    span_clearAdd.addEventListener('click', function () {
      header_menuboxActive.classList.add('active');
      podarok_menu1.style.display = 'none';

      header_menuBox.style.height = '216px';
    });

//Скрытие открытие блока

const catalog_blockItemsJS = document.getElementsByClassName('catalog_block-itemsJS')[0];
const catalog_blockTextJS = document.getElementsByClassName('catalog_block-textJS')[0];
const catalog_group = document.getElementsByClassName('catalog_group')[0];
const hiddenCategory = document.getElementsByClassName('hidden-category');

catalog_blockItemsJS.addEventListener('click', function () {
  for (let i = 0; i < hiddenCategory.length; i++) {
    hiddenCategory[i].classList.toggle('active')
  };

   if(catalog_blockTextJS.innerHTML === 'Скрыть')  {
    catalog_blockTextJS.innerHTML = 'Показать'
    catalog_group.style.transform = 'rotate(0deg)';
   } else {
    catalog_blockTextJS.innerHTML = 'Скрыть';
    catalog_group.style.transform = 'rotate(180deg)';
   }
});

const podarok_categoriTitleSpan = document.getElementsByClassName('podarok_categoriTitleSpan')[0];

podarok_categoriTitleSpan.addEventListener('click', function () {
  podarok_categori.classList.remove('opend');

  podarok_menu1.style.left = '110%'

  header_menuBox.style.height = '537px';
});



