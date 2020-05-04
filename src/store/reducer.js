import * as actionTypes from './actions';



const initialState = {
    search: '',
    filterWhat: '',
    filterWhen: '',
    filterWhere: '',

    articles: [
        {
            id: 1,
            tag1: "СТАТЬИ",
            tag2: "НОВЕЙШЕЕ ВРЕМЯ",
            tag3: "ЕВРОПА",
            title: "Вытрезвитель — кошмар пролетария",
            bgImg: "url(https://i.ibb.co/s9YN8Zw/img-2.png)"
        },
        {
            id: 2,
            tag1: "ТЕСТЫ",
            tag2: "СРЕДНИЕ ВЕКА",
            tag3: "ЕВРОПА",
            title: "Кристина Шведская: королева, промотавшая королевство",
            bgImg: "url(https://i.ibb.co/MGx7rFK/img-7.png)"
        },
        {
            id: 3,
            tag1: "СТАТЬИ",
            tag2: "СРЕДНИЕ ВЕКА",
            tag3: "ЕВРОПА",
            title: "Ельцин хотел забрать?",
            bgImg: "url(https://i.ibb.co/BtN56gz/img-4.png)",

            s_width: "620px",
            s_flex: "flex-start",
            s_0: "0",
            s_20: "20px",
            s_margin: "0 auto",
            s_SeparatorW: "235px",
            s_SeparatorH: "15px",
            s_fontH3: "30px"
        },
        {
            id: 4,
            tag1: "ТЕСТЫ",
            tag2: "АЗИЯ",
            tag3: "ЕВРОПА",
            title: "Гражданская война в Камбодже",
            bgImg: "url(https://i.ibb.co/6HXnMQB/img-5.png)"
        },

        {
            id: 5,
            tag1: "СБОРНИКИ",
            tag2: "12010",
            tag3: "15 минут",
            title: "Машина времени",
            bgImg: "url(https://i.ibb.co/PQB1vWB/img-1.png)",

            s_height: "50%",
            p: "В истории немало знаковых, переломных и важных годов. И немало людей, которые с удовольствием отправились бы в прошлое, если бы могли."
        },

        {
            id: 6,
            tag1: "ЕГЭ",
            tag2: "XII ВЕК",
            tag3: "ЮЖНАЯ АМЕРИКА",
            title: "Инки, майя или ацтеки?",
            bgImg: "url(https://i.ibb.co/K5yn10F/img-6.png)"
        },

        {
            id: 7,
            tag1: "ТЕСТЫ",
            tag2: "BC",
            tag3: "АЗИЯ",
            title: "Гражданская война в Камбодже",
            bgImg: "url(https://i.ibb.co/6HXnMQB/img-5.png)"
        },
        {
            id: 8,
            tag1: "НОВОЕ ВРЕМЯ",
            tag2: "АЗИЯ",
            tag3: "ЕВРОПА",
            title: "Гражданская война в Камбодже",
            bgImg: "url(https://i.ibb.co/6HXnMQB/img-5.png)"
        },
        {
            id: 9,
            tag1: "ЕГЭ",
            tag2: "BC",
            tag3: "ЮЖНАЯ АМЕРИКА",
            title: "Инки, майя или ацтеки?",
            bgImg: "url(https://i.ibb.co/K5yn10F/img-6.png)"
        },
        {
            id: 10,
            tag1: "ЕГЭ",
            tag2: "Middleages",
            tag3: "АФРИКА",
            title: "Яунде, Дуала или Лимбе?",
            bgImg: "url(https://i.ibb.co/K5yn10F/img-6.png)"
        },

    ],
    appliedFilters: []
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FILTER_BY_VALUE:
            return {
                ...state,
                search: action.text,
            }
        case actionTypes.CLEAR_SEARCH:
            return {
                ...state,
                search: action.search = ""
            }

        case actionTypes.FILTER_BY_WHAT:
            return {
                ...state,
                filterWhat: action.whatValue
            }

        case actionTypes.FILTER_BY_WHERE:
            return {
                ...state,
                filterWhere: action.whereValue
            }
        case actionTypes.FILTER_BY_WHEN:
            return {
                ...state,
                filterWhen: action.whenValue
            }
        default:
            return state;
    }
}
export default reducer;