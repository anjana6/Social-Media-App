import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postAction } from '../../Action/postAction';

const CreatePost = () => {
  const history = useHistory();

  const [title, SetTitle] = useState('');
  const [body, SetBody] = useState('');
  const [image, SetImage] = useState('');
  const [url, SetUrl] = useState('');

  const dispatch = useDispatch();

  const PostDetails = () => {
    const data = new FormData();
    data.append('file', image);

    data.append('upload_preset', 'insta-clone');
    data.append('cloud_name', 'ddeg8sl19');
    fetch('https://api.cloudinary.com/v1_1/ddeg8sl19/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        SetUrl(data.url);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log({ title, body, image, url });
    dispatch(postAction({ title, body, image, url }));

    //  fetch("http://localhost:5000/post/createpost", {
    //         method: "post",
    //         headers: {
    //            "Content-Type": "application/json",
    //            "Authorization": "Bearer "+ localStorage.getItem("jwt")
    //         },
    //        body: JSON.stringify({
    //                title,
    //                body,
    //                url
    //        })
    //    }).then(res => res.json())
    //        .then(data =>{
    //           if(data.error){
    //            M.toast({html: data.error, classes:"#c62828 red darken-3" })
    //         } else {
    //            M.toast({html: "Created post success", classes:'#76ff03 light-green accent-3'})
    //           history.push('/')
    //     }
    //   }).catch(error => {
    //     console.log(error)
    //  })
  };

  return (
    <div
      className='card input-field'
      style={{
        margin: '30px auto',
        maxWidth: '500px',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <input
        type='text'
        value={title}
        onChange={(e) => {
          SetTitle(e.target.value);
        }}
        placeholder='title'
      />
      <input
        type='text'
        value={body}
        onChange={(e) => {
          SetBody(e.target.value);
        }}
        placeholder='body'
      />
      <div className='file-field input-field'>
        <div className='btn'>
          <span>Upload Image</span>
          <input type='file' onChange={(e) => SetImage(e.target.files[0])} />
        </div>
        <div className='file-path-wrapper'>
          <input className='file-path validate' type='text' />
        </div>
      </div>

      <button
        onClick={() => PostDetails()}
        className='btn waves-effect waves-light #64b5f6 blue darken-1'
      >
        Submit
      </button>
    </div>
  );
};

export default CreatePost;
