import { storageAddresses } from '../constants/storageAddresses';
import { getStorageChainId } from './getStorageChainId';

export function getStorageAddress() {
  return storageAddresses[getStorageChainId() as keyof typeof storageAddresses];
}
