export default async (list, filters) => {
  let tmpList = list

  tmpList = await tmpList.sort((a, b) => {
    let res

    if (filters.sort === 'asc') {
      res = new Date(a.created_at) - new Date(b.created_at)
    } else {
      res = new Date(b.created_at) - new Date(a.created_at)
    }

    return res
  })

  if (filters.dateTime && filters.dateTime.length) {
    tmpList = await tmpList.filter(twitt => (
      new Date(twitt.created_at) >= new Date(filters.dateTime[0]) && 
      new Date(twitt.created_at) <= new Date(filters.dateTime[1])
    ))
  }

  return tmpList
}