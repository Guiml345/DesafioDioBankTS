import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipAccount } from './class/VipAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const vipAccount: VipAccount  = new VipAccount('Gui', 30)


console.log('Dono da conta: ' + peopleAccount.getName())
peopleAccount.deposit(100)
console.log('Voce depositou: ' + peopleAccount.getBalance() + ' reais')
peopleAccount.withdraw(50)
console.log('Você sacou: ' + peopleAccount.getBalance() + ' reais')
console.log('\n')

console.log('Dono da conta: ' + companyAccount.getName())
companyAccount.deposit(150)
console.log('Voce depositou: ' + companyAccount.getBalance() + ' reais')
companyAccount.withdraw(25)
console.log('Saldo atual: ' + companyAccount.getBalance() + ' reais')
companyAccount.getLoan(5000)
console.log('Saldo atual: ' + companyAccount.getBalance())
console.log('\n')

console.log('Dono da conta: ' + vipAccount.getName())
vipAccount.depositVip(100)
console.log('Voce depositou: ' + vipAccount.getBalance() + ' reais')
vipAccount.withdraw(50)
console.log('Saldo atual: ' + vipAccount.getBalance() + ' reais')
console.log('\n')
