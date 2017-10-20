/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

require("./bundle-config");
var application = require("application");
require('nativescript-dom');

// Add any global license keys for products
global.licenses = { Anyline: "eyJzY29wZSI6WyJBTEwiXSwicGxhdGZvcm0iOlsiaU9TIiwiQW5kcm9pZCIsIldpbmRvd3MiXSwidmFsaWQiOiIyMDE3LTExLTExIiwibWFqb3JWZXJzaW9uIjoiMyIsImlzQ29tbWVyY2lhbCI6ZmFsc2UsInRvbGVyYW5jZURheXMiOjMwLCJzaG93UG9wVXBBZnRlckV4cGlyeSI6dHJ1ZSwiaW9zSWRlbnRpZmllciI6WyJ0ZWNobm9sb2d5Lm1hc3Rlci5kZW1vIl0sImFuZHJvaWRJZGVudGlmaWVyIjpbInRlY2hub2xvZ3kubWFzdGVyLmRlbW8iXSwid2luZG93c0lkZW50aWZpZXIiOlsidGVjaG5vbG9neS5tYXN0ZXIuZGVtbyJdfQpRU1ZiS0Z2dCtIdUNJMVplbmJwQmJQdXBvdlNlclBhV24xSFVaRS9rSnR4SjFIR1ZPdW5ES2NUN0F3RnFkR3JlRXROUlVyeksxai9PM09PZEgrRDJuVFFXZ05BVE1BMTFiQlExQW0vaW9oVFJoL3F5Zkd6ODB4SHNYa3lWQ2h0SnpLbnVlSFJqTG85U1E2RW5XTjFZNkJCSkRXcHJiZFRNemlDZHBBMUhIaW9QVUFNS3pkS3RsYkp3ZFlxS1p3bUFKemhtOTZxMk1YaXJEeU5sNkNFbWNNU256cEVBbVMrckpiczR0aWE5Y2dSQnZWQnRKYVhnWmR1em5KSnkvK1NjUm5LOFliL2oweXpzUlJnR1NVV2N2aHRRNHIzTHdVZnVsazVFRUd1bmNiZG5JZFVFRWxacFNYUWlYbGJySWRuMS9lWk5MQ2pqNTZxUXBlZDd5R01CYmc9PQ==" };

application.start({ moduleName: "main-page" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
