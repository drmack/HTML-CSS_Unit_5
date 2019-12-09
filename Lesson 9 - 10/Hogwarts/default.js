function start(){
    var studentHouse = buildStudentHouseObject();
    printStudentsInHouse(studentHouse, "Gryffindor");
}

// Iterates through the Object studentHouse and prints
// out the name of every student in the given house
function printStudentsInHouse(studentHouse, house){
    // Your code here!
}

function buildStudentHouseObject(){
    var studentHouse = {
        "Harry Potter": "Gryffindor",
        "Ginny Weasley": "Gryffindor",
        "Draco Malfoy": "Slytherin",
        "Ron Weasley": "Gryffindor",
        "Hermione Granger": "Gryffindor",
        "Cho Chang": "Ravenclaw",
        "Gilderoy Lockhart": "Ravenclaw",
        "Thomas Riddle": "Slytherin",
        "Peter Pettigrew": "Gryffindor",
        "Cedric Diggory": "Hufflepuff",
        "Ernie Macmillan": "Hufflepuff",
        "Hannah Longbottom": "Hufflepuff"
    };
    return studentHouse;
}