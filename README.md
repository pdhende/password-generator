# Password Generator

## Description :
The password generator is an application that allows user to generate random passwords based on an input criteria. The user is asked to input preferred length and choose any/all character types from 'lowercase', 'uppercase', 'numeric values' and 'special characters'.

## Application screenshots :

User input for length | User input for lowercase | User input for uppercase 
---|---|---
![Length_validation](https://user-images.githubusercontent.com/65467469/150207658-6fa8e138-3488-4049-89d9-9007044977f7.png) | ![Character_type](https://user-images.githubusercontent.com/65467469/150208187-38a64908-8ca2-49c7-8571-a6772d9b7677.png) | ![Uppercase](https://user-images.githubusercontent.com/65467469/150208888-59baf7fd-e498-4383-8258-4bc3200775cf.png)

User input for numeric values | User input for special characters
---|---
![numeric](https://user-images.githubusercontent.com/65467469/150208938-22bd6003-ecfe-4b8d-90cc-ad7733f4d904.png) | ![spl_characters](https://user-images.githubusercontent.com/65467469/150208961-88543d36-b636-4eda-9b99-1763744ca083.png)

Password generated based on user inputs |
---|
![pwd_generated](https://user-images.githubusercontent.com/65467469/150209138-dd555dee-8f48-4897-96cf-06fbb59f089c.png)

## Built using :
This application is built with :
* HTML
* CSS
* Javascript

## How it works :
* Click on 'Generate Password' button.
  * Prompt : Enter the length of the password.
   * Validations :
    * 1. The input has to be a number
    * 2. The length has to be more than or equal to 8 and less than or equal to 128

* Choose any/all character types asked in the confirm box
  * Confirm : Do you want password to contain Lowercase?
  * Confirm : Do you want password to contain Uppercase?
  * Confirm : Do you want password to contain numeric values?
  * Confirm : Do you want password to contain special characters?
   * Validations : 
    * 1. At least one character type has to be selected

* A random password will be generated based on the user inputs.

## Application URL :
https://pdhende.github.io/password-generator/
