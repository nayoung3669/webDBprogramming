import PostListItem from "../../components/main/PostListItem";
import { useCallback, useEffect, useState } from "react";
import { getPosts } from "../../api/post";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "../../components/common/";
import { useNavigate } from "react-router-dom";
import { PostsQueryKey, usePostsQuery } from "../../hooks/apis/usePostsQuery";
import PostListContainerBlock from "./PostListContainer.style";

const PostListContainer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const SIZE = 8; //constant 파일 생성해서 동일한 경로로 (main > postlist) 빼놓고 import로 사용

  //리턴 문 전에 훅 사용
  const onClickHandler = useCallback((id) => {
    navigate(`/post/${id}`);
  }, []);

  const { data, isLoading, isError } = usePostsQuery(SIZE, currentPage);

  useEffect(() => {
    if (data) {
      setMaxPage(data?.data.totalPages);
    }
  }, [data]);

  useEffect(() => {
    if (currentPage <= maxPage - 1) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery([PostsQueryKey, currentPage], nextPage, () => {
        getPosts(SIZE, nextPage);
      });
    }
  }, [currentPage, queryClient]);

  const onIncreasePage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const onDecreasePage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  if (!data) {
    return <div>Loading..</div>;
  }

  if (isError) return <h3>ERROR!</h3>;
  if (isLoading) return <h3>ERROR!</h3>;

  return (
    <PostListContainerBlock>
      <h1>20평대 활용하기 좋은 템 BEST 👍</h1>
      <ul className="postsContainer">
        {data.data.content?.map((post) => (
          <li key={post.postId} onClick={() => onClickHandler(post.postId)}>
            <PostListItem post={post} />
          </li>
        ))}
      </ul>
      <div className="pagination">
        <Button
          size={"xsmall"}
          disabled={currentPage <= 0}
          onClick={onDecreasePage}>
          <FaChevronLeft />
        </Button>
        <div className="pages">{`${currentPage + 1}/${maxPage}`}</div>
        <Button
          size={"xsmall"}
          disabled={currentPage >= maxPage - 1}
          onClick={onIncreasePage}>
          <FaChevronRight />
        </Button>
      </div>
    </PostListContainerBlock>
  );
};

export default PostListContainer;
