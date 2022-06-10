import { JsonRpcProvider } from '@ethersproject/providers';
import { Contract } from 'ethers';
import { getStorageChainId } from './getStorageChainId';

export function addStorageSigner(contract: Contract, provider: JsonRpcProvider) {
  const currentChainId = provider.network.chainId;
  const storageChainId = getStorageChainId();
  if (currentChainId !== storageChainId) {
    throw new Error(
      `Wrong chain id is detected. Expected ${storageChainId}, but received ${currentChainId}`
    );
  }
  return contract.connect(provider.getSigner());
}
