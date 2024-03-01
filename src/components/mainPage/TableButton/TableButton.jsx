export default function TableButton({ image, onClick }) {
    return (
      <button className='TableButton' onClick={onClick}>
        <img src={image} alt="" />
      </button>
    );
  }