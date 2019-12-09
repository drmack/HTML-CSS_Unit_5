function start(){
    // Decide what kind of data structure to use for textMessages
    // Replace '...' with your data structure
    var textMessages = ...
    
    // Test out your functions
    sendMessage(textMessages, "Jenny", "Hi Jenny!");
    sendMessage(textMessages, "Jenny", "brb");
    sendMessage(textMessages, "Teddy", "I love you");
    sendMessage(textMessages, "Jenny", "Are you there?");
    
    var jennyMessages = getMessages(textMessages, "Jenny");
    var teddyMessages = getMessages(textMessages, "Teddy");
    var johnMessages = getMessages(textMessages, "John");
    
    println("To Jenny: " + jennyMessages);
    println("To Teddy: " + teddyMessages);
    println("To John: " + johnMessages);
}

// Update textMessages to store message sent to friendName
function sendMessage(textMessages, friendName, message){
    // Fill this in
    
}

// Get all the text messages sent to friendName
function getMessages(textMessages, friendName){
    // Fill this in
    
}