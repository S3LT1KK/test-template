document.querySelector('.link_1').onclick = function() {
	  document.querySelector('.link_1').classList.add('active');
	  document.querySelector('.link_2').classList.remove('active');
	  document.querySelector('.link_3').classList.remove('active');
	  document.querySelector('.uslugi-block1__image').classList.remove('uslugi-text-visibility');
	  document.querySelector('.uslugi-block2__image').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-block3__image').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text1').classList.remove('uslugi-text-visibility');
	  document.querySelector('.uslugi-text2').classList.remove('uslugi-text-visibility');
	  document.querySelector('.uslugi-text3').classList.remove('uslugi-text-visibility');
	  document.querySelector('.uslugi-text1-2ndblock').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text2-2ndblock').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text3-2ndblock').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text1-3rdblock').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text2-3rdblock').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text3-3rdblock').classList.add('uslugi-text-visibility');
}
document.querySelector('.link_2').onclick = function() {
	  document.querySelector('.link_2').classList.add('active');
	  document.querySelector('.link_1').classList.remove('active');
	  document.querySelector('.link_3').classList.remove('active');
	  document.querySelector('.uslugi-block1__image').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-block2__image').classList.remove('uslugi-text-visibility');
	  document.querySelector('.uslugi-block3__image').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text1').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text2').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text3').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text1-2ndblock').classList.remove('uslugi-text-visibility');
	  document.querySelector('.uslugi-text2-2ndblock').classList.remove('uslugi-text-visibility');
	  document.querySelector('.uslugi-text3-2ndblock').classList.remove('uslugi-text-visibility');
	  document.querySelector('.uslugi-text1-3rdblock').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text2-3rdblock').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text3-3rdblock').classList.add('uslugi-text-visibility');
}
document.querySelector('.link_3').onclick = function() {
	  document.querySelector('.link_3').classList.add('active');
	  document.querySelector('.link_1').classList.remove('active');
	  document.querySelector('.link_2').classList.remove('active');
	  document.querySelector('.uslugi-block1__image').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-block2__image').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-block3__image').classList.remove('uslugi-text-visibility');
	  document.querySelector('.uslugi-text1').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text2').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text3').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text1-2ndblock').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text2-2ndblock').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text3-2ndblock').classList.add('uslugi-text-visibility');
	  document.querySelector('.uslugi-text1-3rdblock').classList.remove('uslugi-text-visibility');
	  document.querySelector('.uslugi-text2-3rdblock').classList.remove('uslugi-text-visibility');
	  document.querySelector('.uslugi-text3-3rdblock').classList.remove('uslugi-text-visibility');
}