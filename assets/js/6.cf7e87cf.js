(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{359:function(e,t,s){e.exports=s.p+"assets/img/select-custom-types.51888620.png"},424:function(e,t,s){e.exports=s.p+"assets/img/image-add.31cb3bd3.png"},425:function(e,t,s){e.exports=s.p+"assets/img/custom-types.9b7baa9c.png"},426:function(e,t,s){e.exports=s.p+"assets/img/custom-type-name.dc2c4606.png"},427:function(e,t,s){e.exports=s.p+"assets/img/define-fields.6a8c6701.png"},428:function(e,t,s){e.exports=s.p+"assets/img/required-fields.e56b433a.png"},457:function(e,t,s){"use strict";s.r(t);var a=s(35),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"custom-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-types"}},[e._v("#")]),e._v(" Custom Types")]),e._v(" "),a("p",[e._v("On shopify, Each page should have a template based on which it'll be created. Custom types acts as an template."),a("br"),e._v("\nCustom types can be defined as a group of slices. Here we can create, modify, delete the slices belonging to that particular custom types.")]),e._v(" "),a("p",[a("strong",[e._v("Know more about slices")]),e._v(" "),a("a",{staticClass:"green-link",attrs:{href:"./slices.html"}},[e._v("here")])]),e._v(" "),a("h2",{attrs:{id:"create-a-new-custom-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-custom-types"}},[e._v("#")]),e._v(" Create a new custom types")]),e._v(" "),a("div",{staticClass:"block-space"}),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Step 1")]),e._v(":"),a("br"),e._v(" "),a("strong",[e._v("Go to custom types from the prismic dashboard.")])])]),e._v(" "),a("img",{attrs:{src:s(424)}}),e._v(" "),a("div",{staticClass:"block-space"}),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Step 2")]),e._v(":"),a("br"),e._v(" "),a("strong",[e._v("Select type of custom types")])])]),e._v(" "),a("img",{attrs:{src:s(425)}}),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Repeatable type:")]),e._v(" "),a("p",[e._v("Repeatable custom types can be used to create multiple documents from the same custom types. As I mentioned earlier, Each document(pages) should have a custom type, and if it's a repeatable one, we can reuse it to create multiple documents.\nLike, If our custom type's name is “Pages”, we can use it to create landing pages, About us pages. etc")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Single Type:")]),e._v(" "),a("p",[e._v("Single custom types can only be used once to create a single document, which can be useful for things like quiz page or faq page.")])]),e._v(" "),a("div",{staticClass:"block-space"}),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Step 3")]),e._v(":"),a("br"),e._v(" "),a("strong",[e._v("Enter the custom type name and click on create new custom type.")])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Custom type names shouldn’t be specific like homepage,"),a("br"),e._v("\nRemember, these works as a template to create document(pages),"),a("br"),e._v("\nHowever, generic names can be given to single-type custom types, as they will be only used once.")])]),e._v(" "),a("img",{attrs:{src:s(426)}}),e._v(" "),a("div",{staticClass:"block-space"}),e._v(" "),a("h2",{attrs:{id:"customize-custom-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customize-custom-types"}},[e._v("#")]),e._v(" Customize Custom Types")]),e._v(" "),a("div",{staticClass:"block-space"}),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Step 1")]),e._v(":"),a("br"),e._v(" "),a("strong",[e._v("Click on the freshly created custom type.")])])]),e._v(" "),a("img",{attrs:{src:s(359)}}),e._v(" "),a("div",{staticClass:"block-space"}),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Step 2")]),e._v(":"),a("br"),e._v(" "),a("strong",[e._v("Required Placeholders")])])]),e._v(" "),a("p",[e._v("Each Custom type requires the following attribute to work with shopify.\nSince prismic is not natively supported, we workaround with prismic by saving all the prismic data into metafields.")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("Important")]),e._v(" "),a("p",[e._v("There are few keys that need to be defined to make it work with our backend integration.Those keys are predefined and will be used for each and every custom type.")])]),e._v(" "),a("p",[e._v("To add the field and define the key, simply drag the required pre-defined elements and place it in the prismic build section.")]),e._v(" "),a("img",{attrs:{src:s(427)}}),e._v(" "),a("div",{staticClass:"block-space"}),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Step 3")]),e._v(":"),a("br"),e._v(" "),a("strong",[e._v("Define Required Placeholders")])])]),e._v(" "),a("p",[e._v("Following are the required fields that needs to be defined on each of the custom types.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Element  Name")]),e._v(" "),a("th",[e._v("Field Name")]),e._v(" "),a("th",[e._v("API ID*")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("UID")]),e._v(" "),a("td",[e._v("Slug")]),e._v(" "),a("td",[e._v("uid")])]),e._v(" "),a("tr",[a("td",[e._v("Title")]),e._v(" "),a("td",[e._v("Title")]),e._v(" "),a("td",[e._v("page_title")])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Prismic works by creating a new page, and saving all the data as a metafields of that created page.")]),e._v(" "),a("p",[e._v("In Shopify , to create a new page all we need is a page_handle(Slug)  and page title(Title) and that is what we are defining here.")]),e._v(" "),a("p",[e._v("Please note that we are only defining the template(structure) here, we will be filling out these values while creating the document.")])]),e._v(" "),a("div",{staticClass:"block-space"}),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Step 4")]),e._v(":"),a("br"),e._v(" "),a("strong",[e._v("Save the changes")])])]),e._v(" "),a("p",[e._v("If your custom types looks similar to this after the required fields been defined, We can start creating our first "),a("strong",[e._v("slice")]),e._v(".")]),e._v(" "),a("img",{attrs:{src:s(428)}})])}),[],!1,null,null,null);t.default=i.exports}}]);