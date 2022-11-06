import transformURLProxy from '../utils/transformURLProxy';

const URL = transformURLProxy(
  'https://datos.madrid.es/portal/site/egob/menuitem.ac61933d6ee3c31cae77ae7784f1a5a0/?vgnextoid=00149033f2201410VgnVCM100000171f5a0aRCRD&format=json&file=0&filename=202625-0-aparcamientos-publicos&mgmtid=26e6cc885fcd3410VgnVCM1000000b205a0aRCRD&preview=full'
);
async function getParkings() {
  try {
    const response = await fetch(URL, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      headers: {}
    });
    const responseString = await response.text();
    const withoutMinusErrors = responseString.replaceAll('--', '-');
    const parkingApiData = JSON.parse(withoutMinusErrors);
    return parkingApiData;
  } catch (error) {
    return error;
  }
}

export default getParkings;
