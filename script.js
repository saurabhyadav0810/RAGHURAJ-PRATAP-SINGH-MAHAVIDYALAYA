const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close nav when clicking a link (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
             if(nav.classList.contains('nav-active')) {
                 nav.classList.remove('nav-active');
                 burger.classList.remove('toggle');
             }
        });
    });
}

// Sticky Header Effect (Optional polish)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

navSlide();

// See More Courses
const seeMoreCoursesBtn = document.getElementById('see-more-courses');
if (seeMoreCoursesBtn) {
    seeMoreCoursesBtn.addEventListener('click', () => {
        const hiddenCourses = document.querySelectorAll('.hidden-course');
        hiddenCourses.forEach(course => {
            course.style.display = 'block'; // Or 'flex' depending on inner layout, but block usually works for grid items
        });
        seeMoreCoursesBtn.style.display = 'none';
    });
}

// See More Gallery
const seeMoreGalleryBtn = document.getElementById('see-more-gallery');
if (seeMoreGalleryBtn) {
    seeMoreGalleryBtn.addEventListener('click', () => {
        const hiddenGalleryItems = document.querySelectorAll('.hidden-gallery');
        hiddenGalleryItems.forEach(item => {
            item.style.display = 'block'; // Grid items just need to exist
        });
        seeMoreGalleryBtn.style.display = 'none';
    });
}

// See More Facilities
const seeMoreFacilitiesBtn = document.getElementById('see-more-facilities');
if (seeMoreFacilitiesBtn) {
    seeMoreFacilitiesBtn.addEventListener('click', () => {
        const hiddenFacilities = document.querySelectorAll('.hidden-facility');
        hiddenFacilities.forEach(item => {
            item.style.display = 'block'; // Or appropriate display type for cards
        });
        seeMoreFacilitiesBtn.style.display = 'none';
    });
}
