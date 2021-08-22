const items = new Map()
items.set(1, {
    id: 1,
    name: 'John',
    description: 'Desc 1'
})
items.set(2, {
    id: 2,
    name: 'Loeis',
    description: 'Desc 2'
 })
 items.set(3, {
    id: 3,
    name: 'Martin',
    description: 'Desc 3'
})


function getItem(id) {
  return items.get(id)
}

console.log(getItem(1))