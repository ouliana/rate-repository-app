import AsyncStorage from '@react-native-async-storage/async-storage';
import { i18n } from '../utils/i18n';

function authStorage() {
  const namespace = 'auth';
  return {
    namespace,
    getAccessToken,
    setAccessToken,
    clearAccessToken,
  };
}

async function getAccessToken() {
  try {
    const token = await AsyncStorage.getItem(`${this.namespace}:token`);
    return token;
  } catch (e) {
    throw new Error(i18n.t('otherErrorMessage'));
  }
}
async function setAccessToken(token) {
  try {
    await AsyncStorage.setItem(`${this.namespace}:token`, token);
  } catch (e) {
    throw new Error(i18n.t('otherErrorMessage'));
  }
}

async function clearAccessToken() {
  try {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  } catch (e) {
    throw new Error(i18n.t('otherErrorMessage'));
  }
}

export default authStorage;
