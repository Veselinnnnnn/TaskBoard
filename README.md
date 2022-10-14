# TaskBoard

## !Important!
The project is in its initial stage. In the near future I'll be adding new features and upgrading the old ones to be more optimal.


## Description

**TaskBoard** A task board is considered to be one of the most successful tools for teamwork. 
Whether it's for work, a side project or even the next family vacation, we help your team stay organized. We've got the flexibility and features to fit any team's style.

## Entity Model

### User

A *User* entity represents a single person or an organization 

A *User* entity has the following properties:

- *id* - the unique identifier of the user (type and value)
- *firstName* - the first name of the user
- *lastName* - the last name of the user
- *email* - the email of the user
- *password* - the password of the user used to sign in

### Project

A *Project* entity represents a project created by a user or organization 

A *Project* entity has the following properties:

- *id* - the unique identifier of the project (type and value)
- *projectName* - the name of the project
- *tasks* - set of tasks in the project
- *members* - participants in this project
- *userId* - the unique identifier of the user who created this project
- *teamLeader* - the team leader of the project

### Task

A *Task* enitity represent a task of one project

A *Task* entity has the following properties:

- *id* - the unique identifier of the task (type and value)
- *name* - the name of the task
- *description* - the description of the task
- *parentTask* - to check if the task is subTask or parentTask (if it is parent task the value is null, if it is subTask then we save info about the parent)
- *taskType* - the type of the task (*TODO*,*STARTED*,*FINISHED*)
- *project* - the project the task is related to
- *userId* - the unique identifier of the user who created this task
- *taskOwner* - the task owner

## Functional Requirements

### Frontend

In order to work with the application, a user should authenticate first.

Once logged in, a user is presented with the dashboard page, in the top right corner after clicking account icon, with links to the following pages:

- *Account settings* - contains information about the user
- *My projects* - contains a list of all projects of this user
- *Language* - contains a list of languages 
- *Sign out* - sign out from the account

Once a user is presented with the *Account settings* page, they see the following dashboard with default page *Profile*,which has links to the following pages:

- *Profile* - contains a filled form with basic information about user which he can change
- *Photo* - contains a photo of the user which he can change
- *Account Security* - contains a filled form with security(password and email) information about user which he can change

Once a user is presented with the *My project* page, they see all projects in which he participates and *Create Project* button which serves for creating a new project . 
Once he clicks on a project, the user is navigated to the full information about this project and a taskboard which is divided into 3 groups of tasks (TODO,STARTED,FINISHED).

## Non-functional Requirements

### Architecture

The solution should be have the following layers:

1. Frontend - a web-based application meeting the following requirements:
	- Responsive - a user should be able to work without losing functionality on an average tablet/phone
	- HTML 5, CSS/SCSS, Bootstrap, Angular with TypeScript/JavaScript
2. Backend - an API application meeting the following requirements:
	- RESTful - should follow the best practices:
	- Problem Details - error handling should be implemented with [RFC 7807](https://tools.ietf.org/html/rfc7807)
3. Database - a relational database should be used meeting the following requirements:
	- Data types - suitable data types should be used for database columns to best reflect their content
	- Keys - tables should have a primary key used to identify each row, and appropriate unique keys where applicable
	- Relationships - database tables should have relationships established with the suitable foreign keys
