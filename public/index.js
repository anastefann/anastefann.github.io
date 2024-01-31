document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetElementId = this.getAttribute('href').substring(1);
            const targetElement = targetElementId ? document.getElementById(targetElementId) : null;

            if (targetElementId === 'home') {
                // Scroll to the top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
            } else if (targetElement) {
                // Scroll to the target element with margin
                const offset = 100; // Set your desired margin value
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

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