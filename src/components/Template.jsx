import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetFormData } from "../reducer/slices/formSlice";
import img from "../assets/logo.jpg";
import "../App.css";
function Template() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.form);
  const { ImageData } = useSelector((state) => state.form);

  const data = formData[0];
  const imgUrl = ImageData;
  // console.log(data)
  // console.log(data);
  // console.log(ImageData);

  const HandleonClick = () => {
    window.print();
  };

  const HandleBack = () => {
    alert("All The Data will be Reset")
    dispatch(resetFormData());
    navigate("/");
  };

  return (
    <div className="Template">

      <div className="Template-container">
        <div className="header">
          <img src={img} className="logo" alt="logo" />
          <h2>Site Report</h2>
        </div>

        <div>
          {/* <p>Name Of the Applicent is {data?.name} </p> */}
          <table >
            <thead>
              <th>Project/Customer Name:</th>
              <th>{data?.Customername}</th>
              <th>Site In Charge</th>
              <th>Prepared By</th>
            </thead>
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
          <p><strong>Date:</strong> {data?.Date}</p>
          <p><strong>Day:</strong> {data?.Day}</p>

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
        <div className="Summary-container">
          <h2 className="Summary">Summary Of Work Done</h2>
          {data?.text1 && <div ><p className="content-image">1. {data?.text1}</p></div>}
          {imgUrl?.[0] && <img width={600} height={300} src={imgUrl?.[0]} alt="img" loading="lazy" />}

          {data?.text2 && <div><p className="content-image">2. {data?.text2}</p></div>}
          {imgUrl?.[1] && <img width={600} height={300} src={imgUrl?.[1]} alt="img" loading="lazy" />}

          {data?.text3 && <div><p className="content-image">3. {data?.text3}</p></div>}
          {imgUrl?.[2] && <img width={600} height={300} src={imgUrl?.[2]} alt="img" loading="lazy" />}

          {data?.text4 && <div><p className="content-image">4. {data?.text4}</p></div>}
          {imgUrl?.[3] && <img width={600} height={300} src={imgUrl?.[3]} alt="img" loading="lazy" />}

          {data?.text5 && <div ><p className="content-image">5. {data?.text5}</p></div>}
          {imgUrl?.[4] && <img width={600} height={300} src={imgUrl?.[4]} alt="img" loading="lazy" />}

          {data?.text6 && <div><p className="content-image">6. {data?.text6}</p></div>}
          {imgUrl?.[5] && <img width={600} height={300} src={imgUrl?.[5]} alt="img" loading="lazy" />}

          {data?.text7 && <div ><p className="content-image">7. {data?.text7}</p></div>}
          {imgUrl?.[6] && <img width={600} height={300} src={imgUrl?.[6]} alt="img" loading="lazy" />}

          {data?.text8 && <div ><p className="content-image">8. {data?.text8}</p></div>}
          {imgUrl?.[7] && <img width={600} height={300} src={imgUrl?.[7]} alt="img" loading="lazy" />}

          {data?.text9 && <div ><p className="content-image">9. {data?.text9}</p></div>}
          {imgUrl?.[8] && <img width={600} height={300} src={imgUrl?.[8]} alt="img" loading="lazy" />}

          {data?.text10 && <div><p className="content-image">10. {data?.text10}</p></div>}
          {imgUrl?.[9] && <img width={600} height={300} src={imgUrl?.[9]} alt="img" loading="lazy" />}

          {data?.text11 && <div><p className="content-image">11. {data?.text11}</p></div>}
          {imgUrl?.[10] && <img width={600} height={300} src={imgUrl?.[10]} alt="img" loading="lazy" />}

          {data?.text12 && <div><p className="content-image">12. {data?.text12}</p></div>}
          {imgUrl?.[11] && <img width={600} height={300} src={imgUrl?.[11]} alt="img" loading="lazy" />}

          {data?.text13 && <div>
            <p className="content-image">13. {data?.text13}</p></div>}
          {imgUrl?.[12] && <img width={600} height={300} src={imgUrl?.[12]} alt="img" loading="lazy" />}

          {data?.text14 && <div ><p className="content-image">14. {data?.text14}</p></div>}
          {imgUrl?.[13] && <img width={600} height={300} src={imgUrl?.[13]} alt="img" loading="lazy" />}

          {data?.text15 && <div><p className="content-image">15. {data?.text15}</p></div>}
          {imgUrl?.[14] && <img width={600} height={300} src={imgUrl?.[14]} alt="img" loading="lazy" />}



          {data?.actionplan1 && <div>
            <h4>Action Plan/Next Day Activity</h4>
            <ul className="action-list">
              <li>{data?.actionplan1}</li>
              <li>{data?.actionplan2}</li>
              <li>{data?.actionplan3}</li>
            </ul>
          </div>}
        </div>
        <div className="button-container no-print">
          <button onClick={HandleonClick}>Print</button>
          <button onClick={HandleBack}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default Template;
