ABOUT:

-This project provides webpages for a fake restaurant called "SkyView Restaurant" and includes 3 pages: "Home", "Register", and "Login" page.
-The Home page includes a dinning room image of the restaurant, followed by 3 boxes: "Food Menu", "Drink Menu", and "Locations."
-Next, there are two tables: "Holiday Hours of Operation" and "Join Us on Social Media!".
-Last, there is a footer that includes a copyright notice, "Contact Us", "About Us", and "Meet The Team."
-New customers of the restaurant can create an account using the "Register" page.
-Current members can access their accounts using the "Login" page. 
-Login form and Register form inputs must be valid inputs before registering or login will be allowed (wrong inputs will be alerted after trying to submit).
-Login form and Register form will direct users to Home page after successful submitting.
-Food Menu, Drink Menu, and Locations images will direct users to an example of menus and locations, accurate links will be included later.
-Footer's Contact Us, About Us, and Meet The Team links will direct users to Home page, accurate links will be added later.
-Social media account links will direct users to Home page, accurate links will be added later.

HTML:

-HTML is used to create 3 pages (Home, Register, Login).
    -Register and Login page takes the user to their dedicated pages.
    -If a current member is at the Register page, they can use the link provided to access the Login page.
    -If a new member is at the Login page, they can use the link to access the Register page.  
    -Once a member registers or login, they will be directed to the Home page. 
-Multiple HTML tags are used such as:
    -<header>, <nav>, <ul>, <li>, <div>, <img>, <h3>, <table>
    -<tr>, <td>, <footer>, <a>, <script>, and more. 
-Two HTML tables are implemented in Home page:
    -"Holiday Hours of Operation" table includes holiday names, dates, and hours of operation for the restaurant. 
    -"Join Us on Social Media!" table includes the social media plateforms that the restaurant uses and their account information. 
-Two forms are included, one in Register page and one in Login page:
    -Register page form icludes inputs for user information to register an account.
        -It includes: First Name, Last Name, Email, Password, Have you dined with us before? (select), and Agree to Terms and Conditions (checkbox).
    -Login page form includes inputs for a current member's Email Address and Password to login to their account. 
-Drop down menu is included in Register Account form that asks "Have you dined with us before?"
    -So the restaurant can use this information to send coupons or specials for first time customers/members. 
-The web font used throughout the pages to keep consistency is Roboto
    -Roboto font was provided by Google
-Many images are included:
    -Home page: dining room, food menu, drink menu, locations, and company logo image.
        -Icons were used in social media tabel for Instagram, Facebook, and Snapchat.
    -Register page: uses a food image diaplayed beside register account form. 
        -A user icon was used for the register account form. 
    -Login page: uses a drink image displayed beside login account form.
        -A login account icon is used for the login account form. 
-Regex validation was implemented for Login page and Register page. 
    -Login page: 
        -Email Address: must be a valid email address in a typical email address format. 
        -Password: password must contain at least one lowercase letter, one uppercase letter, one digit, and is at least 8 characters long.
     -Register page: 
        -First Name: Must be a valid first name using only letters.
        -First Name: Must be a valid last name using only letters.
        -Email Address: must be a valid email address in a typical email address format. 
        -Password: password must contain at least one lowercase letter, one uppercase letter, one digit, and is at least 8 characters long.


CSS:

-Inline, internal, and external CSS styling were used:
    -Inline, such as:
        -<b style = "color: white;"> in Home page. 
        -<p style = "font-size: 13px"> in Register page.
    -Internal:
        -Both Register and Login page implemented internal styling using <style> tags. 
    -External:
        -Home page uses homeStyles.css as it's external css styling.
-Many CSS selectors were used, such as:
    -Home page: *, :root, body, #navlist, .logo, a, (.holidaytable > h3, .socialtable > h3)
    -Register page: .imageContainer, input[type="text"], button, button:hover, #newCustomer
    -Login page: input[type="password"], #loginIcon, .mainContainer, #image1
-The same color pallete was used for all webpages:
    -Color pallete includes colors: #1d1716, #402a23, #a55233, and #f3bc77.
-Flexboxes were used in all webpages:
    -Home page: nav bar, menus section, tables section, and footer.
    -Login page: form and image displayed as flexbox.
    -Register page: form and image displayed as flexbox.


JavaScript:

-External JavaScript was used for all webpages:
    -Home page: uses "homedata.js", "menus.js", and "homedata.js" to retrieve information about current menus and holidays and creates the tables and flexboxes for them.
    -Register page: uses "registerValidate.js" to validate user's register information and change the styling of input boxes after input has been added.
    -Login page: uses "loginValidate.js" to validate user's login information and change the styling of input boxes after input has been added.
-Variables, if statements, loops, collections, functions, and events were used:
    -Variables: "registerValidate.js", "loginValidate.js", and "menus.js" creates variables by selecting or creating elements and also using boolean variables.
    -If statements: "registerValidate.js" and "loginValidate.js" uses if statements to check whether user inputs are valid using Regex variables.
    -Loops: "menus.js" uses loops to create elements for menus section and holiday table using information provided by "homedata.js" and "holiday.js".
    -Collections: collections were used to create object arrays to store current data in "homedata.js" and "holidays.js" to be used by "menus.js".
    -Functions: functions were used to create tables, div boxes, change styling, and to validate user inputs using Regex.
        -Such as: 
            -function firstNameChanged() to change styling of first name input box after input has been added. 
            -function validateName(name) to validate whether a user's input for first name and last name only used letters and not symbols or numbers.
            -function createHolidayTable() to create the "Holiday Hours of Operation" table using current information from "holidays.js".
    -Events: events were used in "menus.js", "lognValidate.js", and "registerValidate.js"
        -"menus.js": uses the event listener "DOMContentLoaded" to create menu div boxes and holiday table after content has been loaded.
        -"registerValidate.js": uses event listener "submit" and "change" to validate user input after submitting and to change input box styling after input has been added.
        -"loginValidate.js": uses event listener "submit" and "change" to validate user input after submitting and to change input box styling after input has been added.