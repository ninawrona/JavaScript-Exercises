//Exercise 13 - express
//Which line adds a middleware function to a server (all imports are correct)

import { Session } from "inspector"
import { stopCoverage } from "v8"

const app = express()
app.use(logger)
app.get("/", (req, res) => {
  res.send(users)
})
app.listen(3000)


//Exercise 14 - express
//what does middleware do in this case?

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post("/", (req, res) => {
  res.send("You posted: " + JSON.stringify(req.body))
})

app.listen(3000)

//Exercise 15 - express
//Which http status is used for displaying an "Unauthorized" error

//Option 1
function requireAuth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]
    if (!token) return res.status(500).send({ error: "Unauthorized" })

//Option 2
function requireAuth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]
    if (!token) return res.status(501).send({ error: "Unauthorized" })

//Option 3
function requireAuth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]
    if (!token) return res.status(401).send({ error: "Unauthorized" })
    
//Option 4
function requireAuth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]
    if (!token) return res.status(400).send({ error: "Unauthorized" })

//Exercise 16 - express
// What is the purpose of the second argument in hash() method

const hashedPassword = await bcrypt.hash(password, 10)

//Exerise 17 - Testing
//Which of the following does the Lighthouse tool analyze in web apps?

Performance
Accessibility
SEO
Integration
Best Practises
DOM interactions

//Exercise 18 - Testing
//What RTL (React Testing Library) cannot test?

Units
Integration
Components in isolation
Coverage
DOM interactions


//Exercise 19 - Testing
//What is a "smoke test"?


//Exercise 20 - Typescript
//What types are currently assigned to arguments?
//What do we need to do to fix this code?

const addTwoNumbers = (a, b) => {
    return a + b;
};

//Exercise 21 - Typescript
//Which syntax is incorrect

//Option 1
const Parameters = {
    first: number;
    second: number;
  };
  
const addTwoNumbers = (params: Parameters) => {
    return params.first + params.second;
  };

//Option 2
type Parameters = {
    first: number;
    second: number;
  };
  
const addTwoNumbers = (params: Parameters) => {
    return params.first + params.second;
  };

//Option 3
const addTwoNumbers = (params: { first: number; second: number }) => {
    return params.first + params.second;
  };


//Option 4
interface Parameters {
    first: number;
    second: number;
  }
  
  export const addTwoNumbers = (params: Parameters) => {
    return params.first + params.second;
  };

  //Exercise 22 - Typescript
    /**
     * How do we ensure that role is only one of:
     * - 'admin'
     * - 'user'
     * - 'super-admin'
     */

  //Which syntax is incorrect?

  //Option 1
    interface User {
        id: number;
        firstName: string;
        lastName: string;
        role: "admin" | "user" | "super-admin";
    }

  //Option 2

  type Person = ['admin', 'user', 'super-admin'];

    interface User {
        id: number;
        firstName: string;
        lastName: string;
        role: Person;
    }

    //Option 3

    interface User {
        id: number;
        firstName: string;
        lastName: string;
        role: string = ["admin" | "user" | "super-admin"];
    }

    //Exercise 23 - Typescript
    // How do we ensure that makeUser ALWAYS returns a user?

    interface User {
        id: number;
        firstName: string;
        lastName: string;
      }  

      const makeUser = () => {
        return {
            id: 1,
            firstName: "Nina",
            lastName: "Wrona"
        };
      };

      //Exercise 24 - TypeScript
      //Is this syntax correct?

      interface LukeSkywalker {
        name: string;
      }
      
      const fetchLukeSkywalker = async (): LukeSkywalker => {
        const data = await fetch('https://swapi.dev/api/people/1').then((res) => {
          return res.json();
        });
      
        return data;
      };

      //Exercise 25 - Typescript
      //What does a Record type allow us to do?

      const cache: Record<string, string> = {}

      //Exercise 26 - TypeScript
      //Which syntax is incorrect?

      //Option 1
      const tryCatchDemo = (state: 'fail' | 'succeed') => {
        try {
          if (state === 'fail') {
            throw new Error('Failure!');
          }
        } catch (e: any) {
          return e.message;
        }
      };

      //Option 2
      const tryCatchDemo = (state: "fail" | "succeed") => {
        try {
          if (state === "fail") {
            throw new Error("Failure!");
          }
        } catch (e) {
          return (e as Error).message;
        }
      };

      //Option 3
      const tryCatchDemo = (state: "fail" | "succeed") => {
        try {
          if (state === "fail") {
            throw new Error("Failure!");
          }
        } catch (e) {
          if (e instanceof Error) {
            return e.message;
          }
        }
      };

      //Option 4
      const tryCatchDemo = (state: 'fail' | 'succeed') => {
        try {
          if (state === 'fail') {
            throw new Error('Failure!');
          }
        } catch (e: Error) {
          return e.message;
        }
      };

      //Exercise 27
      //How do we create a new object type with only the firstName and lastName properties of User?
      //Which option is INCORRECT?
      
      interface User {
        id: string;
        firstName: string;
        lastName: string;
      }
      
      //Option 1
      type MyType = Pick<User, "firstName" | "lastName">;

      //Option 2
      type MyType = Partial<User, "firstName" | "lastName">;

      //Option 3
      type MyType = Omit<User, "id">;