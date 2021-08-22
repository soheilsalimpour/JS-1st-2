const items = [
  {
    id: 1,
    name: 'John',
    description: 'Desc 1'
  },
  {
    id: 2,
    name: 'Loeis',
    description: 'Desc 2'
  },
  {
    id: 3,
    name: 'Martin',
    description: 'Desc 3'
  }
  
]

function getItem(id) {
  return items.find(Item => Item.id === id)
}

console.log(getItem(2))