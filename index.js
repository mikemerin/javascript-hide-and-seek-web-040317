function getFirstSelector(selector)
  { return document.querySelector(selector) }

function nestedTarget(selector)
  { return document.getElementById('nested').querySelector('div.target') }

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for ( let i = 0, l = list.length; i < l; i++ )
    { list[i].innerHTML = parseInt(list[i].innerHTML) + n }
}

function deepestChild() {
  let node = document.getElementById('grand-node'), deeper = node.children[0]
  while (deeper) { node = deeper, deeper = node.children[0] }
  return node
}
