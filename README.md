# Behavioral Research
## Does having the same name as somebody make a person more likely to perform an action?

In this case study, we use a full-stack application to track the numerical reach of a secret link passed from one person to another of the same first name.

###Example

Let's say we wanted to test the name 'Bob'. If the chain starts with Bob 1, and Bob 1 sends the secret link to Bob 2, Bob 2 now decides whether to pass the link on. Is he more likely to do so if the person that told him to has the same name?

##Barriers, and potential solutions

As the code stands now, the mechanism for passing the secret link along is sent via email. The likelihood of opening an unknown link, even from someone you know, is fairly low. Implementing the use of the Facebook API to share or message the secret link could increase the likelihood of passing the link along. 

Before the campaign is deployed, saving whether a user has visited to local storage is definitely the next step. Currently, any user could refresh the page and submit the form again--spamming our test results.

##Simor
This project was executed under the direction of Simor.

Build a network of intellectual peers across the topics that interest you, add new friends to your network and follow them as they post questions, answers, and thoughts.

##Contributors
###Jeffery Reynolds
Server-side and database architecture, client-side logic, responsive design, product refactoring, deployment
###Roxann Lopez
Client-side logic, Materialize CSS library, popular names research

#MIT Licence
Copyright 2017, Jeffery Reynolds

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.