import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
const myUrl = "http://localhost:3010/api/v1/categories";
const createCat = async (x) => {
  const res = await axios({
    url: `${myUrl}`,
    method: "post",
    data: x,
  });
  return res.data;
};
const Product = () => {
  const queryClient = useQueryClient();

  const [title, settitle] = useState("");
  const mutation = useMutation({
    mutationFn: createCat,
    onMutate: (data) => {
      // queryClient.refetchQueries({ queryKey: ["cats"] });
      // queryClient.invalidateQueries({ queryKey: ["cats"] });
    },
    onSuccess: (data) => {
      queryClient.refetchQueries({ queryKey: ["cats"] });
      // queryClient.invalidateQueries({ queryKey: ["cats"] });
    },
  });
  const { data } = useQuery({
    queryFn: () => axios.get(`${myUrl}`),
    queryKey: ["cats"],
  });

  const addCategoryHandler = () => {
    // console.log(title);
    mutation.mutate({
      name: title,
    });
  };
  // console.log(data);
  return (
    <div>
      {data?.data.data.map((el, index) => (
        <div key={`cat-${index}`}>{el.name}</div>
      ))}
      <div>
        <input onChange={(e) => settitle(e.target.value)} value={title} />
        <button onClick={addCategoryHandler}>Create</button>
      </div>
    </div>
  );
};

export default Product;
