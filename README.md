# Test Task Backend

## Completed By

Yelyzaveta Demchenko

## Usage Instructions

### Install Dependencies:

Navigate to the project directory and run the following command to install the project dependencies listed in the package.json file:

```
$ npm install
```

### Run the Development Server:

Use the following command to start the development server:

```
$ npm run dev
```

### Testing the Endpoint:

To test the backend with the added 5-second delay, send a GET request to the endpoint [localhost:3000/api/contacts]. The response will be delayed by 5 seconds before sending the contact data.

### Example body object:

```
{
"email": "jams@gmail.com",
"number": "349425"
}
```
