[DEMO](https://m1k1ta.github.io/angular_google-auth/)

** I used free services for the back-end(BD-Neon and deploying service-render.com), so the first loading data will be really long, and maybe need to reload

---INTRODUCTION---

Hello. I created this project after receiving a test task. The task was to implement Google authentication, and after authentication, users could invite a friend. I came up with other features on my own. It took me about 10 days, equivalent to two work weeks, to complete the project. Perhaps it took longer due to the time spent learning Angular and Google authentication as I worked on the task. However, I consider it good practice for me. I handled both the Front-end and Back-end development alone.

---TECHNOLOGIES---

In this project, I utilized Angular.js, SCSS, Node.js, Express, Sequelize, TypeScript, Nodemailer, and some other small libraries like cors.

---DEVELOPMENT PROCESS---

I started with Google authentication, which required going through a lot of documentation. After some time, I successfully implemented Google authentication. Despite encountering outdated information on the internet, I persevered. Additionally, I decided to implement standard authentication using email and password. I wanted to avoid having just a white screen with only one button for Google authentication. So, I added more features as the development progressed.

For the authentication form, I styled it without using an Angular function. I know Angular has methods that make creating forms easier, but I preferred to challenge myself and learn those methods later. I also developed the Back-end for authentication, which was not a problem since I had experience working with Node, Express, and Sequelize before.

Once authentication was done, I learned about routing in Angular using the Angular docs and chat GPT. I successfully blocked content until the user logged in or registered. As I started building the content, I simultaneously visualized how my app would look. In a way, I also played the role of a designer. If you use Telegram, you might see some similarities in the design of my project.

I want to highlight the Back-end development. Even before working on the Front-end, I found the Back-end work interesting. I designed methods so that users could only see the rooms they were part of. I also created a bridge table, which serves as a connection between user data and room data. I applied this method for the first time, and it was like me. I recall feeling really pleased when I completed the Back-end.

---FUNCTIONALITY OF THE PROJECT---

Users can register using Google authentication or the standard email/password form. Upon creating an account, the user will be placed in the Welcome room. Additionally, users can create rooms and add friends to those rooms using email invitations. When a user adds a friend, the friend is added to the room and receives an email with a link. If the invited user is not registered in my project, they will be added to the data of the room but will not be displayed until they register.
