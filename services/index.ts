const BASE_URL = 'http://localhost:3000/api/'

export const getOverview = async (body: Record<string, string>) => {
  const res = await fetch(`${BASE_URL}parse-om`, {
    method: 'POST',
    body: JSON.stringify({ demands: body }),
  })
  return res.json()
}
