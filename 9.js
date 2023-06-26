// Response was found here: https://stackoverflow.com/questions/40477919/how-to-add-a-pause-between-2-requests-in-postman


// If you want to check the status of something before continuing, you can use postman.setNextRequest() 
// in the Tests of a request to loop until something has been completed. Simply do the following:


// 1) Create a collection structured as:

// Delay For 10 Seconds
// Status Check
// Continue Processing

// 2) In the Status Check request Tests:

if(responseBody.has("Success")) //or any other success condition
{
    postman.setNextRequest('Continue Processing');
    tests["Success found"] = true;
}
else
{
    postman.setNextRequest('Delay For 10 Seconds');
    tests["No success found"] = true;
}