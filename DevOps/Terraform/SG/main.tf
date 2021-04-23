resource "aws_security_group" "securityGroup" {
  name        = var.name
  description = "Allow SSH connection"
  vpc_id      = var.vpc_id_SG

  ingress {
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = [var.open_internet]
  }
  
  egress {
    from_port   = var.outbound_port
    protocol    = "-1"
    to_port     = var.outbound_port
    cidr_blocks = [var.open_internet]
  }
}