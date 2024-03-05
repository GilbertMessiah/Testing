@Feature2

Feature: to check the amazon sign in using cucumber framework


@Smoke
Scenario: to validate the amazon signin option

Given to launch the browser
When to launch the amazon Url
When to click the signin option

#data table
#two dimensional map
And to pass the valid email or mobile number
|email1				|email2				|email3|
|abc@gmail.com|mno@gmail.com|ghf@gmail.com|
|shd@gmail.com|jdl@gmail.com|als@gmail.com|
|ass@gmail.com|adf@gmail.com|asw@gmail.com|





