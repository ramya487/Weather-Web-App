# Weather-Web-Application
### Description
A Prototype of the Weather Determination Application which lets you know about the Weather Conditions of any place. The main aim of this project is to come up with a system that provides real time Weather Information quickly and efficiently
### Tools Used
- HTML
- CSS
- JAVASCRIPT
### Work Flow
#### Login/Sign Up
This Weather Application will first land in a page that requests to either login or sign up.
It is mandatory to select sign up. The reason is explained in the upcoming lines.<br><br>
This project deals with with front-end web development. Thus a Session Storage is used to first record the Email address, Username & Password. Which means that the details thus entered will be valid for that particular session of the application only and will be erased once the session is over.<br><br>
Once the sign up process is over, the next step is to login with the details you entered earlier.<br><br>
NOTE: Both Login and Sign Up use JS to ensure that the user enters all the details. If not any one of the following messages may be displayed as a popup.
- Enter the Email
- Enter the Password
- Enter the Username
- Enter the Email and Password
- Enter the Email and Username
- Enter the Password and Username
<br><br>
After all the details have been entered the next step is to check if they match with those entered during sign up. If not a popup alert is displayed again
#### Home Page
Once the login is successful the Home Page is displayed. It consists of the following major links.
- Get the weather
- Logout
#### Get the Weather
The two major options by which the weather could be retrieved are
- By Current Location
- By City name
#### Get Weather By Current Location
A function is implemented using JS to retrieve the Current Latitude and Longitude of the user which is then used to make an api call to retrieve the weather conditions of the current location
#### Get Weather By City
This first lands you in a page that requests for the Name of the City along with the Country Code for accurate prediction of the weather. An api call is made using the given details to retrieve the Latitude and Longitude of the City. Another api call is made using the Latitude and Longitude of the City. And finally the real time weather conditions of the prescribed location is displayed<br><br>
NOTE: Just like in the Login/Sign up page, here the JS code is used to check if the user enters all the details. If not appropriate message regarding the condition is displayed.
#### Know more
This feature gives you more information about the Weather in terms of Precautions, food habits etc..
#### Units of measurement
This application also provides you with an option to switch between the various units of measurement of the temperature namely Celsius, Fahrenheit and Kelvin.
#### Log Out
This directs the user to the Landing Page again
### Future Scope
This project could be further developed by including mechanisms for forcasting the future conditions of the weather. A history could be used to keep a constant track of the weather conditions of a place
