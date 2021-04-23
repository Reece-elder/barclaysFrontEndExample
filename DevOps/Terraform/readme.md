Prerequisites:
1) update the app store - Sudo apt-get update
2) install unzip, curl and wget - sudo apt install -y unzip wget curl
3) Access this link - https://www.terraform.io/downloads.html
4) Save 64bit linux as link - https://releases.hashicorp.com/terraform/0.14.10/terraform_0.14.10_linux_amd64.zip
5) Unzip the terraform files - unzip terraform_*_linux_*.zip
6) Move the terraform files - sudo mv terraform /usr/local/bin
7) Remove the unneeded terraform files - rm terraform_*_linux_*.zip
8) Use a .gitignore

9) curl AWS CLI - curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
10) Unzip aws cli - unzip awscliv2.zip
11) install CLI - sudo ./aws/install
12) remove files - rm awscliv2.zip
