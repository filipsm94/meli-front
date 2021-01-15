const responseProductsByQueryMock = {
    filters: [
        {
            id: 'category',
            name: 'Categorías',
            type: 'text',
            values: [{
                id: 'MLA7262',
                name: 'iPod',
                path_from_root: [{
                    id: 'MLA1000',
                    name: 'Electrónica, Audio y Video'
                }],
            }]
        }
    ],
    results: [
        {
            accepts_mercadopago: true,
            address: { state_id: 'AR-S', state_name: 'Santa Fe', city_id: null, city_name: 'Rosario' },
            attributes: [],
            available_quantity: 1,
            buying_mode: 'buy_it_now',
            catalog_product_id: null,
            category_id: 'MLA7262',
            condition: 'new',
            currency_id: 'ARS',
            domain_id: 'MLA-DIGITAL_PORTABLE_MEDIA_PLAYERS',
            id: 'MLA804207795',
            installments: { quantity: 12, amount: 5672.19, rate: 70.17, currency_id: 'ARS' },
            listing_type_id: 'gold_special',
            official_store_id: null,
            order_backend: 1,
            original_price: null,
            permalink: 'https://articulo.mercadolibre.com.ar/MLA-804207795-ipod-touch-32-gb-representante-oficial-de-apple-_JM',
            price: 39999,
            prices: {},
            sale_price: null,
            seller: { id: 208137579, permalink: 'http://perfil.mercadolibre.com.ar/ONECLICKARG', registration_date: '2016-03-09T13:05:08.000-04:00', car_dealer: false, real_estate_agency: false },
            seller_address: { id: '', comment: '', address_line: '', zip_code: '' },
            shipping: { free_shipping: true, mode: 'me2', tags: Array(2), logistic_type: 'cross_docking', store_pick_up: false },
            site_id: 'MLA',
            sold_quantity: 25,
            stop_time: '2039-07-23T04:00:00.000Z',
        }
    ]
}

const responseProductDetailMock = {
    author: {
        name: 'Felipe',
        lastname: 'Mesa'
    },
    item: {
        id: 'MLA877487392',
        title: 'Ram 1500 5.7 Laramie 2021',
        price: {
            currency: 'ARS',
            amount: 6099000
        },
        picture: 'http://http2.mlstatic.com/D_648688-MLA44172651746_112020-O.jpg',
        condition: 'new',
        free_shipping: false,
        sold_quantity: 20,
        description: 'Accesorios NO incluidos en el precio:\n\n1) PANTALLA TIPO TESLA\n2) PLOTEO GUNMETAL \n3) OPTICAS FONDO NEGRO importadas\n4) JAULA CON PORTAOBJETOS \n5) SEPARADORES DE RUEDA\n6) KIT DE ALTURA 2 PULGADAS           \n7) ESTRIBOS TUBULARES NEGRO MATE\n8) LLANTAS NEGRO MATE  \n9) PARRILLA NEGRO MATE',
        features:[
            {
                id: 'ITEM_CONDITION',
                name: 'Condición del ítem',
                value_id: '2230284',
                value_name: 'Nuevo',
                value_struct: null,
                values: [
                    {
                        id: '2230284',
                        name: 'Nuevo',
                        struct: null
                    }
                ],
                attribute_group_id: '',
                attribute_group_name: ''
            },
        ]
    }
}

module.exports = {
    responseProductsByQueryMock,
    responseProductDetailMock
};