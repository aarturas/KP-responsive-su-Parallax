// ===============================================================
// Irasysime funkcija window, kuri paleis funkcija scroll
// ===============================================================

$(window).scroll(function () {
  // ir mes perduosime funkcija PARALLAX
  parallax();
});

// ===============================================================
//   Dabar aprasome funkcija PARALLAX. Kas bus parallax:
//   musu kintamasis SCROLL, bus lygus WINDOW  ir pridesime
//   funkcija SCROLL TOP / W - Reiskia dviguba scrolinima
//    su wScroll kart (*) 0.5 padidiname/pamaziname greiti
// ===============================================================

function parallax() {
  var wScroll = $(window).scrollTop();
  // console.log('Sveiki su parallaxu');
  // Dabar norime pasiekti, kur idejome i HTML koda parallax -- bg
  // ir norime pakeisti musu CSS properties BACKGROUN - POSITION,
  // ir kai pasieksime, norime pakeisti i CENTER position
  $('.parallax--bg').css(
    'background-position',
    'center ' + wScroll * 0.5 + 'px'
  );

  //  Norime pakeisti TOP properties
  // -5 bus pradine pozicija ir pridesime greiti * 0.009 'EM'
  // "EM" reiks, kad pozicija bus nuo pat pat virsaus
  $('.parallax--box').css('top', -5 + wScroll * 0.009 + 'em');
}
