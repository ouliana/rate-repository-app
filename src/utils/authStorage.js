import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const token = await AsyncStorage.getItem(`${this.namespace}:token`);
  return token;
}
async function setAccessToken(token) {
  await AsyncStorage.setItem(`${this.namespace}:token`, token);
}

async function clearAccessToken() {
  await AsyncStorage.removeItem(`${this.namespace}:token`);
}

export default authStorage;
