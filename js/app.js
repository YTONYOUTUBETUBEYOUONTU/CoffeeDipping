let articles = [];

function addArticle(name, quantity){
  articles.push({id: Date.now(), name, quantity});
  displayArticles();
  $.mobile.changePage("#home");
}

function deleteArticle(id){
  articles = articles.filter(article => article.id !== id);
  displayArticles();
}

function updateArticle(id, name, quantity){
  let article = articles.find(article => article.id === id);
  if(article){
    article.name = name;
    article.quantity = quantity;
  }
  displayArticles();
}

function displayArticles(){
  const articleList = $('#articleList');
  articleList.empty();
  articles.forEach(article => {
    articleList.append(`
      <li>
        <a href="#editPage" onClick="loadArticleForEdit(${article.id})">
          <h2>${article.name}</h2>
          <p>Cantidad: ${article.quantity} unidades</p>
        </a>
        <a href="#" onClick="deleteArticle(${article.id})">Eliminar</a>
      </li>
    `);
  });
  articleList.listview('refresh'); // Refresh the list view for jQuery Mobile
}

function loadArticleForEdit(id) {
  const article = articles.find((article) => article.id === id);
  if (article) {
    $("#editArticleName").val(article.name);
    $("#editArticleQuantity").val(article.quantity);
    $("#updateArticleBtn")
      .off() // Remove previous click handlers
      .on("click", function () {
        let name = $("#editArticleName").val();
        let quantity = $("#editArticleQuantity").val();
        updateArticle(id, name, quantity);
        $.mobile.changePage("#home");
      });
  }
}

$("#saveArticleBtn").on("click", function () {
  let name = $("#articleName").val();
  let quantity = $("#articleQuantity").val();
  if (name && quantity) {
    addArticle(name, quantity);
  }
});

$(document).ready(function () {
  displayArticles();
});
