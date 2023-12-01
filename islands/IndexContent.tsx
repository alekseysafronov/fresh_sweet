export default function IndexContent() {
  return (
<>
        {/* <h1>IndexContent</h1> */}

        <section class="advantages">
        <div class="container" >
        <div class="content">
            <div class="advantage">
                <img src="assets/img/icons/icon_1.png" alt="натуральные продукты"/>
                <p>Только<br/> натуральные продукты</p>
            </div>
            <div class="advantage">
                <img src="assets/img/icons/icon_2.png" alt="без консервантов"/>
                <p>Без консервантов,<br/> срок хранения 48 часов</p>
            </div>
            <div class="advantage">
                <img src="assets/img/icons/icon_3.png" alt="Индивидуальный дизайн"/>
                <p>Индивидуальный дизайн</p>
            </div>
            <div class="advantage">
                <img src="assets/img/icons/icon_4.png" alt="разные вкусы"/>
                <p>Разнообразие вкусов в одном торте</p>
            </div>
        </div>
    </div>
    </section>

    <section class="select">
        <div class="container">
        <div class="content">
            <h2>А ЧЕГО ЖЕЛАЕТЕ ВЫ?</h2>
            <div class="select_caces">
                <div class="select_cake">
                    <img src="assets/img/select-cake-1.jpg" alt="выбрать готовый торт"/>
                    <a href="cakes.html">ВЫБРАТЬ ГОТОВЫЙ</a>
                </div>
                <div class="select_cake">
                    <img src="assets/img/select-cake-2.jpg" alt="Создать свой"/>
                    <a href="index.html#feedback">СОЗДАТЬ СВОЙ</a>
                </div>
            </div>
            </div>
        </div>
    </section>

    <section class="about"> 
        <div class="container" >
            <div class="about_wrap">
                <h2>Пара слов обо мне</h2>
                <div class="about_text">
                    <p>Меня зовут Екатерина - я профессиональный кондитер и хозяйка 
                        Моей Сладости</p>
                    <p>Мой девиз - честная и открытая работа, индивидуальный подход.
                    </p>
                    <p>В моих тортиках только натуральные ингредиенты и 
                        качественные продукты</p>
                </div>
            </div>
        </div> 
    </section>

    <section class="reviews">
<div class="container" >
            <div class="content">
                <div class="review">
                    <div class="review_text">
                        <img src="assets/img/reviews/review-1.jpg" alt="review1"/>
                        <blockquote>Внимательное отношение к клиенту, вкуснющий торт и 
                            некусачие цены! Огромное спасибо за удовольствие! Екатерине 
                            творческих успехов!</blockquote>
                            
                    </div>
                </div>
                <div class="review" id="naoborot">
                    <div class="review_text">
                        <blockquote>Торт натуральный, выполнен искусно и подложка лишь 
                            подчеркнула торжественное лакомство! Спасибо и успехов вашему 
                            бизнесу!</blockquote>
                        <img src="assets/img/reviews/review-2.jpg" alt="review2"/>
    
                    </div>
                </div>
                <div class="review">
                    <div class="review_text">
                        <img src="assets/img/reviews/review-3.jpg" alt="review3"/>
                        <blockquote>Изысканный вкус тортиков не оставил равнодушным ни одного 
                            сотрудника нашего Холдинга! Огромное спасибо за настроение, сладкую 
                            жизнь и превосходный вкус и дизайн Ваших тортов!!
                            </blockquote>
                    </div>
                </div>
            </div>
</div>
    </section>

    <section class="feedback" id="feedback">
        <div class="content">
            <h2>Готов заказать или не определился? Звони!</h2>
            <a href="tel:+79991234567">
                <h3>+7 (999) 123-45-67</h3>
            </a>
            <h4>... или оставь свой номер и мы перезвоним</h4>
            <form action="answer.html">
            <div class="form_contact">
                <input type="text" 
                placeholder="Напишите свое имя" 
                required pattern="[A-Za-zА-Яа-яЁё]{2,}"
                name="" 
                id=""/>
                
                <input 
                type="tel" 
                title="Например +79871234567" 
                placeholder="+79871234567" 
                required pattern="[0-9]{11}"
                name="tel-number" 
                id="tel-number"/>
            
            
            </div>
            <div class="form_download">
                ЕСТЬ ФОТО ПРИМЕРА?
                <label for="download">ЗАГРУЖАЙ ЗДЕСЬ</label>
                <input type="file" 
                name="download" 
                id="download"
                accept=".png, .jpg, .jpeg"
                />

            </div>
            <div class="form_submit">
                <input type="checkbox" 
                name="personal" 
                id="personal"/>
                <label for="personal">Я согласен на обработку персональных данных</label>
                <input type="submit" value="Пообщаться"/>

            </div>
           </form>

        </div>
    </section>

    <section class="map">
        <div class="content">
            <h2>Мы на карте</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2307.9755323987715!2d39.664389!3d54.6572559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4149e2deec0441eb%3A0x2043559af0b2c6e8!2z0L_RgC4g0KjQsNCx0YPQu9C40L3QsCwgMjIsINCg0Y_Qt9Cw0L3RjCwg0KDRj9C30LDQvdGB0LrQsNGPINC-0LHQuy4sIDM5MDAxMA!5e0!3m2!1sru!2sru!4v1700488167716!5m2!1sru!2sru" 
            width="1000" height="450" 
            style="border:0;" 
            // allowfullscreen="" 
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <h3>г.Рязань проезд Шабулина 22</h3>
        </div>
    </section>


    </>
  );
}
