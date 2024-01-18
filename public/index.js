document.addEventListener('DOMContentLoaded', function () {

	const slider = document.querySelector('.slider');
	const sliderDescription = document.querySelector('.slider-description')
	const leftArrow = document.querySelector('.left');
	const rightArrow = document.querySelector('.right');

	var sectionIndex = 0;

	leftArrow.addEventListener('click', function() {
		sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 2;
		slider.style.transform = 'translate(' + (sectionIndex) * -33.33 + '%)';
		sliderDescription.style.transform = 'translate(' + (sectionIndex) * -33.33 + '%)';
	});

	rightArrow.addEventListener('click', function() {
		sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 0;
		slider.style.transform = 'translate(' + (sectionIndex) * -33.33 + '%)';
		sliderDescription.style.transform = 'translate(' + (sectionIndex) * -33.33 + '%)';
	});
});