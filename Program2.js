// Filtrarea cursurilor după categorie
const filterOptions = document.querySelectorAll('.filter-option input');
const courseCards = document.querySelectorAll('.course-card');

filterOptions.forEach(option => {
  option.addEventListener('change', () => {
    const selectedCategory = option.value;

    courseCards.forEach(card => {
      const category = card.dataset.category;

      if (selectedCategory === 'all' || category === selectedCategory) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Navigare între pagini (paginare simplă)
const paginationButtons = document.querySelectorAll('.pagination-button');
const coursesPerPage = 5;
let currentPage = 1;

paginationButtons.forEach(button => {
  button.addEventListener('click', () => {
    const page = parseInt(button.dataset.page);
    currentPage = page;

    const startIndex = (currentPage - 1) * coursesPerPage;
    const endIndex = startIndex + coursesPerPage;

    courseCards.forEach((card, index) => {
      if (index >= startIndex && index < endIndex) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    updatePaginationState();
  });
});

// Actualizare starea butoanelor de paginare
function updatePaginationState() {
  paginationButtons.forEach(button => {
    if (parseInt(button.dataset.page) === currentPage) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

// Inițializare
function initialize() {
  // Afișează doar cursurile de pe prima pagină
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;

  courseCards.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });

  updatePaginationState();
}

initialize();