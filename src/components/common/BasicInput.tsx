import InputId from '../../models/InputId'
import 'bootstrap/dist/css/bootstrap.css'


const BasicInput = ({ label, id, type, placeholder, value }: InputId) => {
  return (
    <div className="form-check col-10 d-flex align-items-center p-0 text-start justify-content-start my-1">
      <label className='form-label col-1 me-5 fw-bold' htmlFor={label}> {label + ':'}</label>
      <input className='form-control flex-1 border me-auto border-1 border-dark mb-2 border-opacity-75 fw-bold' type={type} name={label} id={id} placeholder={placeholder} value={value} />
    </div>
  )
}

export default BasicInput