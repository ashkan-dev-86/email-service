# email-service
Email microservice implementation

You need to pull this code and run npm install or yarn install if you have installed yarn on your machine.
I applied all default configs you need to test.
But if you have a email-delivery-service that you want to replace with existing ones you can change the values in the config.js. (Be my guest)
execute 'npm run start' or 'yarn start' if you have installed yarn on your machine to run the app.
Please check your spam folder also to check receiving the email.

The domain you need to test: http://localhost:1049/email/send

The req body you need to use:
{
    "emailsToSend": [
        "ashkan.aliabbasi@gmail.com",
        "ashkan65@hotmail.com"
    ],
    "subject": "Email tester for Pickles Auction",
    "markup": "<h4>Send a test email to clarify in Pickles Auction assessment</h4>"
}

emailsToSend is mandatory and you can enter an array of strings.
subject & markup are optional & if you don't fill these, the app will use default values set in config.js.

if you don't face error in the api, this should return a response like this:
{
    "success": true,
    "info": {
        "accepted": [
            "ashkan.aliabbasi@gmail.com",
            "ashkan65@hotmail.com"
        ],
        "rejected": [],
        "envelopeTime": 690,
        "messageTime": 397,
        "messageSize": 409,
        "response": "250 OK dc131e3f-efb6-806f-a03f-6221378b979b",
        "envelope": {
            "from": "ashi.dev.86@gmail.com",
            "to": [
                "ashkan.aliabbasi@gmail.com",
                "ashkan65@hotmail.com"
            ]
        },
        "messageId": "<8b461eec-6e86-1c42-ceff-2ecafe0fbaec@gmail.com>"
    }
}

You need to execute 'npm test' or 'yarn test' if you have installed yarn on your machine to run the test.

I've used Express & MVC architecture to implement this service.
Your call has been lead to the controller implemented for respective api.
The service related to api call uses logic class implemented for email-service.
