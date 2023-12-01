

export default function Delivery() {

  return (

    // <style id="delivery">

    //     .delivery_about {
    //         text-align: center;
    //         margin: 10px;
    //     }

    //     .delivery_price {
    //         margin: auto;
    //         width: 50%;
    //         text-align: center;
    //     }

    //     table, th, td {
    //      border: 1px solid;
    //      margin: 10px;
    //      padding: 10px;
    //     }
    //     thead {
    //         background-color: rgb(117, 90, 58);
    //         color: white;
    //     }
    // </style>


    <section class="delivery">
        <div class="content">
            <div class="delivery_about">
                <q>
                Доставка торта — это сложная задача, требующая предельной 
аккуратности. Для меня важно, чтобы ваш торт попал к вам в целости 
и сохранности.

            </q>
        </div>
            <div class="delivery_price">
                <table>
                    <thead>
                        <tr>
                            <td>РАЙОНЫ</td>
                            <td>БЕСПЛАТНАЯ</td>
                            <td>ПЛАТНАЯ</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Московский
                                <br/>Октябрьский
                                <br/>Железнодорожный
                            </td>
                            <td>От 800 рублей</td>
                            <td>200 рублей</td>
                        </tr>
                        <tr>
                            <td>
                                Приокский<br/>
                                Центральный
                                <br/>Солотченчский
                            </td>
                            <td>От 1000 рублей</td>
                            <td>300 рублей</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
 
  );
}
