import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  return currentPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am travelling to Mumbai for the vacation.Hope to enjoy alot. :)",
    reactions: 0,
    userId: "9",
    tags: ["Vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass hogye bhai",
    body: "4 Saal ki masti ke baad bhi hogye hai pass",
    reactions: 15,
    userId: "12",
    tags: ["Graduating", "Unbelievable"],
  },
];
export default PostListProvider;
