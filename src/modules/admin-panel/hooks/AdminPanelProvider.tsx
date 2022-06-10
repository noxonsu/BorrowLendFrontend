import { createContext, useContext, useEffect, useState } from 'react';
import { useWeb3Context } from 'src/libs/hooks/useWeb3Context';
import { AdminSettings, StorageData } from '../types';
import { deepCompareObjects } from '../utils/deepCompareObjects';
import { isStorageOwner } from '../utils/isStorageOwner';
import { useStorageContract } from './useStorageContract';

export interface AdminPanelData {
  error: string | null;
  settings: AdminSettings | null;
  register: boolean;
  access: boolean;
  writing: boolean;
  loading: boolean;
  canWrite: boolean;
  set: (settings: AdminSettings) => void;
  read: () => void;
  write: () => void;
}

export const AdminPanelContext = createContext<AdminPanelData>({} as AdminPanelData);

export const AdminPanelProvider: React.FC = ({ children }) => {
  const { provider, currentAccount } = useWeb3Context();
  const storageContract = useStorageContract();
  const [settingsWrited, setSettingsWrited] = useState<AdminSettings | null>(null);
  const [settings, setSettings] = useState<AdminSettings | null>(null);
  const [owner, setOwner] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [writing, setWriting] = useState(false);
  const canWrite = deepCompareObjects(settings, settingsWrited) == false;
  const register = owner === null;
  const loading = settings === null;
  const access = !loading && isStorageOwner(currentAccount, owner);

  const init = ({ owner, settings }: StorageData) => {
    setOwner(owner);
    setSettings(settings);
    setSettingsWrited(settings);
  };

  const set = (newSettings: AdminSettings) => {
    const settingsUpdated = Object.assign({}, settings, newSettings);
    setSettings(settingsUpdated);
  };

  const read = () => {
    setError(null);

    return storageContract.read().then(init).catch(setError);
  };

  const write = async () => {
    if (!provider || !settings) {
      return;
    }

    setError(null);
    setWriting(true);

    await storageContract
      .write(provider, currentAccount, settings)
      .then(() => {
        setSettingsWrited(settings);
      })
      .catch(setError);

    if (!owner) {
      await read();
    }

    setWriting(false);
  };

  useEffect(() => {
    read();
  }, []);

  return (
    <AdminPanelContext.Provider
      value={{ access, register, settings, error, loading, writing, canWrite, set, read, write }}
    >
      {children}
    </AdminPanelContext.Provider>
  );
};

export const useAdminPanel = () => {
  const context = useContext(AdminPanelContext);

  if (context === undefined) {
    throw new Error('useAdminPanel must be used within a AdminPanelProvider');
  }

  return context;
};
