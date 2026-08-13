const articles = Array.isArray(window.cricketNews) ? window.cricketNews : [];
const topics = document.getElementById('trendingTopics');
const grid = document.getElementById('newsGrid');
const button = document.getElementById('menuButton');
const nav = document.getElementById('mobileNav');

if (button && nav) button.addEventListener('click', () => nav.classList.toggle('open'));

const terms = ['India', 'IPL', 'ICC', 'T20', 'Test Cricket', 'ODI', 'Virat Kohli', 'Rohit Sharma', 'BCCI', 'Pakistan', 'England', 'Australia', 'World Cup'];
const counts = terms.map(term => {
  let count = 0;
  articles.forEach(article => {
    const text = String(article.title || '') + ' ' + String(article.description || '');
    if (text.toLowerCase().includes(term.toLowerCase())) count += 1;
  });
  return { name: term, count };
}).filter(item => item.count > 0).sort((a, b) => b.count - a.count).slice(0, 4);

counts.forEach((item, index) => {
  const card = document.createElement('article');
  card.className = 'trending-card';
  const rank = document.createElement('div');
  rank.className = 'trending-rank';
  rank.textContent = '#' + (index + 1);
  const title = document.createElement('h3');
  title.textContent = item.name;
  const count = document.createElement('div');
  count.className = 'trending-count';
  count.textContent = item.count + ' related articles';
  card.append(rank, title, count);
  topics.appendChild(card);
});

articles.slice(0, 12).forEach(article => {
  const card = document.createElement('article');
  card.className = 'news-card';
  const image = document.createElement('div');
  image.className = 'news-image';
  image.textContent = '🏏';
  const content = document.createElement('div');
  content.className = 'news-content';
  const source = document.createElement('div');
  source.className = 'news-source';
  source.textContent = article.source || 'Cricket News';
  const title = document.createElement('h3');
  title.className = 'news-title';
  const link = document.createElement('a');
  link.href = article.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = article.title || 'Cricket news';
  title.appendChild(link);
  const description = document.createElement('p');
  description.className = 'news-description';
  description.textContent = article.description || 'Latest cricket news and updates.';
  content.append(source, title, description);
  card.append(image, content);
  grid.appendChild(card);
});
