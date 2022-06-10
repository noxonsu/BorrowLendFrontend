import { TransactionReceipt, TransactionResponse } from '@ethersproject/providers';

export function waitConfirmations(confirmations: number) {
  return function ({ wait }: TransactionResponse): Promise<TransactionReceipt> {
    return wait(confirmations);
  };
}
