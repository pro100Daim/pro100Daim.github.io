---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
h1: МИ ПОДБАЄМО ПРО ВАС ТА ВАШЕ АВТО
more_text: Детальніше про нас
submit_text: Надіслати
background: /assets/img/road.jpg
contacts:
    # https://fontawesome.com/v5/search - search icons
  - icon: fas fa-phone-alt
    url: "#"
    title: ЗВ'ЯЗАТИСЯ З НАМИ 
    caption: +38 063 777 86 86
  - icon: fas fa-calendar-alt
    url: "#"
    title: ОНЛАЙН ЗАПИС
    caption: Дігностика ходової в подарунок при заміні мастила
  - icon: fas fa-map-marker-alt
    url: "#"
    title: НАША АДРЕСА
    caption: Одеса, с. Лиманка вул. Овідіопольська 1/21
section_1: 
  title: Наші послуги
  view_text: Показати все
  services:
    - image: /assets/img/service-1.jpg
      title: КОМПЬЮТЕРНА ДІАГНОСТИКА
      caption: ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH
    - image: /assets/img/service-2.jpg
      title: РЕМОНТ ГАЛЬМІВНОЇ ТА ХОДОВОЇ СИСТЕМИ
      caption: ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH
    - image: /assets/img/service-3.jpg
      title: РЕМОНТ ТА ОБСЛУГОВУВАННЯ ДВИГУНА
      caption: ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH
    - image: /assets/img/service-3.jpg
      title: РЕМОНТ ТА ОБСЛУГОВУВАННЯ МКПП та АКПП 
      caption: ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH
    - image: /assets/img/service-3.jpg
      title: ВИГОТОВЛЕННЯ ТА РЕМОНТ ВИХЛОПНИХ СИСТЕМ
      caption: ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH
section_2:
  title: МИ РОЗУМІЄМО, ЯК ВАЖЛИВО ЗНАЙТИ НАДІЙНИЙ ТА ЯКІСНИЙ АВТО СЕРВІС
  description: >-
    Car repairs and maintenance can be expensive and no one wants to have pay to repair damage caused by shoddy repair service. When you bring your car into our auto shop, you won’t have to worry because our staff is comprised of ASE certified technicians who are committed to making sure you have a safe dependable car.
  more_text: More about us
  url: "#"
  image: /assets/img/diagnostic.jpg
section_3:
  title: ШВИДКО І НАДІЙНО
  subtitle: Як усе відбувається?
  steps:
    - title: Запис
      caption: Визначаємо дату та час візиту
    - title: Діагностика
      caption: Дослідження стану автомобіля
    - title: Затвердження
      caption: Визначення об'єму робіт та термінів виконання
    - title: Авто в роботі
      caption: Закупка запчастин, виконання робіт
    - title: Завершення ремонту
      caption: Повернення авто клієнту, звіт про виконані роботи
section_4: 
  title: Зв'язатися з нами
  thank_text: Дякую! Ваш запит прийнято!
  action: https://docs.google.com/forms/d/e/1FAIpQLSdsKh7FmXcm47WIm67JGU6yq3ID_XJgLamN4HNWoqJ6m07trw/formResponse
  form: 
    - label: Ім'я
      type: text
      entry: entry.2005620554
    - label: Прізвище
      type: text
      entry: entry.1045781291
    - label: E-mail
      type: email
      entry: entry.1065046570
    - label: Номер телефону
      type: tel
      entry: entry.1166974658
    - label: Додаткова інформація
      type: textarea
      entry: entry.839337160

---

<section id="sec-1" class="page-section hero overflow-visible mb-5 mb-md-7">
  <figure class="position-absolute top-0 start-0 w-100 h-100 img-fit">
    <img src="{{ page.background | relative_url }}" alt="{{ site.title | escape }}">
  </figure>
  <div class="position-relative container h-100">
    <div class="row h-100">
      <div class="col-12 my-auto">
        <h1 class="text-white mb-5">{{ page.h1 | default: "This is H1" | upcase  }}</h1>
        <a href="#sec-2" class="btn btn-secondary text-white">{{ page.more_text | escape }}</a>
      </div>
      <div class="col-12 mt-5 mt-lg-auto">
        <div class="cta row row-cols-1 row-cols-lg-3 mb-n5 mb-lg-0">

          {%- for contact in page.contacts -%}
          <div class="col"> 
            <a href="{{ contact.url }}" class="vstack fs-5 bg-white shadow-sm h-100 p-4 p-lg-5">
              <p><i class="{{ contact.icon }} fa-lg"></i></p>
              <p class="fw-bold ls-sm mb-3">{{ contact.title | upcase }}</p>
              <p class="text-gray">{{ contact.caption }}</p>
            </a>
          </div>
          {%- endfor -%}
          
        </div>
      </div>
    </div>
  </div>
</section>

<section id="sec-2" class="page-section py-6">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="h3 ls-sm">{{ page.section_1.title | default: "This is H2" | upcase }}</h2>
        {%- if page.section_1.services.size > 3 -%}
        <a href="#services" class="ls-sm" data-expand="#services-hidden">
          <u>{{ page.section_1.view_text | default: "View all" | upcase }}</u>
          ({{ page.section_1.services.size }})
        </a>
        {%- endif -%}
      </div>
    </div>
    <div id="services" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 mt-6">

      {%- for service in page.section_1.services -%}
      {%- if forloop.index == 4 -%}
        <div id="services-hidden" class="col-12 w-100" aria-expanded="false">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">          
      {%- endif -%}
      <div class="col">
        <a href="#sec-5" class="card overflow-hidden" data-message="{{ service.title | escape }}">
          <figure class="position-relative img-fit ratio ratio-3x4 mb-4">
            <img src="{{ service.image | relative_url }}" alt="Service">
            <figcaption class="h5 text-white ls-lg p-4 m-0">
             {{ service.caption }}
            </figcaption>
            <b class="card-plus d-flex top-50 start-50 translate-middle text-white bg-secondary rounded-circle">+</b>
          </figure>
          <h3 class="h4 ls-lg">{{ service.title | upcase }}</h3>
        </a>
      </div>     
      {%- if forloop.index == forloop.length and forloop.index > 3 -%}
          </div>
        </div>
      {%- endif -%}
      {%- endfor -%}

    </div>
  </div>
</section>

<section id="sec-3" class="page-section bg-dark py-5 py-xl-7">
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6 col-xl-5">
        <h2 class="h3 text-white ls-sm mb-5">
         {{ page.section_2.title | default: "This is H2" | upcase }}
        </h2>
        <p class="text-gray ls-lg mb-5">{{ page.section_2.description }}</p>
        <p><a href="{{ page.section_2.url | default: '#' }}" class="text-white"><u>{{ page.section_2.more_text | default: "More about us" | upcase }}</u></a></p>
      </div>
      <div class="hstack col-12 col-lg-6 offset-xl-1">
        <figure class="position-relative img-fit ratio ratio-4x3 ms-xl-7 mb-0 mt-5 mt-xl-0">
          <img src="{{ page.section_2.image | relative_url }}" alt="{{ site.title | escape }}">
        </figure>
      </div>
    </div>
  </div>
</section>

<section id="sec-4" class="page-section py-5 py-xl-7">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="display-1">{{ page.section_3.title | default: "This is H2" | upcase }}</h2>
        <h3 class="ls-sm">{{ page.section_3.subtitle | default: "This is H3" }}</h3>
      </div>
      <div class="col-12 mt-5">
        <div class="row row-cols-1 row-cols-lg-3">

          {%- for step in page.section_3.steps -%}
          <div class="col"> 
            <div class="vstack fs-5 bg-white shadow-sm h-100 p-4 p-lg-5">
              <p class="fw-bold mb-3">{{ forloop.index | prepend: "0" }}. {{ step.title | upcase }}</p>
              <p class="text-gray">{{ step.caption }}</p>
            </div>
          </div>
          {%- endfor -%}

        </div>
      </div>
    </div>
  </div>
</section>

<section id="sec-5" class="page-section bg-dark py-5 py-xl-7">
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6 col-xl-5">
        <h2 class="h3 text-white ls-sm mb-5">
         {{ page.section_4.title | default: "This is H2" | upcase }}
        </h2>
        {%- include form.html fields = page.section_4.form action=page.section_4.action message=page.section_4.thank_text -%}
      </div>
    </div>
  </div>
</section>