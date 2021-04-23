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

resource "aws_instance" "ec2" {
  ami                    = "ami-0dc8d444ee2a42d8a"
  instance_type          = "t2.micro"
  key_name               = ""
  subnet_id              = "subnet-0ec3789f46b781baf"
  vpc_security_group_ids = ["sg-0a1f05bc8598b2c9f"]
  tags = {
    Name = var.Name
  }
  associate_public_ip_address = true
}

resource "aws_instance" "ec2" {
  ami                    = var.ami_id
  instance_type          = var.instance
  key_name               = ""
  subnet_id              = var.subnet_id
  vpc_security_group_ids = var.vpc_security_group_ids
  tags = {
    Name = var.name
  }
  associate_public_ip_address = var.enable_public_ip
}