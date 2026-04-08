document.addEventListener('DOMContentLoaded', async () => {
  const resposta = await fetch('http://localhost:3000/lista');
  const dados = await resposta.json();
  const ul = document.querySelector('#lista-container .item-list')
  dados.forEach(element => {
    const li = document.createElement('li')
    const div = document.createElement('div')
    div.className = 'actions'
    const deleteButton = document.createElement('button')
    deleteButton.textContent = '✕'
    deleteButton.className = 'btn-delete'
    const updateButton = document.createElement('button')
    updateButton.textContent = '✎'
    updateButton.className = 'btn-edit'
    const span = document.createElement('span')
    span.className = 'item-text'
    span.textContent = element.nome
    li.appendChild(span)
    div.appendChild(updateButton)
    div.appendChild(deleteButton)
    li.appendChild(div)
    ul.appendChild(li)
  });
});
