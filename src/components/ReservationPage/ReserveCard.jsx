import '../styles/ReserveCard.css'

const ReserveCard = ({ reserve, setReserveSelected, deleteBooking,setFormClose }) => {
const checkIn = new Date(reserve.checkIn);
const checkOut = new Date(reserve.checkOut);
const reservationDays = (checkOut - checkIn) / (1000 * 60 * 60 * 24);

    const handleReview = () => {
    const obj = {
      ...reserve,
      reservationDays,
      subtotal: reserve.hotel.price * reservationDays,
    };
    setReserveSelected(obj);
    setFormClose(false)
  };

  const handleDeleteBooking = () => {
    const url = `https://hotels-t8vd.onrender.com/bookings/${reserve.id}`;
    deleteBooking(url, reserve.id);
  };

  return (
    <article className="ReserveCrad">
      <header className="ReserveCrad_header">
        <img
          className="ReserveCrad_img"
          src={reserve.hotel.images[0].url}
          alt=""
        />
      </header>
      <section className="ReserveCrad_info">
        <h3 className="infoName">{reserve.hotel.name}</h3>
        <div className="infoLocation">
          {reserve.hotel.city.name}, {reserve.hotel.city.country}
        </div>
        <div className="infoReview" onClick={handleReview}>
          Rate and comment this visit...
        </div>
      </section>
      <section className="ReserveCrad_reserve">
        <ul className="reserve_list">
          <li className="reserve_cost">
            <span className="reserve_spanTitle">Reservation Days </span>
            <span className="reserve_spanInfo">{reservationDays}</span>
          </li>
          <li className="reserve_cost">
            <span className="reserve_spanTitle">subtotal Price </span>
            <span className="reserve_spanInfo"> USD$ {reserve.hotel.price * reservationDays}</span>
          </li>
        </ul>
      </section>
      <footer className="ReserveCrad_footer">
        <button className="ReserveCrad_btn">
          <i onClick={handleDeleteBooking} className="bx bx-trash"></i>
        </button>
      </footer>
    </article>
  );
};

export default ReserveCard;
