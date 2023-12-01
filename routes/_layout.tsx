import { LayoutProps } from "$fresh/server.ts";
import { Head, asset } from "$fresh/runtime.ts";


export default function Layout({ Component, state }: LayoutProps) {
  // do something with state here
  return (
    <>
    <Head>
      <link rel="stylesheet" href={asset("/global.css")} />
    </Head>
    {/* {props.children} */}
    <header>
        <div class="container" >
            <nav>
                <a href="/">
                    <img src="assets/img/logo.svg" alt="logo" class="logo" width="80" />
                </a>
                <ul>
                    <li><a href="/cakes">Готовые торты</a></li>
                    <li><a href="/filling">Начинки</a></li>
                    <li><a href="/delivery">Доставка</a></li>
                    <li><a href="/#feedback">Контакты</a></li>
                </ul>
                <button>Заказать тортик</button>
            </nav>
         </div>
    </header>
    <section class="banner">
        <div class="content">
                <h1>Домашняя кондитерская</h1>
                <h2>Сделано ❤️ с любовью</h2>

        </div>
    </section>
    <Component />
    <footer>
        <div class="container" >
            <div class="content">
                <div class="footer_main">
                    <div class="footer_info">
                        <p>Домашняя кондитерская<br/>"Моя сладость"</p>
                        <p>ИП Иванова И.И.</p>
                        <p>Все права защищены</p>
                    </div>
                    <div class="footer_social">
                        <p>Мы в социальных сетях:</p>

                        <a href="vk.com">
                            <img width="40px" src="assets/img/icons/vk.png" alt="vk_icon"/>
                            {/* <!-- Вконтакте --> */}
                        </a>

                        <a href="insta.com">
                            <img width="40px" src="assets/img/icons/insta.png" alt="insta_icon"/>
                            {/* <!-- Инста --> */}
                        </a>
                    </div>
                    <div class="footer_menu">
                        <nav>
                            <ul>
                                <li><a href="/cakes">Готовые торты</a></li>
                                <li><a href="/filling">Начинки</a></li>
                                <li><a href="/delivery">Доставка</a></li>
                                <li><a href="/#feedback">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        </div>
        <div class="footer_add">
            <p>При создании учебного сайта использовались изображение с портала <a href="https://freepik.com">Freepik & Pixabay</a> </p>
            <p>Источники вдохновения и текстового содержимого: <a href="https://master-chocolate.ru">master-chocolate.ru</a> и <a href="https://sorokatort.ru">sorokatort.ru</a> </p>
        </div>
    </footer>
 
 
     </>
  );
}


