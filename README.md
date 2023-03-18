![](https://komarev.com/ghpvc/?username=TUNKSTUN)
<br/> 
# Ethichax - Personal Blogging Webapp! 📝✍🏻🚀🌐️
<p align="center"><img src="https://github.com/TUNKSTUN/Ethichax/blob/main/eth.gif" alt="demo app"/></p>
👋🏻 Hello and welcome to Ethichax Personal Blogging Webapp! This is a ReactJS application that allows admin to perform CRUD operations on articles. The app uses Azure MySQL for storing articles data.

🔥 Firebase - Realtime Database is used for Guest Book feature which allows anyone to leave a message anonymously on this website.🔥
## <p align="center"> Working Project 🛠️ </p>
Hosted on Firebase Web Apps 👇🏻
> [ETHICHAX](https://ethichax.web.app)
## Technologies Used  👨‍💻
1. Hosting - Azure Web App
2. Backend Server - Spring Boot (Web, JPA, Thymeleaf and JDBC)
3. Frontend - React and Tailwind for styling
4. Database - Azure MySQL and Firebase Realtime Database

## Connecting to Azure MySQL Database 📘

- To connect to mysql database in azure, u need to create a free account and start a azure mysql service.
- You can use Azure Cloud shell portal or MySQL Workbench by adding credentials of server to connect to Azure Mysql Server. you can also connect to database locally by using powershell:
```
 mysql -h {mysql_service_name}.mysql.database.azure.com -u {username} -p
 Enter password: <mysql_password>                                🙈🙈🙈
```
Add the String provided to you after successful creation mysql server on azure cloud, in application.properties file of spring boot.
```
spring.datasource.url = <JDBC URL>
spring.datasource.username = <your username>
spring.datasource.password = <your password>
```
## Integrating React + Spring Boot 🍃

See how you can Integrate your React app in Spring boot by reading this article:
> [Run React and SpringBoot on the same port and Package them as a single artifact !!](https://medium.com/codex/run-react-frontend-and-springboot-backend-on-the-same-port-and-package-them-as-a-single-artifact-a790c9e10ac1)
## Updating the Repo 💻
If you'd like to update the repo, let me know 💁‍

<br/>

### <center>Give a <sup>⭐</sup> if you liked this project 🧡 </center>
### <center>👨‍💻👩‍💻 Happy coding! </center>
