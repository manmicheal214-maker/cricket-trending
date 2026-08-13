```javascript
const trendingTopics = [
    {
        name: "India Cricket",
        articles: 42
    },
    {
        name: "IPL",
        articles: 36
    },
    {
        name: "Virat Kohli",
        articles: 29
    },
    {
        name: "T20 Cricket",
        articles: 24
    }
];


const news = [
    {
        source: "Cricket News",
        title: "Latest developments in international cricket",
        description:
            "Follow the latest stories, team updates and major developments from the world of cricket."
    },
    {
        source: "Cricket World",
        title: "T20 cricket continues to dominate headlines",
        description:
            "The latest T20 news, player performances and tournament developments."
    },
    {
        source: "Sports News",
        title: "Teams prepare for upcoming cricket series",
        description:
            "Players and teams are getting ready for another busy period of international cricket."
    }
];


function renderTrending() {

    const container =
        document.getElementById("trendingTopics");

    container.innerHTML = trendingTopics
        .map((topic, index) => {

            return `
                <article class="trending-card">

                    <div class="trending-rank">
                        #${index + 1}
                    </div>

                    <h3>
                        ${topic.name}
                    </h3>

                    <div class="trending-count">
                        ${topic.articles} related articles
                    </div>

                </article>
            `;

        })
        .join("");
}


function renderNews() {

    const container =
        document.getElementById("newsGrid");

    container.innerHTML = news
        .map(article => {

            return `
                <article class="news-card">

                    <div class="news-image">
                        🏏
                    </div>

                    <div class="news-content">

                        <div class="news-source">
                            ${article.source}
                        </div>

                        <h3 class="news-title">
                            ${article.title}
                        </h3>

                        <p class="news-description">
                            ${article.description}
                        </p>

                    </div>

                </article>
            `;

        })
        .join("");
}


const menuButton =
    document.getElementById("menuButton");

const mobileNav =
    document.getElementById("mobileNav");


menuButton.addEventListener("click", () => {

    mobileNav.classList.toggle("open");

});


renderTrending();
renderNews();
```
