import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetFormData } from "../reducer/slices/formSlice";
import { setformData, setImageData } from "../reducer/slices/formSlice";
import img from "../assets/logo.jpg";
import "../index.css"
function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Customername: "",
    Projectnumber: "",
    Projectmanager: "",
    LeadEngineer: "",
    Siteincharge: "",
    PreparedBy: "",
    Date: "",
    Day: "",
    Engg1: "",
    WH1: "",
    IH1: "",
    Engg2: "",
    WH2: "",
    IH2: "",
    Engg3: "",
    WH3: "",
    IH3: "",
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    text5: "",
    text6: "",
    text7: "",
    text8: "",
    text9: "",
    text10: "",
    text11: "",
    text12: "",
    text13: "",
    text14: "",
    text15: "",
    file1: "",
    file2: "",
    file3: "",
    file4: "",
    file5: "",
    file6: "",
    file7: "",
    file8: "",
    file9: "",
    file10: "",
    file11: "",
    file12: "",
    file13: "",
    file14: "",
    file15: "",
    actionplan1: "",
    actionplan2: "",
    actionplan3: "",
    email: "",
    password: "",
    address: "",
    files: {}

  });

  const { Customername, Projectnumber, Projectmanager, LeadEngineer, Siteincharge, PreparedBy, Date, email, Day,
    Engg1, WH1, IH1, Engg2, WH2, IH2, Engg3, WH3, IH3, text1, text2, text3, text4, text5,
    text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, file1, file2, file3, file4, file5, file6,
    file7, file8, file9, file10, file11, file12, file13, file14, file15, actionplan1, actionplan2, actionplan3, password, address, files } = formData;


  const resetHandler = () => {
    // Define the initial state for your form data here
    const initialFormData = {
      Customername: "",
      Projectnumber: "",
      Projectmanager: "",
      LeadEngineer: "",
      Siteincharge: "",
      PreparedBy: "",
      Date: "",
      Day: "",
      Engg1: "",
      WH1: "",
      IH1: "",
      Engg2: "",
      WH2: "",
      IH2: "",
      Engg3: "",
      WH3: "",
      IH3: "",
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      text11: "",
      text12: "",
      text13: "",
      text14: "",
      text15: "",
      file1: "",
      file2: "",
      file3: "",
      file4: "",
      file5: "",
      file6: "",
      file7: "",
      file8: "",
      file9: "",
      file10: "",
      file11: "",
      file12: "",
      file13: "",
      file14: "",
      file15: "",
      actionplan1: "",
      actionplan2: "",
      actionplan3: "",
      email: "",
      password: "",
      address: "",
      files: {},
    };

    // Dispatch the action to reset the form data
    dispatch(resetFormData());

    // Update the local state with the initial form data
    setFormData(initialFormData);
  };



  const ImageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const newFiles = { ...files };
        console.log(newFiles);
        newFiles[e.target.name] = 1; // Mark the file as uploaded
        dispatch(setImageData(reader.result));
        setFormData((prevData) => ({
          ...prevData,
          files: newFiles,
        }));
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleonChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(setformData(formData));
    navigate("/template");
  };

  const state = useSelector((state) => state.form);
  // console.log(state);

  return (

    <div className="main-page">
      <div className="main-page-container">
        <img src={img} className="logo" alt="logo" />
        <h1 className="header">Site Report</h1>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="">
              <h4>1. Project/Customer Name : </h4>
              <input
                type="text"
                required
                placeholder="Enter Customer Name"
                name="Customername"
                value={Customername}
                onChange={handleonChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="">
              <h4>2. Project Number: </h4>
              <input
                type="text"
                required
                placeholder="Enter Project Number"
                name="Projectnumber"
                value={Projectnumber}
                onChange={handleonChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="">
              <h4>3. Project Manager: </h4>
              <input
                type="text"
                required
                placeholder="Enter Project Manager"
                name="Projectmanager"
                value={Projectmanager}
                onChange={handleonChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="">
              <h4>4. Lead Engineer: </h4>
              <input
                type="text"
                required
                placeholder="Enter Lead Engineer"
                name="LeadEngineer"
                value={LeadEngineer}
                onChange={handleonChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="">
              <h4>5. Site In Charge: </h4>
              <input
                type="text"
                required
                placeholder="Enter the Site in Charge"
                name="Siteincharge"
                value={Siteincharge}
                onChange={handleonChange}
              />
            </label>

          </div>

          <div>
            <label htmlFor="">
              <h4>6. Prepared By: </h4>
              <input
                type="text"
                required
                placeholder="Prepared By:"
                name="PreparedBy"
                value={PreparedBy}
                onChange={handleonChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="">
              <h4>7. Date</h4>
              <input
                type="date"
                // required
                name="Date"
                value={Date}
                onChange={handleonChange}
              />
            </label>
          </div>


          <div>
            <label htmlFor="">
              <h4>8. Day: </h4>
              <input
                type="text"
                // required
                placeholder="Enter Day:"
                name="Day"
                value={Day}
                onChange={handleonChange}
              />
            </label>
          </div>

          <div>
            <h4>9. Engineers at site </h4>
            <label htmlFor="">

              <input
                type="text"
                // required
                placeholder="Name of first Engg:"
                name="Engg1"
                value={Engg1}
                onChange={handleonChange}
              />

              <input
                type="text"
                // required
                placeholder="Working hours:"
                name="WH1"
                value={WH1}
                onChange={handleonChange}
              />

              <input
                type="text"
                // required
                placeholder="Idle hours:"
                name="IH1"
                value={IH1}
                onChange={handleonChange}
              />
            </label>
          </div>


          <div>
            <label htmlFor="">

              <input
                type="text"
                // required
                placeholder="Name of second Engg:"
                name="Engg2"
                // value={Engg2}
                onChange={handleonChange}
              />

              <input
                type="text"
                // required
                placeholder="Working hours:"
                name="WH2"
                value={WH2}
                onChange={handleonChange}
              />

              <input
                type="text"
                // required
                placeholder="Idle hours:"
                name="IH2"
                value={IH2}
                onChange={handleonChange}
              />
            </label>

          </div>

          <div>
            <label htmlFor="">

              <input
                type="text"
                // required
                placeholder="Name of third Engg:"
                name="Engg3"
                value={Engg3}
                onChange={handleonChange}
              />

              <input
                type="text"
                // required
                placeholder="Working hours:"
                name="WH3"
                value={WH3}
                onChange={handleonChange}
              />

              <input
                type="text"
                // required
                placeholder="Idle hours:"
                name="IH3"
                value={IH3}
                onChange={handleonChange}
              />
            </label>
          </div>

          <div>
            <h4>10. Summary of workdone</h4>
            <label htmlFor="">
              <textarea name="text1" id="text1" cols="75" rows="2" placeholder="First Point" value={text1}
                onChange={handleonChange}></textarea>
              <br></br>
              <input
                type="file"
                name="file1"
                id="fileInput1"
                disabled={files["file1"] === 1}
                onChange={(e) => ImageHandler(e)}
              />

            </label>
            <br></br>
            <br></br>
            <label htmlFor="">
              <textarea name="text2" id="text2" cols="75" rows="2" placeholder="Second Point" value={text2}
                onChange={handleonChange}></textarea>
              <br></br>
              <input type="file" name="file2" disabled={files["file2"] === 1} onChange={ImageHandler} />

            </label>
            <br></br>
            <br></br>
            <label htmlFor="">
              <textarea name="text3" id="text3" cols="75" rows="2" placeholder="Third Point" value={text3}
                onChange={handleonChange}></textarea>
              <br></br>
              <input type="file" name="file3" disabled={files["file3"] === 1} onChange={ImageHandler} />

            </label>
            <br></br>
            <br></br>
            <label htmlFor="">
              <textarea name="text4" id="text4" cols="75" rows="2" placeholder="Fourth Point" value={text4}
                onChange={handleonChange}></textarea>
              <br></br>
              <input type="file" name="file4" disabled={files["file4"] === 1} onChange={ImageHandler} />

            </label>
            <br></br>
            <br></br>
            <label htmlFor="">
              <textarea name="text5" id="text5" cols="75" rows="2" placeholder="Fifth Point" value={text5}
                onChange={handleonChange}></textarea>
              <br></br>
              <input type="file" name="file5" disabled={files["file5"] === 1} onChange={ImageHandler} />

            </label>
            <br></br>
            <br></br>
            <label htmlFor="">
              <textarea name="text6" id="text6" cols="75" rows="2" placeholder="Sixth Point" value={text6}
                onChange={handleonChange}></textarea>
              <br></br>
              <input type="file" name="file6" disabled={files["file6"] === 1} onChange={ImageHandler} />

            </label>
            <br></br>
            <br></br>
            <label htmlFor="">
              <textarea name="text7" id="text7" cols="75" rows="2" placeholder="Seventh Point" value={text7}
                onChange={handleonChange}></textarea>
              <br></br>
              <input type="file" name="file7" disabled={files["file7"] === 1} onChange={ImageHandler} />

            </label>
            <br></br>
            <br></br>
            <label htmlFor="">
              <textarea name="text8" id="text8" cols="75" rows="2" placeholder="Eighth Point" value={text8}
                onChange={handleonChange}></textarea>
              <br></br>
              <input type="file" name="file8" disabled={files["file8"] === 1} onChange={ImageHandler} />

            </label>
            <br></br>
            <br></br>
            <label htmlFor="">
              <textarea name="text9" id="text9" cols="75" rows="2" placeholder="Nineth Point" value={text9}
                onChange={handleonChange}></textarea>
              <br></br>
              <input type="file" name="file9" disabled={files["file9"] === 1} onChange={ImageHandler} />

            </label>
            <br></br>
            <br></br>
            <label htmlFor="">
              <textarea name="text10" id="text10" cols="75" rows="2" placeholder="Tenth Point" value={text10}
                onChange={handleonChange}></textarea>
              <br></br>
              <input type="file" name="file10" disabled={files["file10"] === 1} onChange={ImageHandler} />

            </label>
            <br></br>
            <br></br>
            <label htmlFor="">
              <textarea name="text11" id="text11" cols="75" rows="2" placeholder="Eleventh Point" value={text11}
                onChange={handleonChange}></textarea>
              <br></br>
              <input type="file" name="file11" disabled={files["file11"] === 1} onChange={ImageHandler} />

            </label>
            <br></br>
            <br></br>
            <label htmlFor="">
              <textarea name="text12" id="text12" cols="75" rows="2" placeholder="Twelveth Point" value={text12}
                onChange={handleonChange}></textarea>
              <br></br>
              <input type="file" name="file12" disabled={files["file12"] === 1} onChange={ImageHandler} />

            </label>
            <br></br>
            <br></br>
            <label htmlFor="">
              <textarea name="text13" id="text13" cols="75" rows="2" placeholder="Thirtheenth Point" value={text13}
                onChange={handleonChange}></textarea>
              <br></br>
              <input type="file" name="file13" disabled={files["file13"] === 1} onChange={ImageHandler} />

            </label>
            <br></br>
            <br></br>
            <label htmlFor="">
              <textarea name="text14" id="text14" cols="75" rows="2" placeholder="Fourtheenth Point" value={text14}
                onChange={handleonChange}></textarea>
              <br></br>
              <input type="file" name="file14" disabled={files["file14"] === 1} onChange={ImageHandler} />

            </label>
            <br></br>
            <br></br>
            <label htmlFor="">
              <textarea name="text15" id="text15" cols="75" rows="2" placeholder="Fifteenth Point" value={text15}
                onChange={handleonChange}></textarea>
              <br></br>
              <input type="file" name="file15" disabled={files["file15"] === 1} onChange={ImageHandler} />

            </label>
            <br></br>
            <br></br>

          </div>
          <div>
            <h4>11. Action Plan/Next Day Activity</h4>
            <label htmlFor="">
              <textarea name="actionplan1" id="actionplan1" cols="75" rows="2" placeholder="First Point" value={actionplan1}
                onChange={handleonChange}></textarea>
              <br></br>
              <textarea name="actionplan2" id="actionplan2" cols="75" rows="2" placeholder="Second Point" value={actionplan2}
                onChange={handleonChange}></textarea>
              <br />
              <textarea name="actionplan3" id="actionplan3" cols="75" rows="2" placeholder="Third Point" value={actionplan3}
                onChange={handleonChange}></textarea>
            </label>
            <br></br>
            <br></br>

          </div>

          <div className="btn">
          <button type="submit"> Submit </button>
          <button onClick={resetHandler} >Reset</button>
          </div>
        </form>

      </div>

    </div>

  );
}

export default Home;
