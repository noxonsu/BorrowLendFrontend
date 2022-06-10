export type AdminSettings = {
  logoUrl?: string;
  faviconUrl?: string;
  title?: string;
};

export type RawStorageData = {
  owner: string;
  info: string;
};

export type StorageData = {
  owner: string | null;
  settings: AdminSettings;
};
