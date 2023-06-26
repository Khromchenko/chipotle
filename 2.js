// 1. Create a base Form class that encapsulates all the common behavior and elements (selectors) of the 
// payment form. This would include the form fields that are common across both the account and checkout pages.

// 2. Then, create a CheckoutForm class that extends the base Form class. 
// This class would add the extra input parameters specific to the checkout form.

// 3. If the form is at different points in the pages, we could use unique identifiers or classes in 
// the selectors, and if necessary, use DOM traversal methods like parentNode, nextElementSibling, etc., to locate the form.

// Testing: 
// We could use the same base test spec for both forms by passing the form instance 
// as a parameter to your test suite. The base test suite would test behaviors common to all forms. 
// For testing behaviors specific to the CheckoutForm, you could have an additional test suite that 
// extends the base test suite and tests the added behaviors and selectors.