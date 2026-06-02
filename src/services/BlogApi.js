import api from './blogServices'

export const fetchBlog = async () => {
  const response = await api.get('/posts')
  return response.data
  //or should i just add the paramaters of tag and paginate here?
}

//fetching by slug
export const fetchBlogBySlug = async (slug) => {
  const response = await api.get(`/posts/${slug}`)
  return response.data
}

//fetching by tag

export const fetchBlogByTag = async (tag) => {
  const response = await api.get('/posts', {
    params: {
      tag,
    },
  })

  return response.data
}
