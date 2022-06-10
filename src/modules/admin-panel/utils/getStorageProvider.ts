import { JsonRpcProvider } from '@ethersproject/providers';
import { networkConfigs } from 'src/ui-config/networksConfig';
import { getStorageChainId } from './getStorageChainId';

export function getStorageProvider() {
  return new JsonRpcProvider(networkConfigs[getStorageChainId()].publicJsonRPCUrl[0]);
}
