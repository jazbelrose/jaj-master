let articlesPerPage = 4; // Number of articles to display per page
let currentPage = 1;
let articles = []; // This will hold your blog post data
let trendingPosts = []; // Array to hold trending posts

// Fetch blog posts from your JSON file
fetch('js/blogPosts.json')
  .then(response => response.json())
  .then(data => {
    articles = data;
    trendingPosts = data.filter(article => article.trending); // Filter trending posts
    loadPage(currentPage); // Load the first page of articles
    loadTrendingPosts(); // Load trending posts
  })
  .catch(error => console.error('Error fetching articles:', error));

// Function to load and display posts for the selected page
function loadPage(page) {
  const blogPostsContainer = document.getElementById('blog-posts-container');
  blogPostsContainer.innerHTML = ''; // Clear previous posts

  let start = (page - 1) * articlesPerPage;
  let end = page * articlesPerPage;
  let postsToDisplay = articles.slice(start, end);

  postsToDisplay.forEach(article => {
    let postHtml = `
      <article class="blog-post">
        <div class="blog-post-thumb">
          <img src="${article.images[0]}" alt="${article.title} Thumbnail" />
        </div>
        <div class="blog-post-content">
          <div class="blog-post-tag">
            <a href="category.html">${article.tags.join(', ')}</a>
          </div>
          <div class="blog-post-title">
            <a href="${article.slug}.html">${article.title}</a>
          </div>
          <div class="blog-post-meta">
            <ul>
              <li>By <a href="about.html">J&J</a></li>
              <li><i class="fa fa-clock-o"></i> ${article.date} - ${article.readingTime} min</li>
            </ul>
          </div>
          <p>${article.description}</p>
          <a href="${article.slug}.html" class="blog-post-action">read more <i class="fa fa-angle-right"></i></a>
        </div>
      </article>
    `;
    blogPostsContainer.innerHTML += postHtml;
  });

  updatePagination();
  
  
}

// Function to load and display trending posts

function loadTrendingPosts() {
  const trendingContainer = document.querySelector('.blog-post-widget');
  trendingContainer.innerHTML = ''; // Clear previous trending posts

  trendingPosts.forEach(article => {
    let trendingHtml = `
      <div class="latest-widget">
        <div class="latest-widget-thum">
          <a href="${article.slug}.html">
            <img src="${article.images[0]}" alt="${article.title} Thumbnail" />
          </a>
          <div class="icon">
            <a href="${article.slug}.html">
              <img src="images/blog/icon.svg" alt="icon" />
            </a>
          </div>
        </div>
        <div class="latest-widget-content">
          <div class="content-title">
            <a href="${article.slug}.html">${article.title}</a>
          </div>
          <div class="content-meta">
            <ul>
              <li><i class="fa fa-clock-o"></i> ${article.date} - ${article.readingTime} min</li>
            </ul>
          </div>
        </div>
      </div>
    `;
    trendingContainer.innerHTML += trendingHtml;
  });
}

function updatePagination() {
  const paginationContainer = document.getElementById('pagination-container');
  paginationContainer.innerHTML = ''; // Clear previous pagination links

  let totalPages = Math.ceil(articles.length / articlesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    paginationContainer.innerHTML += `
      <li class="page-item ${i === currentPage ? 'active' : ''}">
        <a class="page-link" href="javascript:void(0)" onclick="event.preventDefault(); goToPage(${i});">${i}</a>
      </li>
    `;
  }

  paginationContainer.innerHTML += `
    <li class="page-item">
      <a class="page-link" href="javascript:void(0)" onclick="event.preventDefault(); goToPage(${currentPage + 1});">
        <i class="fa fa-angle-right"></i>
      </a>
    </li>
  `;
}


function goToPage(page) {
  const blogPostsContainer = document.getElementById('blog-posts-container');

  if (page >= 1 && page <= Math.ceil(articles.length / articlesPerPage)) {
    // Fade out current content
    blogPostsContainer.classList.add('fade-out');

    setTimeout(() => {
      currentPage = page;
      loadPage(currentPage); // Reload the page content

      // Remove fade-out and add fade-in for new content
      blogPostsContainer.classList.remove('fade-out');
      blogPostsContainer.classList.add('fade-in');

      setTimeout(() => {
        blogPostsContainer.classList.remove('fade-in');
      }, 500); // This duration should match the CSS transition

      // Smooth scroll to the top after loading the page
      document.querySelector('#top').scrollIntoView({
        behavior: 'smooth'
      });
    }, 500); // Match the animation duration
  }
}

