variable "Name" {
  description = "EC2 name"
}

variable "ami_id" {
  default = "ami-0dc8d444ee2a42d8a"
}

variable "subnet_id" {
  description = "subnet id for EC2"
  default = "subnet-0ec3789f46b781baf"
}

variable "enable_public_ip" {
  description = "enable public ip"
  default     = true
}

variable "vpc_security_group_ids" {
  description = "vpc security group ids"
}

variable "instance" {
  description = "ec2 instance"
  default     = "t2.micro"
}