const fs = require('fs');
const path = require('path');
const NewsAPI = require('newsapi');

const key = process.env.NEWS_API_KEY;
if (!key) throw new Error('NEWS_API_KEY is not set');

const api = new NewsAPI(key);

async function main() {
  const result = await api.v2.everything({
    q: 'cricket OR IPL OR ICC OR BCCI OR Virat Kohli OR Rohit Sharma',
    language: 'en',
    sortBy: 'publishedAt',
    pageSize: 30
  });

  if (result.status !== 'ok') throw new Error(result.message || 'NewsAPI request failed');

  const articles = (result.articles || []).filter(a => a.title && a.url).map(a => ({
    source: a.source?.name || 'Cricket News',
    title: a.title,
    description: a.description || 'Latest cricket news and updates.',
    url: a.url,
    image: a.urlToImage || null,
    publishedAt: a.publishedAt || null,
    author: a.author || null
  }));

  const output = path.join(__dirname, '..', 'data', 'news.json');
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, JSON.stringify(articles, null, 2) + '\n');
  console.log(`Saved ${articles.length} articles`);
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
