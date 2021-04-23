variable "outbound_port" {
  description = "List of outbound port"
  default     = 0
}

variable "open_internet" {
    default = "0.0.0.0/0"
}

variable "configure_VM_CIDR" {
    default = "3.251.78.238/32"
}

variable "vpc_id_SG" {
    default = "vpc-070988ae0147cf377"
}

variable "name" {
    default = "New Security Group"
}