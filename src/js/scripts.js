
var app = new Vue({
  el: '#app',
  data: {
    nav_list: [{
        id: 1,
        name: 'Home',
        active: true,
      },
      {
        id: 2,
        name: 'Products',
        active: false,
      },
      {
        id: 3,
        name: 'Faqs',
        active: false,
      },
      {
        id: 4,
        name: 'Contact us',
        active: false,
      },
    ],
    tabs: [{
        id: 1,
        caption: 'WHAT IS CBD?',
        active: true,
        title: 'WHAT IT IS AND HOW IT WORKS 1'
      },
      {
        id: 2,
        caption: 'BENEFITS',
        active: false,
        title: 'WHAT IT IS AND HOW IT WORKS 2'
      },
      {
        id: 3,
        caption: 'OUR DIFFERENCE',
        active: false,
        title: 'WHAT IT IS AND HOW IT WORKS 3'
      },
    ]
  },
  methods: {
    goToLink(id) {
      this.nav_list.forEach(element => {
        if (element.id === id) {
          element.active = true;
        } else
          element.active = false;
      });
    },
    setActive(tab) {
      this.tabs.forEach(el => {
        el.active = el === tab;
      })
    },
  },


})

$(window).scroll(function () {
  if ($(window).scrollTop() >= 600) {
    $('.nav__link').addClass('nav__link_dark');
    $('.header').addClass('header_dark');
    $('.user__link').addClass('user__link_dark');
  } else {
    $('.nav__link').removeClass('nav__link_dark');
    $('.header').removeClass('header_dark');
    $('.user__link').removeClass('user__link_dark');
  }
});

$(document).ready(function () {
  $('.faq__collapse:not(:first)').hide();
  $('faq__arrow:not(:first)').addClass('closed');


  $('.faq__togg').on('click', function (e) {
    e.preventDefault();


    var collapse = $(this).parent().find('.faq__collapse'),
      arrow = $(this).find('.faq__arrow'),
      notThis = $('.faq__togg').not(this);

    notThis.parent()
      .find('.faq__collapse')
      .slideUp();
    notThis.find('.faq__arrow')
      .addClass('closed');

    if (collapse.is(":hidden")) {
      collapse.slideDown();
      arrow.removeClass('closed');
    } else {
      collapse.slideUp();
      arrow.addClass('closed')

    }
  })
});