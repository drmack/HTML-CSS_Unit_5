function start(){
    /*
     * Be careful using dot notation for Object values!
     * Dot notation looks at the literal string that follows
     * the dot, which means we can't use it for variable names
     * or keys with spaces.
     *
     * Look through this example to see this in action.
     */
    //==================================================
    
    // Valid use of dot notation
	var phonebook = {};
	phonebook.Sam = "111-1111";
	
	println(phonebook.Sam);
	
	phonebook.Sam = "444-4444";
	println(phonebook.Sam);
	
	// Invalid use of dot notation
	
	// This will work
	phonebook["Harry Potter"] = "123-1234";
	
	// This will not work (the key has a space)
	// Try uncommenting the line to test it
// 	phonebook.Harry Potter = "123-1234";
	
	// This will work
	var key = "Sam";
	println(phonebook[key]);
	
	// This will not work (key is a variable name)
	// Try uncommenting the line to test it
// 	println(phonebook.key);
	
	// This will work
	var numbers = {
	    "Soulja Boy": "678-999-8212"
	};
	
	// This will not work (Soulja Boy has a space in his name)
	// Try uncommenting this code to test it
// 	var numbers = {
// 	    Soulja Boy: "678-999-8212"
// 	};
}