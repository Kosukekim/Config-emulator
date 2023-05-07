import "./OtherSetting.css"

var storage = sessionStorage;
export default function OtherSetting() {
  function handleOtherStg(event){
    console.log(event.target.value);
    var k = "OtherStg";
    var v = event.target.value;
    storage.setItem(k, v);
  }
  return (
    <div className='otherStg'>
      <p>Other Setting</p>
      <input type="text" placeholder="othersetting" defaultValue={storage.getItem("OtherStg")} onChange={(event) => handleOtherStg(event)}></input>
    </div>
  )
}
