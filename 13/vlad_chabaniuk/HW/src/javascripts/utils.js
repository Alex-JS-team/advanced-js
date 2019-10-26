export const getFavReposFromLS = ls => {
  const res = ls.getItem('favRepos')

  return res ? JSON.parse(res) : []
}
