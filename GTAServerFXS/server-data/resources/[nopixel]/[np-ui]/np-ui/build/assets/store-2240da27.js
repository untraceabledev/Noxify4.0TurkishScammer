const appName = "san-andreas-state";
const store = {
  key: appName,
  initialState: {
    accounts: [],
    accountCharacters: [],
    accountCharactersFor: 0,
    accountsSearch: {},
    accountTypes: [],
    activeBallots: [],
    businesses: [],
    businessTypes: [],
    characters: [],
    characterLicenses: [],
    characterLicensesFor: 0,
    expiredBallots: [],
    farmersItems: [],
    licenses: [],
    permissions: [],
    taxes: []
  }
};
export { appName, store as default };