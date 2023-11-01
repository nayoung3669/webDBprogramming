import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, getPost, likePost, updatePost } from "../../api/post";
import { PostsQueryKey } from "./usePostsQuery";

export const PostQueryKey = "post";
//게시물 가져오기
export const usePostQuery = (postId) => {
  return useQuery([PostQueryKey, postId], () => getPost(postId), {
    enabled: !!postId,
    staleTime: 3000, // 이후 언마운팅됨
    //react query 라이프 사이클 -> caching time 설정 (time 지나면 garbage collector로) ->짧을수록 api 요청이 잦음
    keepPreviousData: true,
  });
};

//react suspense / errpr

//게시물 수정
export const useUpdatePostMutation = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(updatePost, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([PostQueryKey]); //setQueryData 사용하기 (서버에서 전체 다시 가져오지 않음 -> 다음 네트워크 요청을 기다릴 필요 없이 즉각적으로 변화 반영됨 -> ux 향상)
    },
  });
  return mutate;
};

//게시물 삭제
export const useDeletePostMutation = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(deletePost, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([PostsQueryKey]); //전체 포스트 조회 query key로 invalidate ("/")
    },
  });
  return mutate;
};

//게시물 좋아요
export const useLikePostMutation = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(likePost, {
    onSuccess: () => {
      queryClient.invalidateQueries([PostQueryKey]);
    },
  });
  return mutate;
};
