import { RawStorageData, StorageData, AdminSettings } from '../types';
import nullAddress from '../constants/null.json';

export function decodeStorageData({ owner, info }: RawStorageData): StorageData {
  const data: StorageData = { owner, settings: {} as AdminSettings };

  if (owner === nullAddress) {
    data.owner = null;
  }

  if (info.length) {
    try {
      data.settings = JSON.parse(info);
    } catch (error) {
      throw new Error('Storage data parsing: ' + error);
    }
  }

  return data;
}
