import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetFormData } from "../reducer/slices/formSlice";
import "../App.css";
function Template() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.form);
  const { ImageData } = useSelector((state) => state.form);

  const data = formData[0];
  const imgUrl = ImageData;
  console.log(data);
  console.log(ImageData);

  const HandleonClick = () => {
    window.print();
  };

  const HandleBack = () => {
    dispatch(resetFormData());
    navigate("/");
  };

  return (
    <div>
      <h2>Site Report</h2>
      <div>
        {/* <p>Name Of the Applicent is {data?.name} </p> */}
        <table >
          <tr>
            <td>Project/Customer Name:</td>
            <td>{data?.Customername}</td>
            <td>Site In Charge</td>
            <td>Prepared By</td>
          </tr>
          <tr>
            <td>Project Number</td>
            <td>{data?.Projectnumber}</td>
            <td rowSpan="3">{data?.Siteincharge}</td>
            <td rowSpan="3">{data?.PreparedBy}</td>
          </tr>
          <tr>
            <td>Project Manager</td>
            <td>{data?.Projectmanager}</td>
          </tr>
          <tr>
            <td>Lead Engineer</td>
            <td>{data?.LeadEngineer}</td>
          </tr>
        </table>
      </div>
      <div>
        <p><strong>Date: {data?.Date}</strong></p>
        <p><strong>Day: {data?.Day}</strong></p>
        
      </div>

    <div>
      <p><strong>Engineers at Site: </strong></p>
      <table >
        <thead>
          <th>SR:No</th>
          <th>Name of the Engineer</th>
          <th>Working Hours</th>
          <th>Idle Hours</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{data?.Engg1}</td>
            <td>{data?.WH1}</td>
            <td>{data?.IH1}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{data?.Engg2}</td>
            <td>{data?.WH2}</td>
            <td>{data?.IH2}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{data?.Engg3}</td>
            <td>{data?.WH3}</td>
            <td>{data?.IH3}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
      <div>
        <p>Summary Of Work Done</p>
        <p>1.{data?.text1}</p>
        <img width={600} height={300} src={imgUrl?.[0]} alt="" />

        <p>2.{data?.text2}</p>
        <img width={600} height={300} src={imgUrl?.[1]} alt="" />

        <p>3.{data?.text3}</p>
        <img width={600} height={300} src={imgUrl?.[2]} alt="" />

        <p>4.{data?.text4}</p>
        <img width={600} height={300} src={imgUrl?.[3]} alt="" />

        <p>5.{data?.text5}</p>
        <img width={600} height={300} src={imgUrl?.[4]} alt="" />

        <p>6.{data?.text6}</p>
        <img width={600} height={300} src={imgUrl?.[5]} alt="" />

        <p>7.{data?.text7}</p>
        <img width={600} height={300} src={imgUrl?.[6]} alt="" />

        <p>8.{data?.text8}</p>
        <img width={600} height={300} src={imgUrl?.[7]} alt="" />

        <p>9.{data?.text9}</p>
        <img width={600} height={300} src={imgUrl?.[8]} alt="" />

        <p>10.{data?.text10}</p>
        <img width={600} height={300} src={imgUrl?.[9]} alt="" />

        <p>11.{data?.text11}</p>
        <img width={600} height={300} src={imgUrl?.[10]} alt="" />

        <p>12.{data?.text12}</p>
        <img width={600} height={300} src={imgUrl?.[11]} alt="" />

        <p>13.{data?.text13}</p>
        <img width={600} height={300} src={imgUrl?.[12]} alt="" />

        <p>14.{data?.text14}</p>
        <img width={600} height={300} src={imgUrl?.[13]} alt="" />

        <p>15.{data?.text15}</p>
        <img width={600} height={300} src={imgUrl?.[14]} alt="" />

      </div>

      <div>
        <p></p>
      </div>
      {/* <div>
        <img width={100} height={100} src={imgUrl?.[0]} alt="" />
      </div>
      <div>
        <p>Email is {data?.email} </p>
      </div>
      <div>
        <p>address is {data?.address} </p>
      </div>
      <div>
        <img width={100} height={100} src={imgUrl?.[1]} alt="" />
      </div> */}
      <button onClick={HandleonClick}> Print </button>
      <button onClick={HandleBack}>Back</button>
    </div>
  );
}

export default Template;
