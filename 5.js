// Error means other element is covering it. 
// Possibly you are using incorrect selector and need to step one of a few levels up from it, 
// wait until element is clickable(if it’s a race condition), or you could also add 
// { force: true } argument to your click so it would click through the overlaying element.