// The common column between the Person and Hobby tables is 'hobbyName' in the provided dataset

// We can use an SQL INNER JOIN to find needed data

// SELECT Person.name, Person.hobbyName, Hobby.tournament, Hobby.hobbyLevel
// FROM  Person
// INNER JOIN Hobby 
// ON Person.hobbyName = Hobby.hobbyName;