Table: Users
ID (int)
FirstName (varchar)
LastName (varchar)
DOB (date)
Password (varchar)
Email (email)
Bio (varchar)
CreateTime (datetime)
UpdateTime (datetime)

Table: Posts
ID (int)
UsersID (int) -> Users.ID
PostTime (datetime)
Text (varchar)
LikeCount (int)

Table: Likes
ID (int)
UsersID (int) -> Users.ID
PostsID (int) -> Posts.ID
CreateTime (datetime)

Table: Friends
ID (int)
RequestUser (int) -> Users.ID
RequestTime (datetime)
RecieveUser (int) -> Users.ID
Status (enum ['Pending', 'Confirmed', 'Rejected'])
StatusTime (datetime)