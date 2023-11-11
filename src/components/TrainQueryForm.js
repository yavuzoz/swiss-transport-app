

export default function TrainQueryForm({handleFormChange, handleFindConnections}){
    return (
        <div className="col-4">
            <form>
              <div className="mb-3">
                <label className="form-label">From</label>
                <input className="form-control" 
                       name="fromLocation"
                       onChange={handleFormChange}/>
              </div>
              <div className="mb-3">
                <label className="form-label">To</label>
                <input className="form-control" 
                       name="toLocation"
                       onChange={handleFormChange}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Time</label>
                <input type="datetime-local" 
                       className="form-control" 
                       name="datetime"
                       onChange={handleFormChange}/>
              </div>

              <button type="submit" className="btn btn-primary" onClick={handleFindConnections}>Find connections</button>
            </form>
          </div>
    )
}