import InputId from '../../models/InputId'
import 'bootstrap/dist/css/bootstrap.css'


const SingleEditBadge = ({ label, id, type, placeholder, value }: InputId) => {
  return (
    <div className="form-check col-10 d-flex align-items-center p-0 text-start justify-content-start my-2">
      <label className='form-label col-1 me-5 fw-bold' htmlFor={label}> {label + ':'}</label>
      <input className='form-control flex-1 border me-auto border-1 border-dark mb-2 border-opacity-75 fw-bold ms-2' type={type} name={label} id={id} placeholder={placeholder} value={value} />
      <select name='Role' className="form-select ms-3 w-25 border me-auto border-1 border-dark mb-2 border-opacity-75 fw-bold ms-2">
      </select>
    </div>
  )
}

export default SingleEditBadge