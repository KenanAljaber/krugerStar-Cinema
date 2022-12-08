import "../styles/movieList.css"
import Movie from "./Movie";
const MovieList = () => {
    const movies = [{
        id: crypto.randomUUID(),
        name: "Game of thrones",
        cover: "https://th.bing.com/th/id/R.a45b004ae05e0ec504ff62b37361063a?rik=kpKACratk9YjAA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-kWvgUruIjbY%2fT0F2NXUz_hI%2fAAAAAAAAACY%2f7luAzTpO7sU%2fs1600%2fGoT%2bcover.jpg&ehk=tmFEoCb5KYHUkE6wXkGol3g00PLvj9Yx9AkmS9nLuME%3d&risl=&pid=ImgRaw&r=0",
        country: "England"
    },
    {
        id: crypto.randomUUID(),
        name: "Game of thrones",
        cover: "https://th.bing.com/th/id/OIP.lEPKHjfgyqToCt01t9T1LQHaML?pid=ImgDet&rs=1",
        country: "England"
    },
    {
        id: crypto.randomUUID(),
        name: "Game of thrones",
        cover: "https://allbookshub.com/wp-content/uploads/2019/05/A-Game-of-Thrones-Pdf.jpg",
        country: "England"
    },
    {
        id: crypto.randomUUID(),
        name: "Game of thrones",
        cover: "https://hadafnovin.com/wp-content/uploads/2019/04/A-Game-of-Thrones-Book-1-2.jpg",
        country: "England"
    }, {
        id: crypto.randomUUID(),
        name: "Game of thrones",
        cover: "https://allbookshub.com/wp-content/uploads/2019/05/A-Game-of-Thrones-Pdf.jpg",
        country: "England"
    },
    {
        id: crypto.randomUUID(),
        name: "Game of thrones",
        cover: "https://hadafnovin.com/wp-content/uploads/2019/04/A-Game-of-Thrones-Book-1-2.jpg",
        country: "England"
    },   {
        id: crypto.randomUUID(),
        name: "Game of thrones",
        cover: "https://th.bing.com/th/id/OIP.lEPKHjfgyqToCt01t9T1LQHaML?pid=ImgDet&rs=1",
        country: "England"
    },
    {
        id: crypto.randomUUID(),
        name: "Game of thrones",
        cover: "https://allbookshub.com/wp-content/uploads/2019/05/A-Game-of-Thrones-Pdf.jpg",
        country: "England"
    },
    {
        id: crypto.randomUUID(),
        name: "Game of thrones",
        cover: "https://hadafnovin.com/wp-content/uploads/2019/04/A-Game-of-Thrones-Book-1-2.jpg",
        country: "England"
    }, {
        id: crypto.randomUUID(),
        name: "Game of thrones",
        cover: "https://allbookshub.com/wp-content/uploads/2019/05/A-Game-of-Thrones-Pdf.jpg",
        country: "England"
    },
    {
        id: crypto.randomUUID(),
        name: "Game of thrones",
        cover: "https://hadafnovin.com/wp-content/uploads/2019/04/A-Game-of-Thrones-Book-1-2.jpg",
        country: "England"
    }];
    return (
        <div className="grid">
            {
                movies.map(it => {
                    return <Movie movie={it} key={it.id} />
                })
            }

        </div>
    );
}

export default MovieList;