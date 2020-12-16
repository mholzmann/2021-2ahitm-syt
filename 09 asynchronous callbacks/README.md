# Asynchronous Callbacks

*Asynchronous* code is used for accessing or fetching some kind of resource from an external device, such as:

- fetching a file 
- accessing a database

It is also useful, if you want to run code after a set time period has elapsed, or at a regular interval.

But why shouldn't we just use *synchronous* code? Let's look at a quick example. If you want to execute some code after a certain timeout has expired, you might implement a function called `sleep()`, which waits for the passed amount of milliseconds. Then you could use `sleep()` as shown below:

```javascript
console.log('Starting timeout of 5000 ms...');
sleep(5000);
console.log('5000 ms have passed');
```

The problem with this *synchronous* code is, that `sleep(5000)` blocks the thread for five seconds. Remember that *Node.js* is single-threaded - so your whole *Node.js* application won't respond to e.g. HTTP requests during this time period.

That's were *asynchronous callbacks* come to rescue. *Async callbacks* are functions that are specified as arguments when calling another function `doSomething()`. `doSomething()` will start executing some code in the background. When the background code is finished, `doSomething()` invokes the callback function to let you know the work is done, or to let you know that something of interest has happened.

Now lets go back to our *sleep* example: With a callback and the built-in function `setTimeout()` the solution would look like this:

```javascript
console.log('Starting timeout of 5000 ms...');
setTimeout(() => console.log('5000 ms have passed'), 5000);
```

This *asynchronous* code doesn't block the thread during the five seconds and so your application can do something else in the meantime (e.g. respond to a HTTP request).
