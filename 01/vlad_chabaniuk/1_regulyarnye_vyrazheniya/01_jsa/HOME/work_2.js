
/* Трансформировать исходный массив объектов  в массив, содержащий
   уникальные имена актеров - должен получиться массив из 15 элементов
   HELP -> в reduce надо делать итерацию по актерам кажлого фильма (например при помощи forEach)
    и в выходной массив (acc) добавлять актеров, если их нет в нем
    Это можно проверить с помощью  acc.indexOf на равенство -1
*/

var movies = [
    {
        title: "Batman begin",
        year: 2005,
        casts: ["Christian Bale", "Michael Caine", "Katie Holms", "Liam Neeson", "Gary Oldman", "Cillian Murphy"]
    },
    {
        title: "The Dark Knight",
        year: 2008,
        casts: ["Christian Bale", "Health Ledgre", "Aaron Eckhart", "Michael Kanie", "Maggie Gallenhal", "Gary Oldman", "Morgan Freeman"]
    },
    {
        title: "The Dark Knight Rieses",
        year: 2012,
        casts: ["Christian Bale", "Gary Oldman", "Joseph Gordon-Levitt", "Tom Hardy", "Anne Hathaway", "Marion Cotillard", "Morgan Freeman", "Michael Kanie"]
    }
];
