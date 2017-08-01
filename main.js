// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object

  { // added <input>
    "type": "text", // set with setAttribute
    "label": "First Name", //set with setAttribute
    "id": "user-first-name", // set with setAttribute
    "icon": "fa-user", // save for later
    "options": [] // save for later
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();

// From Newline: The first form element has been included as a comment in the HTML file so that you can see this in action. Your job is to iterate over the array, parse the objects, and construct the inputs to recreate the form in the screenshot.

// -------- Your Code Goes Below this Line --------


// <input type="text" id="user-first-name" placeholder="First Name">

let fields = document.getElementById( "fields" );

for (let i=0; i < formData.length; i++){

  let input = document.createElement( "input" );

  input.setAttribute( "type", formData[ i ].type );
  input.setAttribute( "id", formData[ i ].id );
  input.setAttribute( "label", formData[ i ].label );

  fields.appendChild(input);
}

// formData = a loop that iterates through the array formData
