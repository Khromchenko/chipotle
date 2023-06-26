// You are likely using token that has no permissions to this resource

// How to debug:
// 1. Check documenation to make sure that the role you are using has access to particular resource
// 2. If you trying to create some data that not every role has access to, try sending general get request every role has access to. To make sure you have access to it.
// 3. If you do have access to general get request, it means you are using token of the different role that has no access to this reqource.
// Or there is a bug if you are using correct role and documentation proves it.