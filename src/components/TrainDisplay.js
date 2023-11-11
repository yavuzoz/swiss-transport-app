

export default function TrainDisplay({connections}){
    return (
        <div className="col-8">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Train</th>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">Duration (min)</th>
                  <th scope="col">Departure</th>
                </tr>
              </thead>
              <tbody>
                {
                  connections?.map((connection, index) => 
                    <tr className={connection.hasMinimumDuration ? "fastest" : ""} key={index}>
                      <td>{index}</td>
                      <td>{connection.trainNames}</td>
                      <td>{connection.from}</td>
                      <td>{connection.to}</td>
                      <td>{connection.duration}</td>
                      <td>{connection.departure}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
        </div>
    );
}