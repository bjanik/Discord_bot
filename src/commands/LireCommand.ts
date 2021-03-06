import axios from 'axios';
import cheerio from 'cheerio';

const url: string = 'https://news.ycombinator.com/'; // Scrap hackernews

const AxiosInstance = axios.create(); // Create a new Axios Instance

interface Articles {
    title: string;
    link: string;
}

// Send an async HTTP Get request to the url
export default function lire(msg) {
AxiosInstance.get(url)
.then( // Once we have data returned ...
  response => {
    const html = response.data; // Get the HTML from the HTTP request
    const $ = cheerio.load(html);
    const titles = $(".title");
    const articles: Articles[] = [] ;

    titles.each((i, elem) => {
        const title: string = $(elem).find("a").text();
        const link: string = $(elem).find("a").attr("href")
        if (title != "" && link.charAt(0) != "i" && link.charAt(0) != "n") {
          articles.push({
              title, link
            })
        }
    })  
    // Return the articles
    const r: number = Math.floor(Math.random() * 20)
    
    msg.reply(articles[r].title);
    msg.reply(articles[r].link);
  // End of return articles
  }
)
.catch(console.error); // Error handling


}
