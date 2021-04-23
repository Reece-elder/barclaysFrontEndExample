provider "aws" {
    shared_credentials_file = "~/.aws/credentials"
    region = "eu-west-1"
}

resource "aws_instance" "ec2" {
  ami                    = "ami-0dc8d444ee2a42d8a"
  instance_type          = "t2.micro"
  key_name               = ""
  subnet_id              = "subnet-0ec3789f46b781baf"
  vpc_security_group_ids = ["sg-0a1f05bc8598b2c9f"]
  tags = {
    Name = "FirstVM"
  }
  associate_public_ip_address = true
}

module "Subnet" {
  source = "./VPC"
}

module "SecurityGroup" {
  source = "./SG"
}

module "FirstVM" {
  source                 = "./EC2"
  Name                   = "first_vm"
}

module "SecondVM" {
  source                 = "./EC2"
  Name                   = "second_vm"
}

module "firstVM" {
  source                 = "./EC2"
  name                   = "first_vm"
  subnet_id              = module.Subnet.subnet_a_id
  vpc_security_group_ids = [module.SecurityGroup.aws_sg_id]
}

module "secondVM" {
  source                 = "./EC2"
  name                   = "second_vm"
  subnet_id              = module.Subnet.subnet_a_id
  vpc_security_group_ids = [module.SecurityGroup.aws_sg_id]
}