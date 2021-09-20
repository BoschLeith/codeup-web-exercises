//~*~ Locating individual elements

var topHeader = document.getElementById("top-header");

console.log(topHeader);

// What happens if there is no result? Misspelled topHeader, returns NULL

var hopTeader = document.getElementById("hop-teader");

console.log(hopTeader);

//~*~ Locating lists of elements

//Element List - retrieve by CLASS or TAG

var specialOffers = document.getElementsByClassName("special-offer");

console.log(specialOffers);

var listItems = document.getElementsByTagName("li");

console.log(listItems);

//Loop through the hatList and print our nodes

for (var i = 0; i < listItems.length; i++) {
    console.log(listItems[i]);
}

//~*~ Accessing form input

//~*~ Accessing / Modifying Element properties [so I've got a collection of this stuff - what now?]
//Accessing innerHTML

//Instead of printing a list of nodes, let's print some text - What HTML is INSIDE our <li>?

//Modifying innerHTML
//Uh oh - these were last month's top seller, WHOOPS -
//let's update our <li> to show "Hat TBD" and let's be STRONG about it!

//innerText vs innerHTML
//"Our Top Sellers" seems odd now as well - let's adjust!

//Perhaps a little EMPHASIS will assist - will innerText help?

//Attribute methods: hasAttribute, getAttribute, setAttribute, removeAttribute

//hasAttribute: return a BOOLEAN if the element has this attribute
//getAttribute: what's that attribute's value? [the right side of the equation]
//setAttribute: let's change that attribute's value!


//Accessing or Modifying styles

// demonstrate the BODY as a thing to manipulate - the BODY can be targeted as any other thing:

// Get the body element (notice we need to use index 0 of the array!)

// Change the body font color

// We had to use [] syntax since the property name has a dash

// Replace dashes with camelCase to use standard . syntax