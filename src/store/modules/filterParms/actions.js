export function filterParmsChange(allParms) {
  return {
    type: '@filterParms/CHANGE',
    payload: allParms,
  };
}

export function filterParmsReset() {
  return {
    type: '@filterParms/RESET',
    payload: false,
  };
}
