function renderPage(page) {
  const content = document.getElementById("content");

  let innerHtml = "";
  switch (page) {
    case "home":
      innerHtml = `
                <div class="container mt-5">
                    <h1 class="display-4 text-center mb-4">Welcome to Our Restaurant</h1>
                    <p class="lead text-center mb-4">Enjoy the finest dining experience where flavor meets tradition in a cozy atmosphere.</p>
                    <img src="restaurant-home.jpg" alt="Restaurant Interior" class="img-fluid rounded mx-auto d-block mb-4">
                    <p class="text-center">Visit us to taste the exquisite dishes crafted by our renowned chefs in a warm and welcoming setting.</p>
                </div>`;
      break;

    case "about":
      innerHtml = `
                <div class="container mt-5">
                    <h1 class="display-4 text-center mb-4">About Us</h1>
                    <div class="row">
                        <div class="col-lg-6">
                            <p class="lead">Our story began in 1990, in the heart of the city. With a passion for culinary excellence and a dedication to warm hospitality, we've been serving our guests with delectable dishes and unforgettable experiences.</p>
                            <p>Our team of talented chefs, led by Chef Anna Smith, brings a wealth of culinary expertise and a global palate to create dishes that are both delightful and familiar.</p>
                            <p>From humble beginnings, we've grown into a culinary landmark known for our vibrant ambiance, exceptional service, and a menu that celebrates the best of global cuisine.</p>
                        </div>
                        <div class="col-lg-6">
                            <img src="about-our-chefs.jpg" alt="Our Chefs" class="img-fluid rounded">
                        </div>
                    </div>
                </div>`;
      break;

    case "menu":
      innerHtml = `
                <div class="container mt-5">
                    <h1 class="display-4 text-center mb-4">Our Menu</h1>
                    <div class="row text-center">
                        <div class="col-md-4 mb-4">
                            <h3>Appetizers</h3>
                            <ul class="list-unstyled">
                                <li>Bruschetta</li>
                                <li>Stuffed Mushrooms</li>
                                <li>Garlic Bread</li>
                            </ul>
                        </div>
                        <div class="col-md-4 mb-4">
                            <h3>Main Courses</h3>
                            <ul class="list-unstyled">
                                <li>Grilled Salmon</li>
                                <li>Beef Wellington</li>
                                <li>Mushroom Risotto</li>
                            </ul>
                        </div>
                        <div class="col-md-4 mb-4">
                            <h3>Desserts</h3>
                            <ul class="list-unstyled">
                                <li>Tiramisu</li>
                                <li>Cheesecake</li>
                                <li>Panna Cotta</li>
                            </ul>
                        </div>
                    </div>
                </div>`;
      break;

    default:
      innerHtml =
        '<div class="container mt-5"><h1 class="display-4 text-center">Welcome</h1></div>';
  }

  content.innerHTML = innerHtml;
}

document.addEventListener("DOMContentLoaded", function () {
  renderPage("home");
  document.getElementById("homeLink").addEventListener("click", function () {
    renderPage("home");
  });

  document.getElementById("aboutLink").addEventListener("click", function () {
    renderPage("about");
  });

  document.getElementById("menuLink").addEventListener("click", function () {
    renderPage("menu");
  });
});
