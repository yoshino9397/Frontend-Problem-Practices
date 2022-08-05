// API Endpoint: https://www.acefrontend.com/c/bitter/data.json

function getData() {
  return fetch("https://www.acefrontend.com/c/critter/feed.json").then((res) =>
    res.json().catch((err) => console.log("handle this error:", err))
  );
}

function renderDate(dateString) {
  const date = new Date(dateString);
  const locale = "en-us";
  const month = date.toLocaleString(locale, { month: "short" });
  const day = date.getDate();
  return `${month} ${day}`;
}

function createTemplate(cardData) {
  const card = document.createElement("article");
  card.className = "creet";
  card.innerHTML = `
  <div class="card">
        <img src="${cardData.user.avatar}" />
        <div class="card-right">
          <div class="top">
            <h4>@${cardData.user.username}</h4>
            <small>${renderDate(cardData.created_at)}</small>
          </div>
          <p>
          ${cardData.text}
          </p>
          <small class="likes">Likes:${cardData.likes}</small>
        </div>
      </div>
  `;
  return card;
}

function render(container, templates) {
  const d = document.getElementById("creets");
  templates.forEach((template) => d.appendChild(template));
  container.appendChild(d);
}

function init() {
  const container = document.getElementById('creets')
  getData()
    .then(json => json.feed.map(createTemplate))
    .then(templates => render(container, templates))
}

init()
