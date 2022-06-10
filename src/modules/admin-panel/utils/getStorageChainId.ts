import { ChainId } from '@aave/contract-helpers';

export const getStorageChainId = () => {
  return process.env.NEXT_PUBLIC_ENABLE_TESTNET ? ChainId.bsc_testnet : ChainId.bsc;
};
