import React, { useEffect } from "react";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Avatar , Badge } from "antd";
import { cloudImageUpload , cloudImageRemove } from "../../action/cloud.action";
import { UserOutlined } from '@ant-design/icons';

const FileUpload = ({ values, setValues, setLoading }) => {
  const dispatch = useDispatch()
  
  const { cloudImageUploaded , cloudImageRemoved } = useSelector((state) => {
      return state.cloud
  });
  let allUploadedFiles = values.images;

  const handleImageRemove = (public_id) => {
    dispatch(cloudImageRemove({public_id}))
    const { images } = values
    let filteredImages = images.filter((item) => {
        return item.public_id !== public_id
    })
    setValues({ ...values, images: filteredImages });
  }
  const fileUploadAndResize = (e) => {
    let files = e.target.files; // 3

    if (files) {
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
           //console.log(uri);
            dispatch(cloudImageUpload({ image : uri}))
          },
          "base64"
        );
      }
    }
  };
  useEffect(() => {
     if(!cloudImageUploaded) {
       return
     }
     allUploadedFiles.push(cloudImageUploaded.data)
     setValues({ ...values, images: allUploadedFiles });
  },[cloudImageUploaded])
  useEffect(() => {
    if(!cloudImageRemoved) {
      return
    }
  },[cloudImageRemoved])
  return (
    <>
      <div className="row">
        {values.images &&
          values.images.map((image) => (
            <div
              count="X"
              key={image.public_id}
              onClick={() => handleImageRemove(image.public_id)}
              style={{ cursor: "pointer" }}
              className="btn"
            >REMOVE
            <img
              key={image.public_id}
              src={image.url}
              name="image"
              style={{"width" : "100px", "height" : "100px" }}
              className="ml-3 p-3"
            />
            </div>
          ))}
      </div>
      <div className="row">
        <label className="btn btn-primary">
          Choose File
          <input
            type="file"
            multiple
            hidden
            accept="images/*"
            onChange={fileUploadAndResize}
          />
        </label>
      </div>
    </>
  );
};

export default FileUpload;
