/*
 * This example shows how to check whether
 * a key exists in an Object/Map using `in`
 *
 * ex: var keyExists = key in map;
 */

function start(){
   var phonebook = {
       "Jenny": "867-5309",
       "Soulja Boy": "678-999-8212"
   };
   
   // Check if Kanye is in our phonebook
   var phonebookHasKanye = "Kanye West" in phonebook;
   if(phonebookHasKanye){
       println("We have Kanye West's number!");
       println(phonebook["Kanye West"]);
   }
   else{
       println("We don't have Kanye West's number :(");
   }
   
   // Check if person is in our phonebook
   var person = "Soulja Boy";
   if(person in phonebook){
       println("We have " + person + "'s number!");
       println(phonebook[person]);
   }
   else{
       println("We don't have " + person + "'s number :(");
   }
}