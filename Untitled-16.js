const user = {
    name: "Scofield",
}
const Map = new Map([
    [1, "A"],
    [2, "B"],
    [3, "C"],
    [4, "D"],
])
Map.forEach((value, key) => {
    console.log(value, key)
})