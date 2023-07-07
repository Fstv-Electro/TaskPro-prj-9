# TaskPro-prj-9

This project was created with

Front-end: [Create React App](https://github.com/facebook/create-react-app).
[Redux/redux-toolkit] (https://redux-toolkit.js.org/) state management.
[Redux-persist] (https://github.com/rt2zz/redux-persist#readme) local storage.
[@emotion/styled] (https://github.com/rt2zz/redux-persist#readme) stylization.
[formik] (https://formik.org/) forms. [yup] (https://github.com/jquense/yup)
validation.

Backend:

[Backend API:] (https://task-pro-backend.onrender.com/api-docs/).
[Node.js](https://nodejs.org/). [MongoDB] (https://www.mongodb.com/) noSQL data
base.
[Cloudinary](https://www.filestack.com/?utm_term=cloudinary&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=7530412573&hsa_cam=19921045590&hsa_grp=150684045271&hsa_ad=653682736721&hsa_src=g&hsa_tgt=kwd-316466949510&hsa_kw=cloudinary&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad=1&gclid=CjwKCAjwkeqkBhAnEiwA5U-uMx_WcJLRQ_xL_GFUJf1SwM34LSNn-Tl9IywpuiOsDMTOgXo49lBtohoCjx8QAvD_BwE)
cloud storage.

Task Pro is a powerful web application built with React, Node.js, and MongoDB.
It is designed to help users manage their tasks. This README file provides an
overview of the application, its features, and instructions for setting up and
running the application locally.

Task Management: Users can create, edit, and delete tasks, assign them to
specific users, set due dates, and add additional details or comments.

User Management: Supports user registration and authentication, allowing users
to create their accounts, log in, and manage their tasks privately.

#Project team:

TEAM LEAD FRONT:
[Kutsenko Oleksandr](https://www.linkedin.com/in/kutsenko-oleksandr/)

Code review, PageHome, ScreenPage, redux store, fix bugs.

TEAM LEAD BACK: [Eugene Titov](https://www.linkedin.com/in/eugene-titov/)

Code review, Deployment on Render.com, environment variables, Bug fix, creation
and addition of boards, columns, tasks, code refactoring, endpoint of changing
parent columns, endpoint of changing backgrounds in the filter, Mongoose
aggregation, connecting and using MongoDB, Joi schemas, models collections,
configuring server responses, Pair development.

FRONT:

[Dmytro Novitskyi] https://www.linkedin.com/in/dmytro-novitskyi/

Component listColumns and ColumnItem. Refactoring redux tasks and Board. Filter
tasks with hook filter. deadlinebells in tasks.

[Roman Korzun] https://www.linkedin.com/in/roman-korzun/

Routes, Redux slice.

[Orest Mykhalchuk] https://www.linkedin.com/in/orest-m/

Buttons delete, shift task, component Addlist(tasks), HeaderDashboard and
MainDashBoard style, helped fix bugs.

[Aleksey Ryzhenko] www.linkedin.com/in/aleksey-ryzhenko-316477240

Sidebar style, logic, redux, Components: Background, IconRadioButtons,
CreateBoard, MyBoards, modal: ModalBoard, EditBoard, DeleteBoard, LogOut, helped
fix bugs.

[Ruslan Tenderyts] https://www.linkedin.com/in/ruslan-tenderyts/

Header, editUser, Theme, Scroll, burger menu Sidebar, centering the application,
helped for fix bugs.

[Svitlana Kozachenko] https://www.linkedin.com/in/svitlana-kozachenko-9ba34b248/

AddCard, EditCard, MUI DatePicker.

[Konstantin Yevchuk ] https://www.linkedin.com/in/konstantin-yevchuk-b5aa31262

NeedHelp(component, modal with form, redux), Redux refresh token, Modal +
backdrop, sprite svg, Component Card, EditButton in Component Card(React without
Redux), helped fix bugs.

[Volodymyr Zankevych] https://www.linkedin.com/in/volodymyr-zankevych-43a209255/

Auth, auth redux, google sign up, component Filter.

[Vladyslav Rohalov] https://www.linkedin.com/in/vladyslav-rohalov/

Submit button, Drug and Drop.

BACK:

[Vladyslav Rohalov] https://www.linkedin.com/in/vladyslav-rohalov/

Editing and deleting columns, data validation, MongoDB models and Joi schemas,
functionality for editing user profile, changing photo, name, email address and
password.

[Yulia Safonova] https://www.linkedin.com/in/yuliia-safonova-923986266/

Scrum Master, Conducting meetings, Project and team presentation, Editing and
deleting tasks, working with Cloudinary, collection of backgrounds, Uploading
and changing avatar, data validation, MongoDB models and Joi schemas.

[Serhii Prokip] https://www.linkedin.com/in/serhii-prokip

Editing and deleting boards, initializing the project and starting the server,
Sending mail to the Need Help section, Registration, Login, Logout of users,
Google authentication and sending the generated password by mail, Mongoose
aggregation, Decorators, Middlewares, Helpers, JWT token, data validation,
MongoDB models and Joi schemes, Bug fix, Code review, Pair development,
collection of backgrounds in the database, color themes.

[Andrii Shatokhin] https://www.linkedin.com/in/andrii-shatokhin

Documentation of endpoints using the swagger-ui-express package, Bug fix, Code
review, editing of models, schemes. Server responses to endpoint requests.
