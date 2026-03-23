const data = [
  {
    "name": "Иван Петров",
    "photo": "images/ivan.jpg",
    "score": 98,
    "info": "быстрый бегун"
  },  
  {
    "name": "Мирон Антонов",
    "photo": "images/miron.jpg",
    "score": 93,
    "info": "бегун"
  },
  {
    "name": "Анна Ковалева",
    "photo": "images/anna.jpg",
    "score": 95,
    "info": "сильный игрок"
  }
];

data.sort((a, b) => b.score - a.score);

const container = document.getElementById('cards-container');

data.forEach((participant, index) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="rank">${index + 1}</div>
    <img src="${participant.photo}" alt="${participant.name}">
    <div class="name">${participant.name}</div>
    <div class="score">Баллы: ${participant.score}</div>
    <div class="info">${participant.info}</div>
  `;
  container.appendChild(card);
});