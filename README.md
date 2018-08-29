# unonepercentappfinal
Funding Application Scoring App for UN One Percent for Development Fund

###### The UN One Percent for Development for Staff Fund receives applications from all over the world asking for the sponsoring of self-sustaining community projects in typically poor communities. 

###### A small group of people within the Fund are tasked with reading each individual application and deciding if a given project is worthy of the entire Fund's consideration. This is an extremely time-consuming process and one that can be aided through the use of modern-day computing. This is what my app serves to accomplish. 


**Here's how my program works:**

Usually applicants answer a set of questions on the Fund's website and respond through email, which the group of people within the fund read. However, I made a form (in 3 languages to accompany the majority of the non-English speaking responders). The form's answers, which represent an application, go to a server, which scans the application, and assigns the application a score based on certain characteristics such as location, religious affiliation(which the Fund does not want to associate with), cost of project, and if the project requires giving out salaries. Then, the applications get transferred and presented with their scores and question responses to a viewing website accessible to application readers.

**My commentary on the process**

I used Node.JS as a development environment for JavaScript server-side scripting. As such, I do not have to learn an entirely different language and can have full-stack development with only one programming language. I used a Mongoose Database because there is good documentation and many tutorials on it-I was able learn the fundamentals of databases with much support from the coding community. My favorite part of this application was writing the scoring algorithm. I was really satisfied with myself when I came up with the idea for it. I wrote many array-sorts(about 3) to deal with how I would arrange the applications on the viewing page in accordance to score, but I realized that the best way to organize the viewing page was how it was organized by default in the database-chronologically. All in all, this took many hours of research and even more hours of me experimenting with the code, getting it right to the point of having a systematic understanding of just about everything. I am proud of completing this project, even if I spent 2-3 grueling months of Summer Break on it, and even satiated by the fact that I could help a staff organization under the UN to help people around the world. I truly feel that this serves as my own form of activism. 
