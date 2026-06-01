import api from './blogServices'

export const fetchBlog = async () => {
  const response = await api.get('/posts')
  return response.data
}

//fetching by slug

//fetching by tag
