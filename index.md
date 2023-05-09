---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
image: /assets/img/brand.jpg
h1: JDM Auto Repair - маленький куточок Японії в українській Одесі
more_text: Детальніше про послуги
submit_text: Надіслати
background: /assets/img/brand.jpg
contacts:
    # https://fontawesome.com/v5/search - search icons
  - icon: fas fa-phone-alt
    url: "tel:+380637778686"
    title: ЗВ'ЯЗАТИСЯ З НАМИ 
    caption: +38 063 777 86 86
  - icon: fas fa-calendar-alt
    url: "#sec-5"
    title: ОНЛАЙН ЗАПИС
    caption: Дігностика ходової в подарунок при заміні мастила
  - icon: fas fa-map-marker-alt
    url: "https://goo.gl/maps/HmiyRqeEnM71hVcdA"
    title: НАША АДРЕСА
    caption: Одеса, с. Лиманка вул. Овідіопольська 1/21
section_1: 
  title: Оберіть послугу
  view_text: Показати все
  services:
    - image: /assets/img/service-1.jpg
      title: Діагностика
      caption: Професійна комп'ютерна діагностика
    - image: /assets/img/service-2.jpg
      title: Технічне осблуговування
      caption: Регламентне, планове, сезонне технічне осблуговування
    - image: /assets/img/service-4.jpg
      title: Двигун
      caption: Обслуговування, діагностика та ремонт будь якої складності
    - image: /assets/img/service-5.jpg
      title: Трансміссія
      caption: Обслуговування, діагностика та ремонт будь якої складності
    - image: /assets/img/service-3.jpg
      title: Ходова частина
      caption: Обслуговування, діагностика та ремонт будь якої складності
    - image: /assets/img/service-6.jpg
      title: Гальмівна система
      caption: Обслуговування, діагностика та ремонт будь якої складності
    - image: /assets/img/service-7.jpg
      title: Паливна система
      caption: Обслуговування, діагностика та ремонт будь якої складності
    - image: /assets/img/service-8.jpg
      title: Система впуску
      caption: Обслуговування, діагностика та ремонт будь якої складності
    - image: /assets/img/service-9.jpg
      title: Систама опалення та кондиціонер
      caption: Обслуговування, діагностика та ремонт будь якої складності
    - image: /assets/img/service-10.jpg
      title: Вихлопна система
      caption: Обслуговування, діагностика та ремонт будь якої складності. Видалення екології. Прошивка під Євро-2.
section_2:
  title: МИ РОЗУМІЄМО, ЯК ВАЖЛИВО ЗНАЙТИ НАДІЙНИЙ ТА ЯКІСНИЙ АВТОСЕРВІС
  description: >-
    З самого дитинства засновники нашого автосервісу захоплюється японськими автомобілям, але якісного сервісу за роки так й не вдалось знайти. Тому ми вирішили створити власний сервіс, екосистема якого будується як одна родина, тому ми впевнено можемо сказати, що кожен з клієнтів - член нашої великої сім'ї.
  url: "#sec-2"
  image: /assets/img/diagnostic.jpg
section_3:
  title: ЯКІСНИЙ РЕМОНТ ДЛЯ НАДІЙНИХ АВТОМОБІЛІВ
  subtitle: Як усе відбувається?
  price_text: Розрахувати вартість
  url: "#sec-5"
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
    - title: Ваш відгук
      caption: Поділіться враженнями у наших соц. мережах
section_4: 
  title: Зв'язатися з нами
  thank_text: Дякую! Ваш запит прийнято!
  action: https://docs.google.com/forms/d/e/1FAIpQLSdqRn6pG1uFlweXaNYKNC60LPQZIcjBIWG9eERzKxG4Vvwltw/formResponse
  background: /assets/img/japan.jpg
  form: 
    - label: Ім'я
      type: text
      entry: entry.2005620554
    - label: Прізвище
      type: text
      entry: entry.1065046570
    - label: Номер телефону
      type: tel
      entry: entry.1166974658
    - label: E-mail
      type: email
      entry: entry.1045781291
    - label: Додаткова інформація
      type: textarea
      entry: entry.839337160

---

<section id="sec-1" class="page-section hero bg-dark overflow-visible mb-5 mb-md-7">
  <figure class="position-absolute top-0 start-0 w-100 h-100 img-fit">
    <img class="opacity-70" src="{{ page.background | relative_url }}" alt="{{ site.title | escape }}">
  </figure>
  <div class="position-relative container h-100">
    <div class="row h-100">
      <div class="col-12 my-auto text-center text-md-start">
        <h1 class="text-white my-5">{{ page.h1 | default: "This is H1" | upcase  }}</h1>
        <a href="#sec-2" class="btn btn-secondary text-white">{{ page.more_text | escape }}</a>
      </div>
      <div class="col-12 mt-5 mt-lg-auto">
        <div class="cta row row-cols-1 row-cols-lg-3 mb-n5 mb-lg-0 gy-4">

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

<section id="sec-2" class="page-section py-6 py-lg-7">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="h3 ls-sm mb-5">{{ page.section_1.title | default: "This is H2" | upcase }}</h2>
        {%- comment -%} {%- if page.section_1.services.size > 3 -%}
        <a href="#services" class="ls-sm" data-expand="#services-hidden">
          <u>{{ page.section_1.view_text | default: "View all" | upcase }}</u>
          ({{ page.section_1.services.size }})
        </a>
        {%- endif -%} {%- endcomment -%}
      </div>
    </div>
    <div id="services" class="row row-cols-2 row-cols-lg-4 gy-4">

      {%- for service in page.section_1.services -%}
      {%- comment -%} {%- if forloop.index == 4 -%}
        <div id="services-hidden" class="col-12 w-100" aria-expanded="false">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">          
      {%- endif -%} {%- endcomment -%}
      <div class="col">
        <a href="#sec-5" class="card overflow-hidden" data-message="{{ service.title | escape }}" title="{{ service.caption | escape }}">
          <figure class="position-relative img-fit ratio ratio-4x3 mb-0">
            <img src="{{ service.image | relative_url }}" alt="Service">
            <figcaption class="h5 text-white ls-lg p-3 p-sm-4 m-0">
             {{ service.title }}
            </figcaption>
            <b class="card-plus d-flex top-50 start-50 translate-middle text-white bg-secondary rounded-circle">+</b>
          </figure>
          {%- comment -%} <h3 class="h4 ls-lg">{{ service.title | upcase }}</h3> {%- endcomment -%}
        </a>
      </div>     
      {%- comment -%} {%- if forloop.index == forloop.length and forloop.index > 3 -%}
          </div>
        </div>
      {%- endif -%} {%- endcomment -%}
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
        <p><a href="{{ page.section_2.url | default: '#' }}" class="text-white"><u>{{ page.more_text | default: "More about us" | upcase }}</u></a></p>
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
        <h2 class="display-3">{{ page.section_3.title | default: "This is H2" | upcase }}</h2>
        <h3 class="ls-sm">{{ page.section_3.subtitle | default: "This is H3" }}</h3>
      </div>
      <div class="col-12 mt-5">
        <div class="row row-cols-1 row-cols-lg-3 gy-4">

          {%- for step in page.section_3.steps -%}
          <div class="col"> 
            <div class="vstack fs-5 bg-white shadow-sm h-100 p-4 p-lg-5">
              <p class="fw-bold mb-3">{{ forloop.index | prepend: "0" }}. {{ step.title | upcase }}</p>
              <p class="text-gray">{{ step.caption }}</p>
            </div>
          </div>
          {%- endfor -%}

        </div>
        <div class="row">
          <div class="col-12 text-center">
            <a href="{{ page.section_3.url | default: '#' }}" class="btn btn-secondary text-white mt-6">
              {{ page.section_3.price_text | escape }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="sec-5" class="page-section bg-dark py-5 py-xl-7">
  <figure class="position-absolute top-0 start-0 w-100 h-100 img-fit">
    <img class="opacity-10" src="{{ page.section_4.background | relative_url }}" alt="{{ site.title | escape }}">
  </figure>
  <div class="position-relative container">
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