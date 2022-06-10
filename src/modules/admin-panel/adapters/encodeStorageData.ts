import { AdminSettings, RawStorageData } from '../types';

export function encodeStorageData(owner: string, settings: AdminSettings): RawStorageData {
  const data: RawStorageData = { owner, info: '' };

  data.info = JSON.stringify(settings);

  return data;
}
