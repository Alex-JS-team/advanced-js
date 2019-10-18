export const getRespos = ls => Object.keys(ls).map(key => JSON.parse(ls.getItem(key)))

export const updateIsStarredState = (
  isStarred,
  localStorage,
  id,
  name,
  description,
  licenseInfo,
  owner,
  languages,
  setIsStarred
) => setRepos => {
  if (!isStarred) {
    localStorage.setItem(name, JSON.stringify({ id, name, description, licenseInfo, owner, languages }))
  } else {
    localStorage.removeItem(name)
  }

  if (setRepos) {
    setRepos(getRespos(localStorage))
  }

  setIsStarred(!isStarred)
}
