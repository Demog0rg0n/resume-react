import filmtubeImg from "../images/filmtube.png"
import todoImg from "../images/todo.png"
import rumtibet from "../images/rumtibet.png"


export const portfolioItems = [
    {
        title: "FilmTube", 
        desc: "Аналог сайта Кинопоиск, в котором искользуется rest API от самого кинопоиска.На данный момент функционал не слишком большой. Можно посмотреть страну производства, год производства, жанры и длительность, помимо этого есть ссылки на источники где при желании можно посмотреть данный фильм, а также кадры из фильма и рецензии на него. В дальнейшем планирую добавить актеров из фильма и страницу актера, на которой будут показаны награды и фильмы в которых он играл, а также фильтры по жанрам и годам", 
        gitLink: "https://github.com/Demog0rg0n/FilmTube", 
        link: "https://film-tube.vercel.app/", 
        type: "React/JS", 
        img: filmtubeImg,
    },
    {
        title: "todos", 
        desc: "Максимально простой todo лист, из функционала: добавление задачи, перенос задачи в разряд выполненых, и табсы для отображения задач по прогрессу", 
        gitLink: "https://github.com/Demog0rg0n/todo-list", 
        link: "https://todo-list-gules-zeta.vercel.app/", 
        type: "React/JS", 
        img: todoImg,
    },
    {
        title: "rumtibet",
        desc: "Несложная верстка одностраничного сайта по туризму, весртал по готовому макету, страница была всего одна, ссылку на макет оставлю в футере", 
        gitLink: "https://github.com/Demog0rg0n/FilmTube", 
        link: "https://rumtibet-umber.vercel.app/", 
        type: "Вёрстка", 
        img: rumtibet,
    },
]
