import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
const Index = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photo);
  return (
    <div>
      {photos.map((photo) => (
        <Button type="primary">{photo.id}</Button>
      ))}
    </div>
  );
};

export default Index;
