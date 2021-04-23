overview

1) Setup VPC/SG for Jenkins (port 8080)
2) Install Jenkins using Community Script https://qa-community.co.uk/~/_/learning/jenkins-introduction/jenkins--installation-wizard (chmod file)
3) Access public IP :8080
4) Cat initial admin password
5) Make an admin account 
6) Dashboard -> Manage Jenkins -> Manage Credentials -> Domains (Global) Add Credentials
7) Make secret text with id testID

New Project

1) New Item -> Pipeline
2) Go through the setup
3) Link Repo to Build

JenkinsFile 

1) Create a JenkinsFile
2) Go through simple file with an echo 
3) Multi stage build
4) Multi Stage build echo out security var (what happens)
5) Simple script run through sh
6) Example jenkinsfile (build, test, push, deploy)

WebHook 

1) Copy http://<public-ip>/github-webhook/ http://18.202.243.211:8080/github-webhook/
2) Github Repo -> Settings -> Webhook 
3) Payload URL is URL copied
4) green tick -> Url has connected properly
5) May have to manually build for webhook to work
