import { Contract } from 'ethers';
import { getDomain } from 'src/modules/admin-panel/utils/getDomain';
import { AdminSettings, StorageData } from 'src/modules/admin-panel/types';
import { decodeStorageData } from '../adapters/decodeStorageData';
import { encodeStorageData } from '../adapters/encodeStorageData';
import { storageErrorHandler } from '../adapters/storageErrorHandler';
import { waitConfirmations } from '../adapters/waitConfirmations';
import { getStorageProvider } from '../utils/getStorageProvider';
import { JsonRpcProvider } from '@ethersproject/providers';
import { addStorageSigner } from '../utils/addStorageSigner';
import STORAGE from '../constants/contract.json';
import { getStorageAddress } from '../utils/getStorageAddress';

const contract = new Contract(getStorageAddress(), STORAGE.abi, getStorageProvider());

const storageContract = {
  read: (): Promise<StorageData> =>
    contract.getData(getDomain()).then(decodeStorageData).catch(storageErrorHandler),
  write: (
    provider: JsonRpcProvider,
    owner: string,
    settings: AdminSettings
  ): Promise<StorageData> =>
    addStorageSigner(contract, provider)
      .setKeyData(getDomain(), encodeStorageData(owner, settings))
      .then(waitConfirmations(1))
      .catch(storageErrorHandler),
};

export function useStorageContract() {
  return storageContract;
}
