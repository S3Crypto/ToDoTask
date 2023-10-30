<B>Todos Application</B>
This is a simple Todos application that allows users to manage their tasks by adding new tasks, marking tasks as completed, and viewing lists of pending and completed tasks.

• How lon g d id you s p e n d on you r s olu tion ?
About 3 hours
• How do you bu ild a n d ru n you r s olu tion ?
Visual Studio for Mac, setup instructions below.

• Wh a t te ch n ica l a n d fu n ction a l a s s u m p tion s did you m a ke wh e n im p le m e n tin g
you r s olu tion ?

We made the assumption that we do not need to store data, create backend unit testing or stylise the front UI

• Brie fly e xpla in you r te ch n ica l de s ign a n d wh y do you th in k is th e be s t
a pproa ch to th is proble m .

For our frontend app, we have used React, as it's an easy-to-use mature library for building UI. For state management, we're utilizing Redux. It gives a single source of truth, making it easier to manage state. By using TypeScript, we're adding static types to the application. This provides an additional layer of error-checking, making the application more robust and easier to maintain.
Handling asynchronous operations is made easier with Redux Thunk. It allows dispatching actions asynchronously, which is particularly useful for API calls.

For the backend we have used .NET Core to implement an MVC structure. This will allow us in future to build more business logic and data access.

• If you we re u n a ble to com ple te a n y u s e r s torie s , ou tlin e wh y a n d h ow wou ld
you h a ve like d to im ple m e n t th e m .
Toggling the complete state of the task might have been broken in the current iteration. todos.filter needs fixing to fix this user story fully.

• If you h a ve u s e d AI ch a tbot toolin g a n ywh e re , wh e re wa s it u s e d a n d h ow did
it h e lp?
Writing the below README file, Coming up with product enhancement ideas

Features:
Add New Todo: Users can add new tasks to their list.
Mark as Completed: Tasks can be marked as completed once they are done.
View Tasks: Tasks are categorized into 'Pending' and 'Completed', making it easier to manage.
Technologies:
React: For building the user interface.
Redux: For state management.
TypeScript: For adding static types.
Redux Thunk: For handling asynchronous actions.
Getting Started:
Prerequisites:
Ensure you have Node.js and npm (Node Package Manager) installed on your machine. If not, you can download and install them from the official website.

Installation:
Clone the repository

Install the dependencies:
npm install

Start the application:

npm start
This will start the application and open it in your default browser. By default, it will run on http://localhost:3000, unless you've set up a different port.

Usage:
On the main page, you'll see two sections: 'Pending Tasks' and 'Completed Tasks'.
Use the 'Add Todo' button or section to add new tasks.
Click on a task to mark it as completed or pending.
Troubleshooting:
Issue: todos.filter is not a function
Solution: Ensure that the todos state in Redux is initialized as an empty array. Check your API response and Redux reducers to make sure the data structure is correct.
Contributing:
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.
