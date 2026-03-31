REFLECTION:

1. event.preventDefault() help to process the form data in Javascript
2. HTML5 validation offer easy and simple form validation while JavaScript-based validation offer more complex validation
3. I used localstorage to store username on form submission and retrieved it everytime the page is loaded. Limitation of localstorage includes is size which is limited to around 5 to 10 MB. localstorage also can cause security issues such as cross-site scripting (XSS) and sensitive data being exposed to the public.
4. One of a few changes encountered while implementing real-time validation involved conflict between HTML validation and Javascript-based validation. I had to comment out the .reportValidity()
5. I used the combination of HTML5 form validation with CSS pseudo-classes