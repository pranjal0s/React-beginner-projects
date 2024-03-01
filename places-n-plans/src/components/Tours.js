import Card from "./Card";

function Tours({ tours, removeTour, resetTour}) {
    console.log(" tours :", tours)
  return (
    <div>
      <div>
        {Array.isArray(tours) && tours.length > 0 ? (
          tours.map((tour) => <Card {...tour} removeTour={removeTour}></Card>)
        ) : (
          <div>
          <p>No tours available</p>
          <button onClick={ resetTour }> Refresh plans</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tours;
