import React from "react";
import TextField from "@mui/material/TextField";
import InstagramIcon from "@mui/icons-material/Instagram";
import InputAdornment from "@mui/material/InputAdornment";
import { useTrainerContext } from "../../ContextProvider/TrainerContext";

const TrainerFirst = () => {
  const { name, setName, location, setLocation, expYear, setExpYear, title, setTitle, priceRange, setPriceRange, line, setLine, insta, setInsta,
    firstTime, setFirstTime, secondTime, setSecondTime, thirdTime, setThirdTime, experience, setExperience, goalInTime, setGoalInTime, description, setDescription,
    trainingMethod, setTrainingMethod, userData, certOne,certTwo,certThree,setCertOne,setCertTwo,setCertThree
  } = useTrainerContext();

  return (
    <div className="flex flex-col space-y-4 ">
      <p className="text-xl ">第一步：建立個人資訊</p>
      <div className="border border-gray-500 p-4 rounded-xl bg-white space-y-3 ">
        <p className="text-lg ">一目了然您的專業、地點、時間及課程費用</p>
        <div className="flex space-x-10">
          <TextField
            id="standard-basic"
            label="名字/暱稱"
            variant="standard"
            className=" w-[350px]"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              localStorage.setItem('Name', e.target.value)
            }}
            InputLabelProps={{ shrink: name.length > 0 }}
          />

          <TextField
            id="standard-basic"
            label="專業及職稱 (瑜珈自由教練/健身教練 at 健身工廠 )"
            variant="standard"
            className=" w-[400px]"
            value={title}
            onChange={(e) => {
              const inputText = e.target.value;
              if (inputText.length <= 15) {
                setTitle(inputText);
              } else return;
            }}
            InputLabelProps={{ shrink: title.length > 0 }}
          />
          <TextField
            id="standard-basic"
            label="職業年數"
            variant="standard"
            className=" w-[340px]"
            value={expYear}
            onChange={(e) => {
              const inputText = e.target.value;
              if (inputText.length <= 2) {
                setExpYear(inputText);
              } else return;
            }}
            InputLabelProps={{ shrink: expYear.length > 0 }}
            InputProps={{
              endAdornment:(
                <InputAdornment position="end">年</InputAdornment>
              )
            }}
          />
          <TextField
            id="standard-basic"
            label="教學地點(可線上諮詢)"
            variant="standard"
            className=" w-[340px]"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            InputLabelProps={{ shrink: location.length > 0 }}
          />
          <TextField
            id="standard-basic"
            label="價錢範圍"
            variant="standard"
            className=" w-[300px]"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
              endAdornment:(
                <InputAdornment position="end">hr</InputAdornment>
              )
            }}
            value={priceRange}
            onChange={(e) => {
              setPriceRange(e.target.value)
            }}
          />
        </div>
      </div>

      <div className=" border border-gray-500 p-4 rounded-xl bg-white space-y-2">
        <p className="text-lg">聯絡方式</p>
        <div className="flex space-x-10">
          <TextField
            id="standard-basic"
            label="LINE 連結"
            variant="standard"
            className=" w-[380px]"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#00c300"
                      d="M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z M18.875,25.907h-2.604c-0.379,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687c0.379,0,0.687,0.308,0.687,0.687v4.521h1.917c0.379,0,0.687,0.308,0.687,0.687C19.562,25.598,19.254,25.907,18.875,25.907z M21.568,25.219c0,0.379-0.308,0.688-0.687,0.688s-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687s0.687,0.308,0.687,0.687V25.219z M27.838,25.219c0,0.297-0.188,0.559-0.47,0.652c-0.071,0.024-0.145,0.036-0.218,0.036c-0.215,0-0.42-0.103-0.549-0.275l-2.669-3.635v3.222c0,0.379-0.308,0.688-0.688,0.688c-0.379,0-0.688-0.308-0.688-0.688V20.01c0-0.296,0.189-0.558,0.47-0.652c0.071-0.024,0.144-0.035,0.218-0.035c0.214,0,0.42,0.103,0.549,0.275l2.67,3.635V20.01c0-0.379,0.309-0.687,0.688-0.687c0.379,0,0.687,0.308,0.687,0.687V25.219z M32.052,21.927c0.379,0,0.688,0.308,0.688,0.688c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23h1.917c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.309,0.688-0.688,0.688h-2.604c-0.378,0-0.687-0.308-0.687-0.688v-2.603c0-0.001,0-0.001,0-0.001c0,0,0-0.001,0-0.001v-2.601c0-0.001,0-0.001,0-0.002c0-0.379,0.308-0.687,0.687-0.687h2.604c0.379,0,0.688,0.308,0.688,0.687s-0.308,0.687-0.688,0.687h-1.917v1.23H32.052z"
                    ></path>
                  </svg>
                </InputAdornment>
              ),
            }}
            value={line}
            onChange={(e) => {
              setLine(e.target.value)
            }}
          />
          <TextField
            id="standard-basic"
            label="IG 連結"
            variant="standard"
            className=" w-[380px]"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InstagramIcon color="primary" />
                </InputAdornment>
              ),
            }}
            value={insta}
            onChange={(e) => {
              setInsta(e.target.value)
            }}
          />
        </div>
      </div>
      <div className=" border border-gray-500 p-4 rounded-xl bg-white space-y-4">
        <p className="text-lg">每週可預約時段 (例：週二 15:00 - 18:00)</p>
        <div className="flex space-x-10">
          <TextField
            id="standard-basic"
            label="第一個時段"
            variant="standard"
            className=" w-[380px]"
            value={firstTime}
            onChange={(e) => {
              const inputText = e.target.value;
              if (inputText.length <= 17) {
                setFirstTime(e.target.value)
              } else {
                setFirstTime(inputText.slice(0, 17))
              }
            }}
          />
          <TextField
            id="standard-basic"
            label="第二個時段"
            variant="standard"
            className=" w-[380px]"
            value={secondTime}
            onChange={(e) => {
              const inputText = e.target.value;
              if (inputText.length <= 17) {
                setSecondTime(e.target.value)
              } else {
                setSecondTime(inputText.slice(0, 17))
              }
            }}
          />
          <TextField
            id="standard-basic"
            label="第三個時段"
            variant="standard"
            className=" w-[380px]"
            value={thirdTime}
            onChange={(e) => {
              const inputText = e.target.value;
              if (inputText.length <= 17) {
                setThirdTime(e.target.value)
              } else {
                setThirdTime(inputText.slice(0, 17))
              }
            }}
          />
        </div>
      </div>
      <div className=" border border-gray-500 p-4 rounded-xl bg-white space-y-4">
        <p className="text-lg">專業證照</p>
        <div className="flex space-x-10">
          <TextField
            id="standard-basic"
            label="證照1"
            variant="standard"
            className=" w-[380px]"
            value={certOne}  
            onChange={(e) => {
              setCertOne(e.target.value)
            }}
          />
          <TextField
            id="standard-basic"
            label="證照2"
            variant="standard"
            className=" w-[380px]"
            value={certTwo}  
            onChange={(e) => {
              setCertTwo(e.target.value)
            }}
          />
          <TextField
            id="standard-basic"
            label="證照3"
            variant="standard"
            className=" w-[380px]"
            value={certThree}  
            onChange={(e) => {
              setCertThree(e.target.value)
            }}
          />
        </div>
      </div>
            
      <div className=" border border-gray-500 p-4 rounded-xl bg-white space-y-4">
        <p className="text-lg">帶給學員什麼價值</p>
        <div className="space-y-5">
          <TextField
            id="standard-basic"
            label="自我介紹及訓練經歷"
            multiline
            rows={4}
            variant="outlined"
            className=" w-4/5"
            value={experience}
            onChange={(e) => {
              const inputText = e.target.value;
              if (inputText.length <= 150) {
                setExperience(e.target.value)
              } else {
                setExperience(inputText.slice(0, 150));
              }
            }}
          />

          <TextField
            id="standard-basic"
            label="學生遇到什麼「問題」，你用了什麼「方式」幫忙解決"
            multiline
            rows={4}
            variant="outlined"
            className=" w-4/5"
            value={goalInTime}
            onChange={(e) => {
              const inputText = e.target.value;
              if (inputText.length <= 150) {
                setGoalInTime(e.target.value)
              } else {
                setGoalInTime(inputText.slice(0, 150));
              }
            }}
          />
        </div>
        <div className=" space-y-5">
        <TextField
            id="standard-basic"
            label="我能如何幫助學生改善生活"
            className=" w-4/5"
            multiline
            rows={3}
            variant="outlined"
            value={trainingMethod}
            onChange={(e) => {
              const inputText = e.target.value;
              if (inputText.length <= 150) {
                setTrainingMethod(e.target.value)
              } else {
                setTrainingMethod(inputText.slice(0, 150));
              }
            }}
          />
          {/* <TextField
            id="standard-basic"
            label="學生都怎麼形容我"
            className=" w-4/5"
            multiline
            rows={3}
            variant="outlined"
            value={description}
            onChange={(e) => {
              const inputText = e.target.value;
              if (inputText.length <= 100) {
                setDescription(e.target.value)
              } else {
                setDescription(inputText.slice(0, 100));
              }
            }}
          /> */}

        </div>
      </div>
    </div>
  );
};

export default TrainerFirst;
