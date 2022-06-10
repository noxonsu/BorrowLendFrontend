import { ChainId } from '@aave/contract-helpers';
import { getStorageChainId } from './getStorageChainId';

export function isStorageChainId(chainId: ChainId): boolean {
  return chainId === getStorageChainId();
}
