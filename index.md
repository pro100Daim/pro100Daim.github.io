---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
h1: KEEPING YOU ON THE ROAD <br>WITH SERVICE YOU CAN TRUST
section-1: 
  title: Our services

---

<section class="page-section hero overflow-visible mb-5 mb-md-7">
  <figure class="position-absolute top-0 start-0 w-100 h-100 img-fit">
    <img src="{{ '/assets/img/road.jpg' | relative_url }}" alt="Hero">
  </figure>
  <div class="position-relative container h-100">
    <div class="row h-100">
      <div class="col-12 my-auto">
        <h1 class="text-white mb-5">{{ page.h1 | default: "This is H1" | upcase  }}</h1>
        <button class="btn btn-secondary text-white" type="button">Show more</button>
      </div>
      <div class="col-12 mt-5 mt-lg-auto">
        <div class="cta row row-cols-1 row-cols-lg-3 mb-n5 mb-lg-0">
          <div class="col"> 
            <a href="#" class="vstack fs-5 bg-white shadow-sm h-100 p-4 p-lg-5">
              <p><i class="fas fa-phone-alt fa-lg"></i></p>
              <p class="fw-bold ls-sm mb-3">CALL US NOW 222-222-222</p>
              <p class="text-gray">Feel free to call us</p>
            </a>
          </div>
          <div class="col">
            <a href="#" class="vstack fs-5 bg-white shadow-sm h-100 p-4 p-lg-5">
              <p><i class="fas fa-phone-alt fa-lg"></i></p>
              <p class="fw-bold ls-sm mb-3">CALL US NOW 222-222-222</p>
              <p class="text-gray">Feel free to call us</p>
            </a>
          </div>
          <div class="col">
            <a href="#" class="vstack fs-5 bg-white shadow-sm h-100 p-4 p-lg-5">
              <p><i class="fas fa-phone-alt fa-lg"></i></p>
              <p class="fw-bold ls-sm mb-3">CALL US NOW 222-222-222</p>
              <p class="text-gray">Feel free to call us</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="page-section py-6">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="h3 ls-sm">{{ page.section-1.title | default: "This is H2" | upcase }}</h2>
        <a href="#" class="ls-sm"><u>{{ "View all" | upcase }}</u></a>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 mt-6">
      <div class="col">
        <a href="#" class="card overflow-hidden">
          <figure class="position-relative img-fit ratio ratio-3x4 mb-4">
            <img src="{{ '/assets/img/service-1.jpg' | relative_url }}" alt="Service">
            <figcaption class="h5 text-white ls-lg p-4 m-0">
             ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH
            </figcaption>
            <b class="card-plus d-flex top-50 start-50 translate-middle text-white bg-secondary rounded-circle">+</b>
          </figure>
          <h3 class="h4 ls-lg">{{ "DIAGNOSTIC" | upcase }}</h3>
        </a>
      </div>
      <div class="col">
        <a href="#" class="card overflow-hidden">
          <figure class="position-relative img-fit ratio ratio-3x4 mb-4">
            <img src="{{ '/assets/img/service-2.jpg' | relative_url }}" alt="Service">
            <figcaption class="h5 text-white ls-lg p-4 m-0">
             ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH
            </figcaption>
            <b class="card-plus d-flex top-50 start-50 translate-middle text-white bg-secondary rounded-circle">+</b>
          </figure>
          <h3 class="h4 ls-lg">{{ "TIRES & WHEELS" | upcase }}</h3>
        </a>
      </div>
      <div class="col">
        <a href="#" class="card overflow-hidden">
          <figure class="position-relative img-fit ratio ratio-3x4 mb-4">
            <img src="{{ '/assets/img/service-3.jpg' | relative_url }}" alt="Service">
            <figcaption class="h5 text-white ls-lg p-4 m-0">
             ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH
            </figcaption>
            <b class="card-plus d-flex top-50 start-50 translate-middle text-white bg-secondary rounded-circle">+</b>
          </figure>
          <h3 class="h4 ls-lg">{{ "ENGINES" | upcase }}</h3>
        </a>
      </div>
    </div>
  </div>
</section>

<section class="page-section bg-dark py-5 py-xl-7">
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6 col-xl-5">
        <h2 class="h3 text-white ls-sm mb-5">
         {{ "WE UNDERSTAND HOW IMPORTANT IT IS TO FIND THE RIGHT AUTO SERVICE" | upcase }}
        </h2>
        <p class="text-gray ls-lg mb-5">Car repairs and maintenance can be expensive and no one wants to have pay to repair damage caused by shoddy repair service. When you bring your car into our auto shop, you won’t have to worry because our staff is comprised of ASE certified technicians who are committed to making sure you have a safe dependable car.</p>
        <p><a href="#" class="text-white"><u>{{ "More about us" | upcase }}</u></a></p>
      </div>
      <div class="hstack col-12 col-lg-6 offset-xl-1">
        <figure class="position-relative img-fit ratio ratio-4x3 ms-xl-7 mb-0 mt-5 mt-xl-0">
          <img src="{{ '/assets/img/diagnostic.jpg' | relative_url }}" alt="Diagnostic">
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="page-section py-5 py-xl-7">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="display-1">{{ "FAST & EASY" | upcase }}</h2>
        <h3 class="ls-sm">{{ "Our work process" | upcase }}</h3>
      </div>
      <div class="col-12 mt-5">
        <div class="row row-cols-1 row-cols-lg-3">
          <div class="col"> 
            <div class="vstack fs-5 bg-white shadow-sm h-100 p-4 p-lg-5">
              <p class="fw-bold mb-3">{{ "01. Request your quote" | upcase }}</p>
              <p class="text-gray">We will be there when you most need us</p>
            </div>
          </div>
          <div class="col">
            <div class="vstack fs-5 bg-white shadow-sm h-100 p-4 p-lg-5">
              <p class="fw-bold mb-3">{{ "02. Bring your vehicle" | upcase }}</p>
              <p class="text-gray">We are car guys at heart</p>
            </div>
          </div>
          <div class="col">
            <div class="vstack fs-5 bg-white shadow-sm h-100 p-4 p-lg-5">
              <p class="fw-bold mb-3">{{ "03. Get it repaired" | upcase }}</p>
              <p class="text-gray">High quality, low cost car servicing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="page-section bg-dark py-5 py-xl-7">
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6 col-xl-5">
        <h2 class="h3 text-white ls-sm mb-5">
         {{ "Contact us" | upcase }}
        </h2>
        <form class="form text-white">
          <div class="row gx-5 gy-4">
            <div class="col-6">
              <input class="form-control ls-sm" type="text" placeholder="Name">
            </div>
            <div class="col-6">
              <input class="form-control ls-sm" type="text" placeholder="Lastname">
            </div>
            <div class="col-6">
              <input class="form-control ls-sm" type="email" placeholder="E-mail">
            </div>
            <div class="col-6">
              <input class="form-control ls-sm" type="tel" placeholder="Phone">
            </div>
            <div class="col-12">
              <textarea class="form-control ls-sm" rows="5" placeholder="Message"></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>