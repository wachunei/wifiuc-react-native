export const cleanUsername = (username) => {
  const ucSuffix = '@uc.cl';
  const index = username.indexOf(ucSuffix, username.length - ucSuffix.length);
  if (index !== -1) {
    return username.substr(0, index);
  }

  return username;
};

const MAC_SEPARATOR = '-';

export const macFormat = mac => mac.match(new RegExp('[0-9a-fA-F]{2}', 'g'))
  .join(MAC_SEPARATOR).toUpperCase();

export const matchesMac = mac => /^([0-9a-fA-F]{2}[:-]?){5}([0-9a-fA-F]{2})$/.test(mac);

export const cleanMac = mac => mac.replace(new RegExp(`${MAC_SEPARATOR}|:`, 'g'), '').toLowerCase();

export const capitalize = string => string.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
