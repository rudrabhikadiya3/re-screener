const BASE_URL = 'http://localhost:3000/api/'

export const getOverview = async (body: Record<string, string>) => {
  const res = await fetch(`${BASE_URL}parse-om`, {
    method: 'POST',
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error('Failed to fetch users')
  return res.json()
}
