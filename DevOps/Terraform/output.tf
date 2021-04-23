output "firstVM_IP" {
    value = module.firstVM.public_ip
}

output "seconfVM_IP" {
    value = module.secondVM.public_ip
}