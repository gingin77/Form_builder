// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object

  { // added <input>
    "type": "text", // not yet used
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
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

for (let i=0; i < formData.length; i==) {

  let label = document.createElement( "label");
  let input = document.createElement( "input" );

  let liH2Text = document.createTextNode( portfolioData[ i ].h2 );




  // let li       = document.createElement( "li" ); DONE
  // let liImg    = document.createElement( "img" ); DONE
  //
  // let liH2     = document.createElement( "h2" ); NA
  // let liH2Text = document.createTextNode( portfolioData[ i ].h2 );
  //
  // liH2.appendChild( liH2Text );
  //
  // liImg.setAttribute( "src", portfolioData[ i ].img );
  //
  // li.appendChild( liImg );
  // li.appendChild( liH2 );
  //
  // portfolioList.appendChild( li );

}

formData = a loop that iterates through the array formData
