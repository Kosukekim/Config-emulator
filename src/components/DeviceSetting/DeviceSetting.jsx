import "./DeviceSetting.css"

var storage = sessionStorage;
export default function DeviceSetting() {
  function handleDeviceStg(event){
    console.log(event.target.value);
    var k = "DeviceStg";
    var v = event.target.value;
    storage.setItem(k, v);
  }
  return (
    <div className='deviceStg'>
      <p>Device Setting</p>
      <input type="text" placeholder="devicesetting" defaultValue={storage.getItem("DeviceStg")} onChange={(event) => handleDeviceStg(event)}></input>
    </div>
  )
}
