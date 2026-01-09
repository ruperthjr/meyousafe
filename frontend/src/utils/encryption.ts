export const encodeBase64 = (str: string): string => {
  try {
    return btoa(unescape(encodeURIComponent(str)));
  } catch (error) {
    console.error('Base64 encoding failed:', error);
    return '';
  }
};

export const decodeBase64 = (str: string): string => {
  try {
    return decodeURIComponent(escape(atob(str)));
  } catch (error) {
    console.error('Base64 decoding failed:', error);
    return '';
  }
};

export const hashString = async (str: string): Promise<string> => {
  if (typeof crypto === 'undefined' || !crypto.subtle) {
    console.warn('Web Crypto API not available, using fallback');
    return simpleHash(str);
  }

  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  } catch (error) {
    console.error('Hashing failed:', error);
    return simpleHash(str);
  }
};

const simpleHash = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
};

export const generateSecureToken = (length: number = 32): string => {
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
  }

  let token = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
};

export const maskSensitiveData = (data: string, visibleChars: number = 4): string => {
  if (data.length <= visibleChars) {
    return '*'.repeat(data.length);
  }
  const masked = '*'.repeat(data.length - visibleChars);
  const visible = data.slice(-visibleChars);
  return masked + visible;
};

export const obfuscateEmail = (email: string): string => {
  const [local, domain] = email.split('@');
  if (!local || !domain) return email;

  const visibleChars = Math.min(3, Math.floor(local.length / 2));
  const maskedLocal =
    local.substring(0, visibleChars) + '*'.repeat(local.length - visibleChars);

  return `${maskedLocal}@${domain}`;
};

export const obfuscatePhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length < 4) return phone;

  const lastFour = cleaned.slice(-4);
  return '*'.repeat(cleaned.length - 4) + lastFour;
};

export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();
};

export const escapeHtml = (str: string): string => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

export const unescapeHtml = (str: string): string => {
  const div = document.createElement('div');
  div.innerHTML = str;
  return div.textContent || '';
};

export const generateReportId = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = generateSecureToken(8).toUpperCase();
  return `REP-${timestamp}-${random}`;
};

export const generateReferenceCode = (): string => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code.match(/.{1,4}/g)?.join('-') || code;
};

export const validateReferenceCode = (code: string): boolean => {
  const cleaned = code.replace(/-/g, '');
  const pattern = /^[A-HJ-NP-Z2-9]{8}$/;
  return pattern.test(cleaned);
};

const caesarShift = (str: string, shift: number): string => {
  return str
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
      return char;
    })
    .join('');
};

export const simpleEncrypt = (text: string, key: string): string => {
  const shift = key.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) % 26;
  const shifted = caesarShift(text, shift);
  return encodeBase64(shifted);
};

export const simpleDecrypt = (encrypted: string, key: string): string => {
  const shift = key.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) % 26;
  const decoded = decodeBase64(encrypted);
  return caesarShift(decoded, 26 - shift);
};

export default {
  encodeBase64,
  decodeBase64,
  hashString,
  generateSecureToken,
  maskSensitiveData,
  obfuscateEmail,
  obfuscatePhone,
  sanitizeInput,
  escapeHtml,
  unescapeHtml,
  generateReportId,
  generateReferenceCode,
  validateReferenceCode,
  simpleEncrypt,
  simpleDecrypt,
};