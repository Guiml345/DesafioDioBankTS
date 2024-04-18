import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    depositVip = (deposit: number): void => {
        this.deposit(deposit + 10)
    }
}
