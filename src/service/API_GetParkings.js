import transformURLProxy from '../utils/transformURLProxy';

const URL = transformURLProxy(
  'https://datos.madrid.es/portal/site/egob/menuitem.ac61933d6ee3c31cae77ae7784f1a5a0/?vgnextoid=00149033f2201410VgnVCM100000171f5a0aRCRD&format=json&file=0&filename=202625-0-aparcamientos-publicos&mgmtid=26e6cc885fcd3410VgnVCM1000000b205a0aRCRD&preview=full'
);
async function getParkings() {
  const res = await fetch(URL);
  try {
    const data = await res.clone().json();
    return data;
  } catch (error) {
    if (error instanceof SyntaxError) {
      const resCastToString = await res.clone().text();
      const replaceFloat = resCastToString.replace('--', '-');
      // lo vuelvo a porner a json para poder manejarlo
      const solvedParkings = JSON.parse(replaceFloat);
      // transformo a texto para poder hacer un replace de los --
      return solvedParkings;
    }
    return error;
  }
}

export default getParkings;
