Prerequisites:

sudo apt update 
sudo apt install software-properties-common
sudo apt-add-repository --yes --update ppa:ansible/ansible
sudo apt install ansible

ansible 127.0.0.1 -m apt -a "name=nginx state=present update_cache=true" --become