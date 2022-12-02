import React from "react";
import Header from "./Header";
import "../src/css/Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faCircleInfo,
  faCube,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import storage from "fbase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
} from "firebase/storage";

function Resume(props) {
  // State to store uploaded file

  const inputRef = useRef(null); // 특정 대상에 접근해서 바꾸고 싶을 때

  // progress
  const [percent, setPercent] = useState(0);

  // Handles input change event and updates state

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (!file) {
      alert("Please choose a file first!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  // Create a reference under which you want to list
  const listRef = ref(storage, "files.uid");

  // Find all the prefixes and items.
  listAll(listRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        // All the prefixes under listRef
        // You may call listAll() recursively on them
      });
      res.items.forEach((itemRef) => {
        //All the items under listRef
      });
    })
    .catch((error) => {
      // an error occurred
    });

  return (
    <>
      <Header />
      <div className="main">
        <div className="resumeMainWrapper">
          <aside className="asideBtnWrapper">
            <picture>
              <source
                src="https://static.wanted.co.kr/career_connect/banner-back-pc-common.webp"
                type="image/webp"
              />
              <img
                src="https://static.wanted.co.kr/career_connect/banner-back-pc-common.png"
                alt="career-connect-icon"
              />
            </picture>
            <button className="carrerConnectBannerBtn">
              <div className="carrerConnectBannerBtnTitle">
                <p>이력서 작성이 쉬워진다! 1분 만에 채워지는 경력정보</p>
                <strong>내 경력 불러오기</strong>
                <picture>
                  <source
                    src="https://static.wanted.co.kr/career_connect/trio.webp"
                    type="image/webp"
                  />
                  <img
                    src="https://static.wanted.co.kr/career_connect/trio.png"
                    alt="career-connect-icon"
                  />
                </picture>
              </div>
            </button>
          </aside>
          <div className="resumeHeader">
            <h4>최근 문서</h4>
            <a href="#">
              <span>원티드 이력서 소개&nbsp;</span>
              <FontAwesomeIcon icon={faCircleInfo} />
            </a>
          </div>
          <div className="resumeListWrapper">
            <div className="resumeListItem">
              <div className="resumeListAddItem">
                <div className="resumeListAddItemIconWrite">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </div>
                <p>새 이력서 작성</p>
              </div>
            </div>
            <div className="resumeListItem">
              <div className="resumeListAddItem">
                <div
                  className="resumeListAddItemIconUpload"
                  onClick={handleClick}
                >
                  <input
                    type="file"
                    accept="/image/*"
                    onChange={handleUpload}
                    className="uploadInput"
                    ref={inputRef}
                  />
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                </div>
                <p>{percent} % done</p>
                <p>파일 업로드</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
