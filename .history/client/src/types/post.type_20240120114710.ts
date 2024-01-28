import { FormPost } from '~/pages/CreatePostPage/CreatePost'

export interface Post extends FormPost {
  medias: string[]
}
