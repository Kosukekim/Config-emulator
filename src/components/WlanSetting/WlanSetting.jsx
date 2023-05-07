import "./WlanSetting.css"

var storage = sessionStorage;
export default function WlanSetting() {

  function handleWlanStg(event){
    console.log(event.target.value);
    var k = "WlanStg";
    var v = event.target.value;
    storage.setItem(k, v);
  }
  return (
    <div className='wlanStg'>
      <p>Wlan Setting</p>
      <input type="text" placeholder="wlansetting" defaultValue={storage.getItem("WlanStg")} onChange={(event) => handleWlanStg(event)}></input>
    </div>
  )
}