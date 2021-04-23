resource "aws_subnet" "subnet_a" {
  vpc_id                  = "vpc-070988ae0147cf377"
  cidr_block              = var.subnet_cidr_block
  availability_zone       = "eu-west-1c"
  map_public_ip_on_launch = true
  tags = {
    Name: "public_subnet"
  }
}