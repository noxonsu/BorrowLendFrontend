export function isStorageOwner(currentAccount: string, ownerAccount: string | null) {
  if (!currentAccount) {
    return false;
  }

  if (ownerAccount === null) {
    return true;
  }

  if (ownerAccount.toLocaleLowerCase() == currentAccount.toLocaleLowerCase()) {
    return true;
  }

  return false;
}
