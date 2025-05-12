const categories = [
  {
    id: 'art-design',
    title: 'Art & Design',
    icon: ':art:',
    courses: 36
  },
  {
    id: 'development',
    title: 'Development',
    icon: ':iphone:',
    courses: 38
  },
  {
    id: 'communication',
    title: 'Communication',
    icon: ':loudspeaker:',
    courses: 38
  },
  {
    id: 'videography',
    title: 'Videography',
    icon: ':movie_camera:',
    courses: 38
  },
  {
    id: 'photography',
    title: 'Photography',
    icon: ':camera:',
    courses: 38
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: ':bar_chart:',
    courses: 38
  },
  {
    id: 'content-writing',
    title: 'Content Writing',
    icon: ':memo:',
    courses: 38
  },
  {
    id: 'finance',
    title: 'Finance',
    icon: ':moneybag:',
    courses: 38
  },
  {
    id: 'science',
    title: 'Science',
    icon: ':microscope:',
    courses: 38
  },
  {
    id: 'network',
    title: 'Network',
    icon: ':globe_with_meridians:',
    courses: 38
  }
];
const courses = [
  {
    id: '1',
    title: 'Create An LMS Website With LearnPress',
    instructor: 'Edward Profile',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    price: 19.99,
    category: 'Photography',
    students: 302,
    lessons: 20,
    hours: 42,
    level: 'Beginner'
  },
  {
    id: '2',
    title: 'Create An LMS Website With LearnPress',
    instructor: 'Edward Profile',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    price: 29.99,
    category: 'Photography',
    students: 245,
    lessons: 18,
    hours: 36,
    level: 'Intermediate'
  },
  {
    id: '3',
    title: 'Create An LMS Website With LearnPress',
    instructor: 'Edward Profile',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    price: 19.99,
    category: 'Photography',
    students: 280,
    lessons: 15,
    hours: 32,
    level: 'Beginner'
  },
  {
    id: '4',
    title: 'Create An LMS Website With LearnPress',
    instructor: 'Edward Profile',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    price: 24.99,
    category: 'Photography',
    students: 310,
    lessons: 22,
    hours: 48,
    level: 'Expert'
  },
  {
    id: '5',
    title: 'Create An LMS Website With LearnPress',
    instructor: 'Edward Profile',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    price: 19.99,
    category: 'Photography',
    students: 267,
    lessons: 19,
    hours: 38,
    level: 'Intermediate'
  },
  {
    id: '6',
    title: 'Create An LMS Website With LearnPress',
    instructor: 'Edward Profile',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    price: 22.99,
    category: 'Photography',
    students: 320,
    lessons: 24,
    hours: 52,
    level: 'Beginner'
  }
];
// DOM ready function
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      const mainNav = document.querySelector('.main-nav');
      mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
    });
  }
  // Render categories if on home page
  const categoriesContainer = document.getElementById('categories-container');
  if (categoriesContainer) {
    renderCategories(categoriesContainer);
  }
  // Render courses if on courses page
  const coursesContainer = document.getElementById('courses-container');
  if (coursesContainer) {
    renderCourses(coursesContainer);
  }
});
// Render categories function
function renderCategories(container) {
  const categoriesHTML = categories.map(category => `
    <a href="courses.html?category=${category.id}" class="category-card">
      <span class="category-icon">${category.icon}</span>
      <h3 class="category-title">${category.title}</h3>
      <p class="category-count">${category.courses} Courses</p>
    </a>
  `).join('');
  container.innerHTML = categoriesHTML;
}
// Render courses function
function renderCourses(container) {
  const coursesHTML = courses.map(course => `
    <div class="course-card">
      <div class="course-image-container">
        <img src="${course.image}" alt="${course.title}" class="course-image">
        <span class="course-category">${course.category}</span>
      </div>
      <div class="course-details">
        <p class="course-instructor">by: ${course.instructor}</p>
        <h3 class="course-title">${course.title}</h3>
        <div class="course-meta">
          <span>:student: ${course.students}</span>
          <span>:books: ${course.lessons} Lessons</span>
          <span>:clock3: ${course.hours}h</span>
        </div>
        <div class="course-footer">
          <span class="course-price">$${course.price.toFixed(2)} <span class="price-free">Free</span></span>
          <button class="view-button">View Now</button>
        </div>
      </div>
    </div>
  `).join('');
  container.innerHTML = coursesHTML;
}